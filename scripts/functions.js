async function displaySlide1() {
    var width = 1100;
    var height = 800;
    var data = await d3.csv("https://louishamilton.github.io/data/^spx_d.csv");
    var svg = d3.select("#slide1").append("svg").attr("width", width).attr("height", height).append("g").attr("transform","translate(20,20)");
    var x = d3.scaleTime().domain(d3.extent(data, function(d) { 
        return new Date(d.Date); 
    }))
    .range([20, width-20]);
    var y = d3.scaleLinear()
        .domain([0, 6000])
        .range([20, height-20]);
    svg.append('g').classed('x axis', true)
  .attr("transform", "translate(20,780)")
  .call(d3.axisBottom(x)
    .tickFormat(d3.timeFormat("%Y-%m-%d")).tickValues(data.map(function(d) { return new Date(d.Date)}) ));

    svg.append('g')
  .classed('y axis', true)
  .call(d3.axisLeft(y)
    .ticks(10));

    svg.append('g').selectAll("dot")
    .data(dataset1)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(d.Date); } )
    .attr("cy", function (d) { return y(d.Close); } )
    .attr("r", 2);
    //.attr("transform", "translate(" + 100 + "," + 100 + ")");
}
