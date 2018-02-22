var questions = ["Is Iceland covered in ice?", "What ocean lies to the east of US?"];

var options = [["true","false"],["pacific","eastern","indian","atlantic"]];

var answers = ["false","atlantic"];

var currentQuestion = 0;

var currentOption = -1;

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255);

  text(questions[currentQuestion], 20,100);

  for(var i = 0; i<options[currentQuestion].length; i++){
      text(options[currentQuestion][i], 10 + (100*i),200);
      var currentDist = dist(mouseX,mouseY, 30 + (100*i),200);

      if(currentDist < 20){
        currentOption = i;
        text("Your current option is: " + options[currentQuestion][currentOption], 20, 120)
      }
  }

}
