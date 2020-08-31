// Variables
var tbody = d3.select("tbody");

var tableData = data;

// Function Build Table
function buildTable(data){
    tbody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((value) => {
            var tableCell = row.append("td");
            tableCell.text(value);
        });
    })
}
// When the Button is Clicked
function handleClick(){
    var date = d3.select("#datetime").property("value");
    var filterSearch = tableData;

    if(date) {
        
        filterSearch = filterSearch.filter((row) => row.datetime === date);
    }
    
    buildTable(filterSearch);
}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);
