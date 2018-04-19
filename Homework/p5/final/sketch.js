var osc;
var value1 = 255;
var value2 = 255;
var value3 = 255;
var value4 = 255;
var value5 = 255;
var value6 = 255;
var value7 = 255;
var value8 = 255;
var notes = [60,62, 64, 65, 67, 69, 71, 72];
var trigger = 0;

function setup() {
  // A triangle oscillator
   osc = new p5.TriOsc();
   // Start silent
   osc.start();
   osc.amp(0);
}

// A function to play a note
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  // Fade it in
  osc.fade(0.5,0.2);

  // If we set a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {
  // put drawing code here
  createCanvas(1000,600);
  background(255);
  stroke(0);

  fill(value8);
  rect(10,0,100,400);
  fill(value7);
  rect(110,0,100,400);
  fill(value6);
  rect(210,0,100,400);
  fill(value5);
  rect(310,0,100,400);
  fill(value4);
  rect(410,0,100,400);
  fill(value3);
  rect(510,0,100,400);
  fill(value2);
  rect(610,0,100,400);
  fill(value1);
  rect(710,0,100,400);
  fill(0);
  rect(90,0,40,230);
  rect(190,0,40,230);
  rect(390,0,40,230);
  rect(490,0,40,230);
  rect(590,0,40,230);

  textSize(20);
  text("C",50,430);
  text("D",150,430);
  text("E",250,430);
  text("F",350,430);
  text("G",450,430);
  text("A",550,430);
  text("B",650,430);
  text("C",750,430);

}

function keyTyped() {
  // Map mouse to the key index

  if (key === ';') {
    value1 = "#ffcce6";
    playNote(notes[7]);
  }

  if (key === 'l') {
    value2 = "#ff4da6";
    playNote(notes[6]);
  }

  if (key === 'k') {
    value3 = "#c653c6";
    playNote(notes[5]);
  }

  if (key === 'j') {
    value4 = "#1a75ff";
    playNote(notes[4]);
  }

  if (key === 'f') {
    value5 = "#47d147";
    playNote(notes[3]);
  }

  if (key === 'd') {
    value6 = "#ffd11a";
    playNote(notes[2]);
  }

  if (key === 's') {
    value7 = "#ff751a";
    playNote(notes[1]);
  }

  if (key === 'a') {
    value8 = "#ff3333";
    playNote(notes[0]);
  }

  // uncomment to prevent any default behavior
  return false;
}

function keyReleased() {
  osc.fade(0,0.5);

  if (value1 === 0) {
    value1 = 255;
  } else {
    value1 = 255;
  }

  if (value2 === 0) {
    value2 = 255;
  } else {
    value2 = 255;
  }

  if (value3 === 0) {
    value3 = 255;
  } else {
    value3 = 255;
  }

  if (value4 === 0) {
    value4 = 255;
  } else {
    value4 = 255;
  }

  if (value5 === 0) {
    value5 = 255;
  } else {
    value5 = 255;
  }

  if (value6 === 0) {
    value6 = 255;
  } else {
    value6 = 255;
  }

  if (value7 === 0) {
    value7 = 255;
  } else {
    value7 = 255;
  }

  if (value8 === 0) {
    value8 = 255;
  } else {
    value8 = 255;
  }

  return false; // prevent any default behavior
}
