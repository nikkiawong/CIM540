function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255);
}

function draw() {
  // put drawing code here
  fill("red");
  rect(centerX -150,centerY -100,100,100);
  ellipse(centerX -100,centerY -50,50,50);
  rect(centerX +25,centerY -100,100,100);
  ellipse(centerX +75,centerY -50,50,75);
}
