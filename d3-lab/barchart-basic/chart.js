//Select the SVG element from the HTML
// Define the width and margins
var svg = d3.select("svg"),
margin = 200,
width = svg.attr("width") - margin,
height = svg.attr("height") - margin


//Add the headline to the SVG
svg.append("text")
.attr("transform", "translate(100,50)")
.attr("font-size", "24px")
.text("Third-party voting in Maryland is fairly uncommon")


//Add the source to the SVG
svg.append("text")
.attr("transform", "translate(100,480)")
.attr("font-size", ".8em")
.attr("font-style", "italic")
.text("Source: Maryland State Board of Elections, based on graphic by Sean McGoey")


//Define the scales for the x-axis and y-axis
  //Need to define domain (input) and range (output)
    //domain is empty, will define later based on data
    //range is the width (for x) or height (for y) of the svg
  //padding adds space between bars
var xScale = d3.scaleBand().range([0, width]).padding(0.4),
yScale = d3.scaleLinear().range([height, 0]);

//The above code added a group element to our SVG. We will add our axes and bars to the group element. We add a transform attribute to position our graph with some margin. 
var g = svg.append("g")
       .attr("transform", "translate(" + 100 + "," + 100 + ")");


//This loads the csv data file using the d3.csv() method. We have added error handling in case the file fails to load. 
d3.csv("./3party-data.csv", function(error, data) {
if (error) {
    throw error;
}

// Here we provide our domain values to the x and y scales. 
  //We use data.map() to map our discrete year values to the x scale. 
  //And we use d3.max() function to input our domain [0,max] value for y axis.
  xScale.domain(data.map(function(d) { return d.election; }));
yScale.domain([0, d3.max(data, function(d) { return +d.p_share; })]);

//This adds the axes to the SVG
  //We add another group element to have our x-axis grouped under one group element. We then use the transform attribute to shift our x-axis towards the bottom of the SVG. 
g.append("g")
 .attr("transform", "translate(0," + height + ")")
  //this call() inserts the x-axis into the group
 .call(d3.axisBottom(xScale))
 //now we append some text to the group for the axis scales (and then style and position it)
 .append("text")
 .attr("y", height - 250)
 .attr("x", width - 100)
 .attr("text-anchor", "end")
 .attr("fill", "black")
 .attr("font-size", "1.25em")
 .attr("font-weight", "bold")
 .text("Year");

//Now we add the y-axis in a similar manner
g.append("g")
  //use tickFormat to add the percent sign
 .call(d3.axisLeft(yScale).tickFormat(function(d){
     return d + "%";
 })
 //define the number of ticks for the y-axis
 .ticks(10))
 //append text for the axis label, position and style it
 .append("text")
 .attr("transform", "rotate(-90)")
 .attr("y", 6)
 .attr("dy", "-5.1em")
 .attr("text-anchor", "end")
 .attr("fill", "black")
 .attr("font-size", "1.25em")
 .attr("font-weight", "bold") .text("Percent of vote to 3rd Party");

//Now we create bars cooresponding with our data
 //first we create dynamic bars based on the data using the svg rectangle element
g.selectAll(".bar")
 .data(data)
 .enter().append("rect")
  //add the class "bar" to return the color from our stylesheet
 .attr("class", "bar")
 // Specify the x and y positions of each of the bars 
 .attr("x", function(d) { return xScale(d.election); })
 .attr("y", function(d) { return yScale(+d.p_share); })
 // provide a width and height to the bars
 .attr("width", xScale.bandwidth())
 .attr("height", function(d) { return height - yScale(+d.p_share); });
});


// Add annotation
  // Based on this custom annotations library: https://d3-graph-gallery.com/graph/custom_annotation.html#minimal
const annotations = [
    {
      note: {
        title: "Ross Perot",
        label: "won over 14% an independent candidate in 1992.",
        wrap: 300,  // size

      },
      connector: {
        end: "arrow",        // none, or arrow or dot
        type: "line",       // Line or curve
        points: 3,           // Points in curve
        lineType : "horizontal"
      },
      color: ["purple"],
      x: 180,
      y: 100,
      dy: 100,
      dx: 100
    }
  ]
  
  // Add annotation to the chart
  const makeAnnotations = d3.annotation()
    .annotations(annotations)
  d3.select("svg")
    .append("g")
    .call(makeAnnotations)
  

    

