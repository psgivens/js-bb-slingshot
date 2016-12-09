
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
//      .attr("class", "bar")
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function (d) {
      return d * 4;
    })
    .attr("fill", function (d) {
      return "rgb(0, 0, " + (d * 10) +")";
    });
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
