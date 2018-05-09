var aud

function setup() {
  aud = createAudio('assets/audio.mp3');

  background(250);
}

function draw() {
  createCanvas(2000,1000);
  background(255);

  aud.showControls();
}
