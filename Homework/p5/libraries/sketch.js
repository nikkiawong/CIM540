var scribble = new Scribble();              // global mode

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  stroke( 255, 0, 0 );
  scribble.scribbleLine( x1, y1, x2, y2 );
}
