var centerX = 100;
var centerY = 200;
var centerA = 50;
var centerB = 150;
var centerC = 250;

var eyeColor = "green";

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(255);
}

function draw() {
  // put drawing code here

  //rect(x,y,w,h);
  //elipse(r,r,r,r)
  stroke(0);
  strokeWeight(1);


  //face
  fill("#f2b4b4");
  ellipse(centerX+80,centerY+25,230,230);

  //mouth
  fill("#d64646");
  triangle(centerX+40,centerY+88,centerX+120,centerY+88,centerX+85,centerY+110);

  //nose
  stroke("#d64646");
  fill("#f2b4b4");
  ellipse(centerA+130,centerB+115,120,60);

  //nostrils
  fill("#d64646");
  ellipse(centerX+65,centerY+65,25,40);
  ellipse(centerX+98,centerY+65,25,40)

  //eyes
  var xOffset = map(mouseX, 0, width, -1,1);
  var yOffset = map(mouseY, 0, height, -3,0);
  console.log("xOffset: " + xOffset + " yOffset: " + yOffset);
  stroke("black");
  fill("white");
  ellipse(centerX+125,centerY-5,40,50);
  ellipse(centerX+40,centerY-5,40,50);

  //eye color
  noStroke();
  fill(eyeColor);
  ellipse(centerX+125 + xOffset,centerC-47 + yOffset,25,35);
  ellipse(centerX+40 + xOffset,centerC-47 + yOffset,25,35);

  //pupils
  fill("black");
  ellipse(centerX+125 + xOffset,centerY+8 + yOffset,15,25);
  ellipse(centerX+40 + xOffset,centerY+8 + yOffset,15,25);

  //ears
  stroke(0);
  fill("#f2b4b4");
  triangle(centerX+30,centerY-70,centerX-40,centerY-67,centerX-10,centerY-20);
  triangle(centerX+125,centerY-70,centerX+200,centerY-67,centerX+170,centerY-20);

  //blush
  noStroke();
  fill("#d64646");
  ellipse(centerX+5,centerY+35,30,20);
  ellipse(centerX+157,centerY+35,30,20);

}

function mousePressed() {
  eyeColor = "blue";
}

function mouseReleased() {
  eyeColor = "green";
}

function changeEyeColor (){
  eyeColor = "blue";
}
