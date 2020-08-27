// // date/time, city, state, country, shape, and comment

// var datetime = data.datetime;
// var city = data.city;
// var state = data.state;
// var country = data.country;
// var shape = data.shape;
// var comment = data.comment;

// // Use D3 to select the table
// var table = d3.select("target-table-display");

// // Use d3 to create a bootstrap striped table
// // http://getbootstrap.com/docs/3.3/css/#tables-striped
// // table.attr("class", "table table-striped");

// // Use D3 to select the table body
// var tbody = d3.select("tbody");

// // Append one table row `tr` to the table body
// var row = tbody.append("tr");
// var cell = row.append("td");
// // Append one cell for the student name
// cell.append("td").text(datetime[0]);

// // Append one cell for the student grade
// // row.append("td").text(newGrade[1]);


// data.forEach(obj => {
//     // for each "element" in the object create a row
//     var tRow = tbody.append("tr");
//     //below "object" becomes the targetet array (element)
//     Object.entries(obj).forEach(([key,value]) => {
//         // console.log(`The key is: ${key} and the value is: ${value}`);
//         var tData = tRow.append("td");
//         // adds the "value" to each row in the table
//         tData.text(value);
//     });
// });




// // data.forEach((dataset) => {

// //     // Iterate through each key and value
// //     Object.entries(dataset).forEach(([key, value]) => {
  
// //       // Use the key to determine which array to push the value to
// //       if (key === "datetime") {
// //         dishes.push(value);
// //       }
// //       else {
// //         spices.push(value);
// //       }
        
// //      });
// //   });
    
  // UFO Sightings - Javascript

// Variable Declaration
var tbody = d3.select("tbody");
// From data.js
var tableData = data;

// Function Build Table
function buildTable(data){
    // Start By Clearing Existing Data
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tr` to the Table Body `tbody`
        var row = tbody.append("tr");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            var cell = row.append("td");
            cell.text(val);
        });
    })
}
// Event that Triggers a Function When the Button is Clicked
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);
