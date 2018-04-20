var osc;
var value1 = 255;
var value2 = 255;
var value3 = 255;
var value4 = 255;
var value5 = 255;
var value6 = 255;
var value7 = 255;
var value8 = 255;
var value9 = 0;
var value10 = 0;
var value11 = 0;
var value12 = 0;
var value13 = 0;
var notes = [60,61,62, 63,64, 65, 66, 67, 68, 69, 70, 71, 72];
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
  osc.fade(0.2,0.2);

  // If we set a duration, fade it out
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-40);
  }
}

function draw() {
  // put drawing code here
  createCanvas(1000,600);
  background(255);
  stroke(0);

  textSize(16);
  fill(200);
  text("a",50,460);
  text("s",150,460);
  text("d",250,460);
  text("f",350,460);
  text("j",450,460);
  text("k",550,460);
  text("l",650,460);
  text(";",750,460);

  textSize(16);
  text("q", 110,10);
  text("e", 210,10);
  text("r", 410,10);
  text("u", 510,10);
  text("i", 610,10);

  fill(value8);
  rect(10,30,100,400);
  fill(value7);
  rect(110,30,100,400);
  fill(value6);
  rect(210,30,100,400);
  fill(value5);
  rect(310,30,100,400);
  fill(value4);
  rect(410,30,100,400);
  fill(value3);
  rect(510,30,100,400);
  fill(value2);
  rect(610,30,100,400);
  fill(value1);
  rect(710,30,100,400);

  fill(value11);
  rect(90,30,40,230);
  fill(value12);
  rect(190,30,40,230);
  fill(value9);
  rect(390,30,40,230);
  fill(value10);
  rect(490,30,40,230);
  fill(value13);
  rect(590,30,40,230);

}

function keyTyped() {
  // Map mouse to the key index

  if (key === ';') {
    value1 = "#ffcce6";
    playNote(notes[12]);
  }

  if (key === 'l') {
    value2 = "#ff4da6";
    playNote(notes[11]);
  }

  if (key === 'i') {
    value13 = 100;
    playNote(notes[10]);
  }

  if (key === 'k') {
    value3 = "#c653c6";
    playNote(notes[9]);
  }

  if (key === 'u') {
    value10 = 100;
    playNote(notes[8]);
  }

  if (key === 'j') {
    value4 = "#1a75ff";
    playNote(notes[7]);
  }

  if (key === 'r') {
    value9 = 100;
    playNote(notes[6]);
  }

  if (key === 'f') {
    value5 = "#47d147";
    playNote(notes[5]);
  }

  if (key === 'd') {
    value6 = "#ffd11a";
    playNote(notes[4]);
  }

  if (key === 'e') {
    value12 = 100;
    playNote(notes[3]);
  }

  if (key === 's') {
    value7 = "#ff751a";
    playNote(notes[2]);
  }


  if (key === 'q') {
    value11 = 100;
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

  if (value9 === 0) {
    value9 = 0;
  } else {
    value9 = 0;
  }

  if (value10 === 0) {
    value10 = 0;
  } else {
    value10 = 0;
  }

  if (value11 === 0) {
    value11 = 0;
  } else {
    value11 = 0;
  }

  if (value12 === 0) {
    value12 = 0;
  } else {
    value12 = 0;
  }

  if (value13 === 0) {
    value13 = 0;
  } else {
    value13 = 0;
  }

  return false; // prevent any default behavior
}
