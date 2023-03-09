let colors = ['#E2A9F5', '#B0B5FF', '#ADE0E9', '#B0FFC9', 'D2F78B', '#ECF7B5', '#D4C59B', "#EBCBB7", "#D49BA5"];
let index = 0;

function setup() {
  createCanvas(960, 960);
  frameRate(12);
  smooth();
}

function draw() {
  background(40);

  fill(colors[index]);
  ellipse(480, 480, 300+index*10, 300+index*10);

  index = (index + 1) % colors.length;
}
