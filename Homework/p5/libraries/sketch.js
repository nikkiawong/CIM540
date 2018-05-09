var aud
var val
//var euphoria

//function preload() {
  //euphoria = loadImage("assets/euphoria.jpg");
//}

function setup() {
  aud = createAudio('assets/audio.mp3');

  background(255,400,400);

  aud.showControls();

  aud.addCue(0.4, changeBackground, color("#fadd70"));
  aud.addCue(1.0, changeBackground, color("#61bbd0"));
  aud.addCue(1.5, changeBackground, color("#f5f8f5"));
  aud.addCue(2.0, changeBackground, color("#183333"));
  aud.addCue(5.0, changeBackground, color("#d46d5c"));
  aud.addCue(6.0, changeBackground, color("#fadd70"));
  aud.addCue(8.8, changeBackground, color("#61bbd0"));
  aud.addCue(9.0, changeBackground, color("#183333"));
  aud.addCue(9.5, changeBackground, color("#d46d5c"));
  aud.addCue(10.0, changeBackground, color("#fadd70"));
  aud.addCue(10.5, changeBackground, color("#61bbd0"));
  aud.addCue(11, changeBackground, color("#183333"));
  aud.addCue(11.5, changeBackground, color("#d46d5c"));
  aud.addCue(12.0, changeBackground, color("#fadd70"));
  aud.addCue(12.5, changeBackground, color("#61bbd0"));
  aud.addCue(13, changeBackground, color("#183333"));
  aud.addCue(13.5, changeBackground, color("#d46d5c"));
  aud.addCue(14.0, changeBackground, color("#fadd70"));
  aud.addCue(14.5, changeBackground, color("#61bbd0"));
  aud.addCue(15, changeBackground, color("#183333"));
  aud.addCue(15.5, changeBackground, color("#d46d5c"));
  aud.addCue(16.0, changeBackground, color("#fadd70"));


}

function changeBackground(val) {
  background(val);
}
