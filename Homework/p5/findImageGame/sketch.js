
var targetPosX = [0,200,400,600,800,1000];

var targetPosY = [0,200,400];

var imageSize = 200;

var pics = [];

var outputText = "Find the soccer ball";

var currentBox = 0;

var startGame;

var sg = false;

function preload(){
  pics[0] = loadImage("assets/Football.png");
  pics[1] = loadImage("assets/basketball.png");
  pics[2] = loadImage("assets/soccer.png");
  pics[3] = loadImage("assets/Tennisball.png");
  pics[4] = loadImage("assets/golfball.png");
  pics[5] = loadImage("assets/baseball.png");
  pics[6] = loadImage("assets/lacrosseball.png");
  pics[7] = loadImage("assets/volleyball.png");
  pics[8] = loadImage("assets/bowlingball.png");

}

function setup(){
  createCanvas(1000,600);
  console.log("First position in targetPosX: " + targetPosX[0]);
  console.log("3rd position in targetPosX: " + targetPosX[2]);
  startGame = createButton("Click to start!");
  startGame.position(width/2, 500);
  startGame.mousePressed(function(){
    sg = true;
  });

}

function draw(){

  background(255);
  if(sg == true){
  fill(0);
  rect(targetPosX[0], targetPosY[0], imageSize, imageSize);
  rect(targetPosX[1], targetPosY[0], imageSize, imageSize);
  rect(targetPosX[2], targetPosY[0], imageSize, imageSize);
  rect(targetPosX[3], targetPosY[0], imageSize, imageSize);
  rect(targetPosX[4], targetPosY[0], imageSize, imageSize);
  rect(targetPosX[0], targetPosY[1], imageSize, imageSize);
  rect(targetPosX[1], targetPosY[1], imageSize, imageSize);
  rect(targetPosX[2], targetPosY[1], imageSize, imageSize);
  rect(targetPosX[3], targetPosY[1], imageSize, imageSize);

  if(mouseX >= targetPosX[0] && mouseX < targetPosX[1] && mouseY > targetPosY[0] && mouseY <= targetPosY[1]){
    console.log("Box 1");
    image(pics[0], targetPosX[0], targetPosY[0]);
    currentBox = 1;
  }

  if(mouseX >= targetPosX[1] && mouseX < targetPosX[2] && mouseY > targetPosY[0] && mouseY <= targetPosY[1]){
    console.log("Box 2");
    image(pics[1], targetPosX[1], targetPosY[0]);
    currentBox = 2;
  }

  if(mouseX >= targetPosX[2] && mouseX < targetPosX[3] && mouseY > targetPosY[0] && mouseY <= targetPosY[1]){
    console.log("Box 3");
    image(pics[2], targetPosX[2], targetPosY[0]);
    currentBox = 3;
  }

  if(mouseX >= targetPosX[3] && mouseX < targetPosX[4] && mouseY > targetPosY[0] && mouseY <= targetPosY[1]){
    console.log("Box 4");
    image(pics[3], targetPosX[3], targetPosY[0]);
    currentBox = 4;
  }

  if(mouseX >= targetPosX[4] && mouseX < targetPosX[5] && mouseY > targetPosY[0] && mouseY <= targetPosY[1]){
    console.log("Box 5");
    image(pics[4], targetPosX[4], targetPosY[0]);
    currentBox = 5;
  }

  if(mouseX >= targetPosX[0] && mouseX < targetPosX[1] && mouseY > targetPosY[1] && mouseY <= targetPosY[2]){
    console.log("Box 6");
    image(pics[5], targetPosX[0], targetPosY[1]);
    currentBox = 6;
  }

  if(mouseX >= targetPosX[1] && mouseX < targetPosX[2] && mouseY > targetPosY[1] && mouseY <= targetPosY[2]){
    console.log("Box 7");
    image(pics[6], targetPosX[1], targetPosY[1]);
    currentBox = 7;
  }

  if(mouseX >= targetPosX[2] && mouseX < targetPosX[3] && mouseY > targetPosY[1] && mouseY <= targetPosY[2]){
    console.log("Box 8");
    image(pics[7], targetPosX[2], targetPosY[1]);
    currentBox = 8;
  }

  if(mouseX >= targetPosX[3] && mouseX < targetPosX[4] && mouseY > targetPosY[1] && mouseY <= targetPosY[2]){
    console.log("Box 9");
    image(pics[8], targetPosX[3], targetPosY[1]);
    currentBox = 9;
  }
}

  textSize(32);
  text(outputText, 50,475);

  if(currentBox == 3){
    console.log("You won!!!");
    outputText = "You Won!!!";
  }else if(currentBox == 1 || currentBox == 2 || currentBox == 4 || currentBox == 5 || currentBox == 6 || currentBox == 7 || currentBox == 8 || currentBox == 9){
    console.log("You lose!!!");
    outputText = "You Lose!!!";
  }else{
    outputText = "Find the soccer ball";
  }

}
