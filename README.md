# 🚗 Motor Vehicle Crash Injuries by Borough in NYC

## Overview
This project presents a data visualization of **motor vehicle crash injuries in New York City**. It specifically focuses on the number of injuries per borough, segmented by the type of road user affected: **cyclists**, **motorists**, and **total persons** injured.

The visualization aims to provide insights into how different boroughs fare in terms of road safety, highlighting injury trends for different types of road users.

## Dataset Details
The dataset used in this project is titled **Motor-Vehicle-Crashes.csv** and contains detailed information on motor vehicle crashes in New York City, including the date, location, and the number of injuries and fatalities.

- **Source**: This dataset was sourced from the [NYC Open Data Portal](https://data.cityofnewyork.us/), providing a public database of various types of incidents and statistics throughout the city.
- **Data Description**: The dataset contains information such as crash date, location, borough, injuries, fatalities, and contributing factors.

## Why Did You Choose This Dataset?
The motivation behind choosing this dataset is to address the growing concern regarding **road safety in urban areas**. NYC, being a bustling metropolis, faces significant challenges in ensuring road safety for all users—pedestrians, cyclists, and motorists alike. Visualizing this dataset helps:
- Identify **boroughs with high crash rates**.
- Understand which road users are **most vulnerable** in specific areas.
- Encourage data-driven discussions around **road safety policies** and **infrastructure improvements**.

## Which Fields/Features/Parameters of the Dataset Did You Use?
From the dataset, the following fields were extracted and visualized:
- **BOROUGH**: The borough where the crash occurred (e.g., Manhattan, Bronx, Brooklyn).
- **PERSONS_INJURED**: Total number of people injured in the crash.
- **CYCLISTS_INJURED**: Number of cyclists injured.
- **MOTORISTS_INJURED**: Number of motorists injured.

These parameters were chosen to provide insights into how crashes impact different categories of road users, and how these effects vary across boroughs.

## How Many Data Points Did You Use?
The visualization makes use of the first **1000 rows** from the dataset. These data points are sufficient to provide a representative sample for visualizing borough-level trends in crash-related injuries.

## What Are You Visualizing?
### Visualization Design
The primary visualization is a **grouped bar chart** that displays:
- **Total Injuries**: Represented by a **blue** bar.
- **Cyclists Injured**: Represented by a **green** bar.
- **Motorists Injured**: Represented by a **red** bar.

Each borough is represented as a **group of three bars**—each bar in a group stands for one category of injury. This design choice was made to allow:
- **Within-group comparison** (e.g., comparing different injury types within Manhattan).
- **Across-group comparison** (e.g., comparing cyclists' injuries across all boroughs).

### Visual Elements Explained
- **Color Coding**: Each injury type has a distinct color to make it easy to differentiate between the data points.
- **Grouped Bars**: Each borough has three bars grouped together to show the breakdown of injuries by category.
- **Gradient Background**: A subtle background gradient is used to create an aesthetically pleasing backdrop without distracting from the data.
- **Axis Markings and Tick Marks**: Tick marks and axis labels are added to both the **x-axis** and **y-axis**. The y-axis includes value ticks to help viewers gauge the number of injuries more precisely.
- **Hover Interaction**: When the mouse hovers over a bar, it is highlighted in red and the value is prominently displayed, allowing for easy data inspection.

### How the Visualization Relates to the Data
- **Shapes**: Bars represent quantities of injuries, with the **height** of each bar proportional to the number of injuries.
- **Movement**: Hover effects add **dynamic highlighting** that brings focus to specific data points when the viewer interacts with the visualization.
- **Colors**: The color distinction helps in quickly differentiating between injury types, making it easier for viewers to grasp the comparative impact on different types of road users.

## 🔍 Reference Visualizations
This visualization draws inspiration from:
- **W. E. B. Du Bois**: His use of bold colors and clear bar charts to visualize social data provided inspiration for color choices and the grouped bar format.
- **Edward Tufte**: Tufte's emphasis on clarity, simplicity, and minimizing the "chartjunk" inspired the decision to focus on essential data while keeping the visual design minimal and effective.

### Screenshots and Visual References
**[Include a screenshot here]**  
A screenshot of the grouped bar chart, showing borough-wise injuries across NYC, helps convey the impact of the visualization.

## Insights and Interpretation
- **Cyclist Vulnerability**: Some boroughs, like **Brooklyn** and **Manhattan**, have higher cyclist injuries, indicating areas where cycling infrastructure may need reinforcement.
- **Motorist Safety**: Boroughs such as **Queens** tend to have more motorists injured, possibly indicating higher vehicle usage and the need for better road safety measures.
- **Policy Implications**: These findings can be used to advocate for targeted safety improvements in different boroughs, such as **protected bike lanes** in areas with high cyclist injuries.

## Aesthetic and Interactive Elements
The visualization incorporates several elements to ensure both functionality and visual appeal:
- **Background Gradient**: Provides a visually pleasing but non-distracting canvas.
- **Axis Labels**: Clearly marked x and y axes for context.
- **Hover Effects**: Interactive highlights provide engagement and easy access to precise data values.
- **Legend**: A legend explains each color used, making the visualization self-explanatory.
