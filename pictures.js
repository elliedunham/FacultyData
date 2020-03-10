d3.select("body")
    .selectAll("ol")
    .data(employees)
    .enter()
    .append("li")
    .append("img")
    .attr("src", function(employee)
{
return employee.photo;
}
         )
d3.select("h1")
    .append("p")
    .text("Faculty Pictures")