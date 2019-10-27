// from data.js
const tableData = data;

// Create a table to sore the UFO sighting data
const tbody = d3.select("tbody");

data.forEach((sighting) => {
    console.log(sighting);
  
    // Append one table row `tr` for each sighting
    const tr = tbody.append("tr");
  
    // Use `Object.entries` to console.log each sighting value
    Object.entries(sighting).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
  
    // Add the values into each table cell  
      tr.append("td").text(value);
    });
});
  

// Select the button
const button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

});

console.log(filteredData);