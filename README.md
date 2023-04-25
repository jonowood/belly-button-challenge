<img src="/static/images/title_banner.jpg" width="1100">

# Module 14 Challenge Submission - Interactive Web Visualizations

#### This repository contains the code and resources for the Interactive Web Visualizations project, developed as part of the Data Visualization Course at the University of Western Australia. In this project, we have utilized JavaScript, D3.js, and Plotly.js libraries to create interactive visualizations of microbial species (OTUs) found in individual human belly buttons. The dataset used in this project has been analysed and visualized using various techniques, allowing users to explore the microbial composition for everyone in an engaging and informative manner.


## Table of Contents
- [Getting Started](#getting-started)
- [Project Deliverables](#project-deliverables)
- [Conclusion](#conclusion)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [References](#references)

## Getting Started

To get started with this project, clone or download the repository and open the `index.html` file in your browser. The project is built using JavaScript, D3.js, and Plotly.js libraries. No additional setup is required.

## Project Deliverables

This project provides an interactive visualization of a dataset containing information about the microbial species (OTUs) found in individual human belly buttons. The visualization includes the following:

1.	A dropdown menu to select individual subjects by ID.
2.	A bar chart showing the top 10 OTUs found in the selected individual.
3.	A bubble chart displaying all OTUs found in the selected individual, with the size and colour of the bubbles representing the abundance of each OTU.
4.	Metadata about the selected individual, including demographic information and sample-specific metrics.
5.	A gauge chart displaying the selected individual's weekly washing frequency 



<img src="/static/images/barplot.png" width="800">


<img src="/static/images/bubbleplot.png" width="500">


<img src="/static/images/gagueplot.png " width="500">

## Conclusion
This Interactive Web Visualizations project utilizes the power of JavaScript, D3.js, and Plotly.js libraries in creating engaging and informative visualizations for complex datasets. By providing users with the ability to explore the microbial composition of individual human belly buttons, the project demonstrates the potential for web-based visualizations in conveying scientific information effectively.
As data visualization techniques continue to evolve, projects like this one will continue to play a critical role in bridging the gap between complex data and user understanding, facilitating informed decision-making and promoting a deeper appreciation of the underlying science.

## Project Structure

```
README.md
index.html
samples.json
static
   |-- images
   |   |-- title_banner.jpg
   |   |-- bubbleplot.png
   |   |-- gagueplot.png
   |-- js
   |   |-- .gitkeep
   |   |-- app.js
   |   |-- bonus.js 
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments
I would like to thank our bootcamp instructors for their guidance and support throughout this assignment.

## References
-	D3.js: https://d3js.org/
-	Plotly.js: https://plotly.com/javascript/
-	Dataset Source: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json- 
-	University of Western Australia Data Analysis Bootcamp: https://bootcamp.ce.uwa.edu.au/data/