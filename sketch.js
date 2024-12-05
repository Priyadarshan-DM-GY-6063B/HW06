let data;
let boroughInjuries = {};
let boroughNames = [];
let colors = {};
let barWidth;

function preload() {
  data = loadTable('./data/Motor-Vehicle-Crashes.csv', 'csv', 'header'); //dataset
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupData();
  barWidth = (width - 200) / (boroughNames.length * 4); 

  noLoop();
  drawBackgroundGradient();
  drawBars();
  drawAxesAndLabels();
  drawLegend();
  drawGraphBorders();
  drawAxisMarkings();
}

function draw() {
  // Empty - everything is drawn in setup or on interaction
}

function setupData() {
  // Extract boroughs and persons injured data
  let boroughs = data.getColumn("BOROUGH");
  let personsInjured = data.getColumn("PERSONS_INJURED");
  let cyclistsInjured = data.getColumn("CYCLISTS_INJURED");
  let motoristsInjured = data.getColumn("MOTORISTS_INJURED");

  // Initialize borough injury counts
  for (let i = 0; i < boroughs.length; i++) {
    let borough = boroughs[i];
    if (borough && borough.trim() !== "") {
      boroughInjuries[borough] = { total: 0, cyclists: 0, motorists: 0 };
    }
  }

  // Aggregate injury data by borough
  for (let i = 0; i < boroughs.length && i < 1000; i++) {
    let borough = boroughs[i];
    let numInjured = parseInt(personsInjured[i]);
    let numCyclists = parseInt(cyclistsInjured[i]);
    let numMotorists = parseInt(motoristsInjured[i]);

    if (borough && borough.trim() !== "") {
      if (!isNaN(numInjured)) boroughInjuries[borough].total += numInjured;
      if (!isNaN(numCyclists)) boroughInjuries[borough].cyclists += numCyclists;
      if (!isNaN(numMotorists)) boroughInjuries[borough].motorists += numMotorists;
    }
  }

  // Set up colors for each borough
  boroughNames = Object.keys(boroughInjuries);
  colors = {
    total: color(51, 153, 255), // Blue for total injuries
    cyclists: color(0, 204, 102), // Green for cyclists injured
    motorists: color(255, 87, 51) // Red for motorists injured
  };
}

function drawBackgroundGradient() {
  for (let y = 0; y < height; y++) {
    let gradient = lerpColor(color(240, 248, 255), color(135, 206, 235), y / height);
    stroke(gradient);
    line(0, y, width, y);
  }
}

function drawBars() {
  let maxInjuries = Math.max(...Object.values(boroughInjuries).flatMap(b => [b.total, b.cyclists, b.motorists]));

  for (let i = 0; i < boroughNames.length; i++) {
    let borough = boroughNames[i];
    let xBase = 100 + i * (barWidth * 4); // Space for grouped bars

    // Draw each category as part of the grouped bars
    let categories = ['total', 'cyclists', 'motorists'];
    for (let j = 0; j < categories.length; j++) {
      let category = categories[j];
      let injuries = boroughInjuries[borough][category];
      let barHeight = map(injuries, 0, maxInjuries, 0, height - 250);

      let x = xBase + j * barWidth;

      // Draw bar without drop shadow effect
      fill(colors[category]);
      noStroke();
      rect(x, height - 150 - barHeight, barWidth - 20, barHeight, 10);

      // Label the number of injuries above each bar
      fill(0);
      textSize(12);
      textAlign(CENTER, BOTTOM);
      text(injuries, x + (barWidth / 2) - 10, height - 160 - barHeight);
    }

    // Label the borough below the grouped bars
    textAlign(CENTER, BOTTOM);
    textSize(14);
    fill(0);
    text(borough, xBase + (barWidth * 1.5) - 10, height - 120);
  }
}

function drawAxesAndLabels() {
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("Total Injuries by Borough and Injury Type", width / 2, 40);
  textSize(14);
  text("Borough", width / 2, height - 40);

  // Y-axis label
  push();
  translate(40, height / 2);
  rotate(-HALF_PI);
  text("Number of Injuries", 0, 0);
  pop();
}

function drawLegend() {
  let x = width - 200;
  let y = 60;

  fill(0);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Legend", x, y);

  textSize(12);
  let categories = ['total', 'cyclists', 'motorists'];
  for (let j = 0; j < categories.length; j++) {
    let category = categories[j];
    fill(colors[category]);
    rect(x, y + 20 + (j * 25), 15, 15);

    fill(0);
    textAlign(LEFT, CENTER);
    text(`${category.charAt(0).toUpperCase() + category.slice(1)} Injured`, x + 25, y + 27 + (j * 25));
  }
}

function drawGraphBorders() {
  // Draw x and y axis lines to add an outer boundary for the graph
  stroke(0);
  strokeWeight(2);

  // X-axis line
  line(80, height - 150, width - 80, height - 150); 

  // Y-axis line
  line(100, height - 150, 100, 100);
}

function drawAxisMarkings() {
  // Draw Y-axis tick marks and labels
  let maxInjuries = Math.max(...Object.values(boroughInjuries).flatMap(b => [b.total, b.cyclists, b.motorists]));
  let tickCount = 5;
  let tickSpacing = (height - 250) / tickCount;

  for (let i = 0; i <= tickCount; i++) {
    let y = height - 150 - (i * tickSpacing);
    let tickValue = Math.round((maxInjuries / tickCount) * i);
    
    stroke(0);
    line(95, y, 105, y); // Tick mark on the y-axis

    noStroke();
    fill(0);
    textSize(12);
    textAlign(RIGHT, CENTER);
    text(tickValue, 90, y);
  }

  // Draw X-axis tick marks (for visual separation between groups)
  for (let i = 0; i < boroughNames.length; i++) {
    let xBase = 100 + i * (barWidth * 4);
    stroke(0);
    line(xBase + barWidth * 1.5, height - 150, xBase + barWidth * 1.5, height - 145); // Small tick mark
  }
}

function mouseMoved() {
  drawBackgroundGradient();
  drawBars();
  drawAxesAndLabels();
  drawLegend();
  drawGraphBorders();
  drawAxisMarkings();

  let maxInjuries = Math.max(...Object.values(boroughInjuries).flatMap(b => [b.total, b.cyclists, b.motorists]));

  // Hover effect for highlighting bars
  for (let i = 0; i < boroughNames.length; i++) {
    let borough = boroughNames[i];
    let xBase = 100 + i * (barWidth * 4);

    let categories = ['total', 'cyclists', 'motorists'];
    for (let j = 0; j < categories.length; j++) {
      let category = categories[j];
      let injuries = boroughInjuries[borough][category];
      let barHeight = map(injuries, 0, maxInjuries, 0, height - 250);
      let x = xBase + j * barWidth;

      if (mouseX > x && mouseX < x + barWidth - 20 && mouseY < height - 150 && mouseY > height - 150 - barHeight) {
        fill(255, 0, 0, 150);
        rect(x, height - 150 - barHeight, barWidth - 20, barHeight, 10);
        fill(0);
        textSize(12);
        textAlign(CENTER, BOTTOM);
        text(injuries, x + (barWidth / 2) - 10, height - 160 - barHeight);
        break;
      }
    }
  }
}
