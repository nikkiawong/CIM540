//VARIABLES AND DEBUGGING
var number1 = 1;
var number2 = 2;
var letter1 = 'a';
var letter2 = 'b';
var greeting = "hello";
var greeting2 = "goodbye";
var truthordare = true;
var truthordare2 = false;

function setup() {
  // put setup code here
  console.log("Hello world!");
  console.log(number1);
  console.log("The value of letter2: " + letter2);
  console.log(number1 + number2);

  //does not work:
  console.log(number2 - letter2);

  var addNumber = number1 + number2;
  console.log(addNumber);
}

function draw() {
  // put drawing code here
  //console.log("mouseX: " + mouseX);
  //This will not work, addNumber is not in draw's scope, console.log(addNumber);
}

//Don't start variables with a number
