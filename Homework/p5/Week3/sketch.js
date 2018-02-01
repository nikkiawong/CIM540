var centerX = 100;
var centerY = 200;
var backgroundColor = "white";

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(255);
}

function draw() {
  // put drawing code here
  background(backgroundColor);
  centerX = mouseX;
  centerY = mouseY;

  //rect(x,y,w,h);
  stroke(0);
  strokeWeight(1);
  fill("white");
  rect(centerX -150,centerY -100,100,100);
  //eye1
  //var varName = map(variable input, range, range, movement range);
  var xOffset = map(mouseX, 0, width, -20,20);
  console.log("xOffset: " + xOffset);
  var yOffset = map(mouseY, 0, height, -20,20);
  console.log("yOffset: " + yOffset);
  ellipse(centerX -100 + xOffset,centerY -50 + yOffset,50,50);
  rect(centerX +25,centerY -100,100,100);
  //eye2
  ellipse(centerX +75 + xOffset,centerY -50 + yOffset,50,75);

  stroke(125);
  strokeWeight(5);
  point(centerX,centerY);

  stroke(255, 0, 0);
  line(centerX -50,centerY +50,centerX +50,centerY +50);

  noStroke();
  fill(0,0,255);
  triangle(centerX,centerY,centerX +25,centerY +25,centerX -25,centerY +25);

}

function mousePressed() {
  backgroundColor = "blue";
}

function mouseReleased() {
  backgroundColor = "red";
}
