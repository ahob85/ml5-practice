let colorData;
let uniqueLabels = {};

function preload() {
  colorData = loadJSON("data/colorData.json");
}

function setup() {
  noLoop();
  getColors();
  drawHistogram();
}

function getColors() {
  let colors = colorData["entries"];
  let uniqueLabel;
  for(var i = 0; i < colors.length; i++) {
    uniqueLabel = colors[i]["label"];
    if(uniqueLabels.hasOwnProperty(uniqueLabel)) {
      uniqueLabels[uniqueLabel]++;
    } else {
      uniqueLabels[uniqueLabel] = 1;
    }
  }
}

function drawHistogram() {
  let graph = document.getElementById("graph");
  data = {
    x: Object.keys(uniqueLabels),
    y: Object.values(uniqueLabels),
    type: "bar"
  };
  Plotly.plot(graph, [data]);
}
