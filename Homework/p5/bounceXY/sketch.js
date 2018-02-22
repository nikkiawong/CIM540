function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  background(255);

  if (startBounce == true) {

    ellipse(posX, posY, 50, 50);

    if (directionY == false) {
      posY++;
    } else {
      posY--;
    }

    if(directionX == false){
      posX++;
    }else{
      posX--;
    }

    if (posY >= height) {
      directionY = true;
    }
  }
}
