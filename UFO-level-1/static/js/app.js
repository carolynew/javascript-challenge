// from data.js
const tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");

data.forEach((sighting) => {
    console.log(sighting);
  
    // Step 2:  Use d3 to append one table row `tr` for each weather report object
    // Don't worry about adding cells or text yet, just try appending the `tr` elements.
    const tr = tbody.append("tr");
  
    // Step 3:  Use `Object.entries` to console.log each weather report value
    Object.entries(sighting).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
  
      // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
      // Step 5: Use d3 to update each cell's text with
      // weather report values (weekday, date, high, low)
      tr.append("td").text(value);
    });
  
    // BONUS: Refactor to use Arrow Functions!
  });
  