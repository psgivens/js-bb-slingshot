
console.log("Welcome to the new world of JavaScript programming");

console.log("Please review react-redux-router-es6-todo for a D3 example.");

console.log("TODO: Createa a D3 gallery project on GitHub");

const d3 = require("d3");

const dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                  11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

const w = 500;
const h = 100;
const barPadding = 1;

var svg = d3
  .select("#app")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

  svg.attr("width", w)
     .attr("height", h);

  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
      return i * (w / dataset.length);
    })
    .attr("y", function (d) {
      return h - (d * 4);
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function (d) {
      return d * 4;
    })
    .attr("fill", function (d) {
      return "rgb(0, 0, " + (d * 10) +")";
    })
    .on("mouseover", function (d) {
      var xPosition = parseFloat(d3.select(this).attr("x"));// + (w / dataset.length) / 2;
      var yPosition = parseFloat(d3.select(this).attr("y")) + 14;

      svg.append("rect")
        .attr("id", "tooltipbox")
        .attr("x", xPosition)
        .attr("y", yPosition - 10)
        .attr("width", 20)
        .attr("height", 15)
        .attr("fill", "yellow")
        .text(d);

      svg.append("text")
        .attr("id", "tooltip")
        .attr("x", xPosition)
        .attr("y", yPosition)
        .attr("text-anchor", "left")
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("font-weight", "bold")
        .attr("fill", "black")
        .text(d);

      d3.select(this)
      .attr("fill", "orange");
    })
    .on("mouseout", function (d) {

        d3.select("#tooltip").remove();
        d3.select("#tooltipbox").remove();

        d3.select (this)
          .transition ().duration (750)
          .attr("fill", "rgb(0, 0, " + (d * 10) + ")");
    })
    ;

  svg.selectAll("text")
     .data(dataset)
     .enter ()
     .append ("text")
     .text(function (d) {
      return d;
     })
     .attr("x", function (d, i) {
       return i * (w / dataset.length) + 5;
     })
     .attr("y", function (d) {
       return h - (d * 4) + 15;
     })
     .attr("font-family", "sans-serif")
     .attr("font-size", "11px")
     .attr("fill", "white")
     ;
