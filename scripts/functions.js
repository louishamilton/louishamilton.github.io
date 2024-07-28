var dateComp = new Date("01/01/1835");
var dateComp2 = new Date("06/01/1942");
var greatDepressionBegins = new Date("06/31/1929");
var civilWarBegins = new Date("04/12/1861");
var louisianaPurchase = new Date("06/31/1803");
var DotcomBubblePeaks = new Date("03/10/2000");
var ww2Ends = new Date("09/02/1945");


async function displaySlide1() {
    var width = 1100;
    var height = 800;
    var data = await d3.csv("https://louishamilton.github.io/data/^spx_d.csv");
    var svg = d3.select("#slide1").append("svg").attr("width", width).attr("height", height).append("g").attr("transform","translate(20,20)");
    var x = d3.scaleTime().domain(d3.extent(data, function(d) { 
        return new Date(d.Date); 
    }))
    .range([0, width-100]);
    var y = d3.scaleLog([.4,6000], [height-50, 50]);

    svg.append('g').classed('x axis', true)
  .attr("transform", "translate(50,750)")
  .call(d3.axisBottom(x)
    .tickFormat(d3.timeFormat("%Y-%m-%d")).ticks(10));

    svg.append('g')
  .classed('y axis', true)
  .attr("transform", "translate(50,0)")
  .call(d3.axisLeft(y)
    .ticks(20, ".1f"));

    svg.append('g').selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(new Date(d.Date)) + 50; } )
    .attr("cy", function (d) { return y(Number(d.Close)); } )
    .attr("r", 2);

    svg.append("rect")
    .attr("x", x(dateComp) + 50)
    .attr("width", x(dateComp2) - x(dateComp))
    .attr("y", 50)
    .attr("height", height - 100)
    .attr("opacity", .5)

    svg.append("rect")
    .attr("fill", "yellow")
    .attr("x", 50)
    .attr("width", x(dateComp))
    .attr("y", 50)
    .attr("height", height - 100)
    .attr("opacity", .5)

    svg.append("rect")
    .attr("fill", "green")
    .attr("x", 50 + x(dateComp2))
    .attr("width", 1000 - x(dateComp2))
    .attr("y", 50)
    .attr("height", height - 100)
    .attr("opacity", .5)

    svg.append("line")
    .attr("x1", x(DotcomBubblePeaks)+50)
    .attr("y1", 50)
    .attr("x2", x(DotcomBubblePeaks)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("Peak of Dot-com Bubble")
    
    svg.append("line")
    .attr("x1", x(ww2Ends)+50)
    .attr("y1", 50)
    .attr("x2", x(ww2Ends)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("World War 2 Ends")

    svg.append("line")
    .attr("x1", x(louisianaPurchase)+50)
    .attr("y1", 50)
    .attr("x2", x(louisianaPurchase)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("Louisiana Purchase")

    svg.append("line")
    .attr("x1", x(greatDepressionBegins)+50)
    .attr("y1", 50)
    .attr("x2", x(greatDepressionBegins)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("Great Depression Begins")
    
    svg.append("line")
    .attr("x1", x(civilWarBegins)+50)
    .attr("y1", 50)
    .attr("x2", x(civilWarBegins)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("Civil War Begins")

    svg.append("line")
    .attr("x1", x(dateComp)+50)
    .attr("y1", 50)
    .attr("x2", x(dateComp)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", 1)
    .style("stroke-width", 3)
    .style("stroke", "black")
    .style("fill", "none")

    svg.append("line")
    .attr("x1", x(dateComp2)+50)
    .attr("y1", 50)
    .attr("x2", x(dateComp2)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", 1)
    .style("stroke-width", 3)
    .style("stroke", "black")
    .style("fill", "none")

    svg.append("text").text("The Early Years")
    .attr("x", 75)
    .attr("y", 250)
    .style("font-size", "22px")
    .style("font-weight", "bold")

    svg.append("text").text("The Lost Century")
    .attr("x", 394)
    .attr("y", 400)
    .style("font-size", "22px")
    .style("font-weight", "bold")

    svg.append("text").text("The Modern Market")
    .attr("x", 775)
    .attr("y", 550)
    .style("font-size", "22px")
    .style("font-weight", "bold")
}

async function displaySlide2() {
    var width = 1100;
    var height = 800;
    var data = await d3.csv("https://louishamilton.github.io/data/^spx_d.csv");
    data = data.filter(function (d) {
        return new Date(d.Date) < dateComp;
    });
    var svg = d3.select("#slide2").append("svg").attr("width", width).attr("height", height).append("g").attr("transform","translate(20,20)");
    var x = d3.scaleTime().domain(d3.extent(data, function(d) { 
        return new Date(d.Date); 
    }))
    .range([0, width-100]);
    var y = d3.scaleLog([.4,3.5], [height-50, 50]);

    svg.append('g').classed('x axis', true)
  .attr("transform", "translate(50,750)")
  .call(d3.axisBottom(x)
    .tickFormat(d3.timeFormat("%Y-%m-%d")).ticks(10));

    svg.append('g')
  .classed('y axis', true)
  .attr("transform", "translate(50,0)")
  .call(d3.axisLeft(y)
    .ticks(20, ".1f"));

    svg.append('g').selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(new Date(d.Date)) + 50; } )
    .attr("cy", function (d) { return y(Number(d.Close)); } )
    .attr("r", 2);

    svg.append("line")
.attr("x1", x(louisianaPurchase)+50)
.attr("y1", 50)
.attr("x2", x(louisianaPurchase)+50)
.attr("y2", height - 50)
.style("stroke-opacity", .5)
.style("stroke-width", 10)
.style("stroke", "red")
.style("fill", "none")
.append("svg:title").text("Louisiana Purchase")
}

async function displaySlide3() {
    var width = 1100;
    var height = 800;
    var data = await d3.csv("https://louishamilton.github.io/data/^spx_d.csv");   
    data = data.filter(function (d) {
        return new Date(d.Date) > dateComp && new Date(d.Date) < dateComp2;
    });
    var svg = d3.select("#slide3").append("svg").attr("width", width).attr("height", height).append("g").attr("transform","translate(20,20)");
    var x = d3.scaleTime().domain(d3.extent(data, function(d) { 
        return new Date(d.Date); 
    }))
    .range([0, width-100]);
    var y = d3.scaleLog([1,40], [height-50, 50]);

    svg.append('g').classed('x axis', true)
  .attr("transform", "translate(50,750)")
  .call(d3.axisBottom(x)
    .tickFormat(d3.timeFormat("%Y-%m-%d")).ticks(10));

    svg.append('g')
  .classed('y axis', true)
  .attr("transform", "translate(50,0)")
  .call(d3.axisLeft(y)
    .ticks(20, ".1f"));

    svg.append('g').selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(new Date(d.Date)) + 50; } )
    .attr("cy", function (d) { return y(Number(d.Close)); } )
    .attr("r", 2);

    svg.append("line")
.attr("x1", x(greatDepressionBegins)+50)
.attr("y1", 50)
.attr("x2", x(greatDepressionBegins)+50)
.attr("y2", height - 50)
.style("stroke-opacity", .5)
.style("stroke-width", 10)
.style("stroke", "red")
.style("fill", "none")
.append("svg:title").text("Great Depression Begins")

svg.append("line")
.attr("x1", x(civilWarBegins)+50)
.attr("y1", 50)
.attr("x2", x(civilWarBegins)+50)
.attr("y2", height - 50)
.style("stroke-opacity", .5)
.style("stroke-width", 10)
.style("stroke", "red")
.style("fill", "none")
.append("svg:title").text("Civil War Begins")
}

async function displaySlide4() {
    var width = 1100;
    var height = 800;
    var data = await d3.csv("https://louishamilton.github.io/data/^spx_d.csv");
    data = data.filter(function (d) {
        return new Date(d.Date) > dateComp2;
    });
    var svg = d3.select("#slide4").append("svg").attr("width", width).attr("height", height).append("g").attr("transform","translate(20,20)");
    var x = d3.scaleTime().domain(d3.extent(data, function(d) { 
        return new Date(d.Date); 
    }))
    .range([0, width-100]);
    var y = d3.scaleLog([6,6000], [height-50, 50]);

    svg.append('g').classed('x axis', true)
  .attr("transform", "translate(50,750)")
  .call(d3.axisBottom(x)
    .tickFormat(d3.timeFormat("%Y-%m-%d")).ticks(10));

    svg.append('g')
  .classed('y axis', true)
  .attr("transform", "translate(50,0)")
  .call(d3.axisLeft(y)
    .ticks(20, ".1f"));

    svg.append('g').selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(new Date(d.Date)) + 50; } )
    .attr("cy", function (d) { return y(Number(d.Close)); } )
    .attr("r", 2);

    svg.append("line")
.attr("x1", x(DotcomBubblePeaks)+50)
.attr("y1", 50)
.attr("x2", x(DotcomBubblePeaks)+50)
.attr("y2", height - 50)
.style("stroke-opacity", .5)
.style("stroke-width", 10)
.style("stroke", "red")
.style("fill", "none")
.append("svg:title").text("Peak of Dot-com Bubble")

svg.append("line")
.attr("x1", x(ww2Ends)+50)
.attr("y1", 50)
.attr("x2", x(ww2Ends)+50)
.attr("y2", height - 50)
.style("stroke-opacity", .5)
.style("stroke-width", 10)
.style("stroke", "red")
.style("fill", "none")
.append("svg:title").text("World War 2 Ends")
}

async function displaySlide5(begin = new Date("12/31/1788"), end = new Date("12/31/2024")) {
    begin = new Date(document.getElementById("start").value);
    end = new Date(document.getElementById("end").value);
    var width = 1100;
    var height = 800;
    var data = await d3.csv("https://louishamilton.github.io/data/^spx_d.csv");
    data = data.filter(function (d) {
        return new Date(d.Date) > begin && new Date(d.Date) < end;
    });
    d3.select('#slide5').selectAll("*").remove();
    var svg = d3.select("#slide5").append("svg").attr("width", width).attr("height", height).append("g").attr("transform","translate(20,20)");
    var x = d3.scaleTime().domain(d3.extent(data, function(d) { 
        return new Date(d.Date); 
    }))
    .range([0, width-100]);
    var y = d3.scaleLog(d3.extent(data, function(d) { 
        return Number(d.Close); 
    }), [height-50, 50]);

    svg.append('g').classed('x axis', true)
  .attr("transform", "translate(50,750)")
  .call(d3.axisBottom(x)
    .tickFormat(d3.timeFormat("%Y-%m-%d")).ticks(10));

    svg.append('g')
  .classed('y axis', true)
  .attr("transform", "translate(50,0)")
  .call(d3.axisLeft(y)
    .ticks(20, ".1f"));

    svg.append('g').selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(new Date(d.Date)) + 50; } )
    .attr("cy", function (d) { return y(Number(d.Close)); } )
    .attr("r", 2);

    svg.append("line")
    .attr("x1", x(DotcomBubblePeaks)+50)
    .attr("y1", 50)
    .attr("x2", x(DotcomBubblePeaks)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("Peak of Dot-com Bubble")
    
    svg.append("line")
    .attr("x1", x(ww2Ends)+50)
    .attr("y1", 50)
    .attr("x2", x(ww2Ends)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("World War 2 Ends")

    svg.append("line")
    .attr("x1", x(louisianaPurchase)+50)
    .attr("y1", 50)
    .attr("x2", x(louisianaPurchase)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("Louisiana Purchase")

    svg.append("line")
    .attr("x1", x(greatDepressionBegins)+50)
    .attr("y1", 50)
    .attr("x2", x(greatDepressionBegins)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("Great Depression Begins")
    
    svg.append("line")
    .attr("x1", x(civilWarBegins)+50)
    .attr("y1", 50)
    .attr("x2", x(civilWarBegins)+50)
    .attr("y2", height - 50)
    .style("stroke-opacity", .5)
    .style("stroke-width", 10)
    .style("stroke", "red")
    .style("fill", "none")
    .append("svg:title").text("Civil War Begins")
}