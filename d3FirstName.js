


d3.select("body")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .classed("employee", true)
    .text(function(employee)
    {
    return employee.firstName;
    })
    
    
