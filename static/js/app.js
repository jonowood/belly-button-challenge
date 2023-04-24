// Function for building the charts
function buildChart(id) {
    // load data from JSON file
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      // extract the samples for the selected id
      var samples = data.samples.filter((sample) => sample.id === id);
      var sample = samples[0];
  
      // EXTRACT METADATA FOR ID
      var metadata = data.metadata.filter((md) => md.id == id);
      var wfreq = metadata[0].wfreq;
      var customMetadata = {
        'Age': metadata.age,
        'BellyButton Type': metadata.bbtype,
        'Ethnicity': metadata.ethnicity,
        'Gender': metadata.gender,
        'Location': metadata.location,
        'Sample ID': metadata.id,
        'Weekly Frequency': metadata.wfreq
      };
  
      // CREATE BAR CHART
      var trace = {
        x: sample.sample_values.slice(0, 10).reverse(),
        y: sample.otu_ids.slice(0, 10).map((id) => `OTU ${id}`).reverse(),
        text: sample.otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
      };
      var layout = {
        title: "Top 10 OTUs per Individual",
        plot_bgcolor: 'rgba(240, 240, 240, 1)', // Background color of plotting area
        margin: { t: 30, l: 150, b: 30 },

      };
      Plotly.newPlot("bar", [trace], layout);
  
      // CREATE BUBBLE CHART
      var trace = {
        x: sample.otu_ids,
        y: sample.sample_values,
        mode: "markers",
        marker: {
          size: sample.sample_values,
          color: sample.otu_ids,
          colorscale: "Jet",
          bgcolor: "grey",
        },
        text: sample.otu_labels,
      };
      var layout = {
        title: "OTU Bubble Chart",
        xaxis: { title: "OTU ID" },
        yaxis: { title: "Sample Value" },
        height: 800,
        width: 1280,
        plot_bgcolor: 'rgba(240, 240, 240, 1)', 
        margin: {
            l: 60,
            r: 60,
            b: 60,
            t: 60,
            pad: 10
          }, 
      };
      Plotly.newPlot("bubble", [trace], layout);

        // CREATE GAGUE CHART
    var data = [
        {
          type: "indicator",
          mode: "gauge+number",
          value: wfreq,
          title: { text: "Belly Button Weekly Washing Frequency", font: { size: 24 } },
          gauge: {
            axis: { range: [null, 9], tickwidth: 1, tickcolor: "grey"},
            bar: { color: "red" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 1], color: "rgb(0, 0, 255)" },
              { range: [1, 2], color: "rgb(0, 85, 255)" },
              { range: [2, 3], color: "rgb(0, 170, 255)" },
              { range: [3, 4], color: "rgb(0, 255, 255)" },
              { range: [4, 5], color: "rgb(85, 255, 170)" },
              { range: [5, 6], color: "rgb(170, 255, 85)" },
              { range: [6, 7], color: "rgb(255, 255, 0)" },
              { range: [7, 8], color: "rgb(255, 170, 0)" },
              { range: [8, 9], color: "rgb(255, 85, 0)" },
            ],            
          },
        },
      ];
      var layout = {
        width: 500,
        height: 400,
        margin: { t: 0, b: 0 },
        bgcolor: 'rgba(240, 240, 240, 1)', // Background color of plotting area
      };
      Plotly.newPlot("gauge", data, layout);
    });
  }
  
  // UPDATE WITH SELECTION
  function optionChanged(id) {
    buildChart(id);
    updateMetadata(id);
  }
  
  // load data from JSON file
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    // extract the list of ids from the data
    var ids = data.names;
  
    // select the dropdown element
    var select = d3.select("#selDataset");
  
    // add options to the select element
    ids.forEach((id) => {
      var option = select.append("option");
      option.text(id);
    });

    // Set the first ID as the default value
    select.property("value", ids[0]);

    // Call the buildChart function with the first ID in the list as an argument
    buildChart(ids[0]);

    // Call the updateMetadata function with the first ID in the list as an argument
    updateMetadata(ids[0]);
    });
  
  function updateMetadata(id) {
    // Load data from the JSON file
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    // Filter the metadata for the selected ID
    var metadata = data.metadata.filter((md) => md.id == id);
  
    // Get the first item from the filtered metadata
    var metaInfo = metadata[0];
  
    // Select the metadata display container
    var metaDataContainer = d3.select("#sample-metadata");
  
    // Clear the existing metadata content
    metaDataContainer.html("");
  
    // Iterate through each key-value pair in the metadata object
    Object.entries(metaInfo).forEach(([key, value]) => {
    // Append a new paragraph with the key-value pair
    metaDataContainer.append("p").text(`${key}: ${value}`);
    });
    });
  }
  
  