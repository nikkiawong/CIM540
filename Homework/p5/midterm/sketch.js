var centerX = 400;
var centerY = 381;

var hitZoneX = 580;
var hitZoneY = 168;

var japan;
var bgImage;
//var hitImage;

var ellipseColorSapporo = "white";
var ellipseColorHakodate = "white";
var ellipseColorAsahikawa = "white";
var ellipseColorYonezawa = "white";
var ellipseColorKirikata = "white";
var ellipseColorSano = "white";
var ellipseColorTokyo = "white";
var ellipseColorYokohama = "white";
var ellipseColorTakayama = "white";
var ellipseColorKyoto = "white";
var ellipseColorWakayama = "white";
var ellipseColorHiroshima = "white";
var ellipseColorHakata = "white";
var ellipseColorKumamoto = "white";
var ellipseColorTokushima = "white";
var ellipseColorKagoshima = "white";

function preload() {
  japan = loadImage("assets/3089.png");
  //hitImage = loadImage("assets/sappororamen.jpg");
}

function setup() {
    createCanvas(800, 762);
    bgImage = japan;
}

function draw() {
  background(255);
  image(bgImage,0,0);

  //sapporo
  fill(ellipseColorSapporo);
  ellipse(580, 168, 10, 10);
    if (mouseX > 570 && mouseX < 590 && mouseY > 158 && mouseY < 178) {
        ellipseColorSapporo = "red";
    } else {
        ellipseColorSapporo = "white";
    }

  //hakodate
  fill(ellipseColorHakodate);
  ellipse(552, 210, 10, 10);
  if (mouseX > 542 && mouseX < 562 && mouseY > 200 && mouseY < 220) {
      ellipseColorHakodate = "red";
  } else {
      ellipseColorHakodate = "white";
  }

  //asahikawa
  fill(ellipseColorAsahikawa);
  ellipse(612, 138, 10, 10);
  if (mouseX > 602 && mouseX < 622 && mouseY > 128 && mouseY < 148) {
      ellipseColorAsahikawa = "red";
  } else {
      ellipseColorAsahikawa = "white";
  }

  //yonezawa
  fill(ellipseColorYonezawa);
  ellipse(532, 365, 10, 10);
  if (mouseX > 522 && mouseX < 542 && mouseY > 355 && mouseY < 375) {
      ellipseColorYonezawa = "red";
  } else {
      ellipseColorYonezawa = "white";
  }

  //kirikata
  fill(ellipseColorKirikata);
  ellipse(529, 390, 10, 10);
  if (mouseX > 519 && mouseX < 539 && mouseY > 380 && mouseY < 400) {
      ellipseColorKirikata = "red";
  } else {
      ellipseColorKirikata = "white";
  }

  //sano
  fill(ellipseColorSano);
  ellipse(515, 458, 10, 10);
  if (mouseX > 505 && mouseX < 525 && mouseY > 448 && mouseY < 468) {
      ellipseColorSano = "red";
  } else {
      ellipseColorSano = "white";
  }

  //tokyo
  fill(ellipseColorTokyo);
  ellipse(515, 478, 10, 10);
  if (mouseX > 505 && mouseX < 525 && mouseY > 468 && mouseY < 488) {
      ellipseColorTokyo = "red";
  } else {
      ellipseColorTokyo = "white";
  }

  //yokohama
  fill(ellipseColorYokohama);
  ellipse(508, 490, 10, 10);
  if (mouseX > 498 && mouseX < 518 && mouseY > 480 && mouseY < 500) {
      ellipseColorYokohama = "red";
  } else {
      ellipseColorYokohama = "white";
  }

  //takayama
  fill(ellipseColorTakayama);
  ellipse(428, 452, 10, 10);
  if (mouseX > 418 && mouseX < 438 && mouseY > 442 && mouseY < 462) {
      ellipseColorTakayama = "red";
  } else {
      ellipseColorTakayama = "white";
  }

  //kyoto
  fill(ellipseColorKyoto);
  ellipse(372, 495, 10, 10);
  if (mouseX > 362 && mouseX < 382 && mouseY > 485 && mouseY < 505) {
      ellipseColorKyoto = "red";
  } else {
      ellipseColorKyoto = "white";
  }

  //wakayama
  fill(ellipseColorWakayama);
  ellipse(343, 530, 10, 10);
  if (mouseX > 333 && mouseX < 353 && mouseY > 520 && mouseY < 540) {
      ellipseColorWakayama = "red";
  } else {
      ellipseColorWakayama = "white";
  }

  //hiroshima
  fill(ellipseColorHiroshima);
  ellipse(245, 515, 10, 10);
  if (mouseX > 235 && mouseX < 255 && mouseY > 505 && mouseY < 525) {
      ellipseColorHiroshima = "red";
  } else {
      ellipseColorHiroshima = "white";
  }

  //hakata
  fill(ellipseColorHakata);
  ellipse(170, 540, 10, 10);
  if (mouseX > 160 && mouseX < 180 && mouseY > 530 && mouseY < 550) {
      ellipseColorHakata = "red";

  } else {
      ellipseColorHakata = "white";
  }

  //kumamoto
  fill(ellipseColorKumamoto);
  ellipse(175, 572, 10, 10);
  if (mouseX > 165 && mouseX < 185 && mouseY > 562 && mouseY < 582) {
      ellipseColorKumamoto = "red";
  } else {
      ellipseColorKumamoto = "white";
  }

  //tokushima
  fill(ellipseColorTokushima);
  ellipse(320, 534, 10, 10);
  if (mouseX > 310 && mouseX < 330 && mouseY > 524 && mouseY < 544) {
      ellipseColorTokushima = "red";
  } else {
      ellipseColorTokushima = "white";
  }

  //kagoshima
  fill(ellipseColorKagoshima);
  ellipse(158, 620, 10, 10);
  if (mouseX > 148 && mouseX < 168 && mouseY > 610 && mouseY < 630) {
      ellipseColorKagoshima = "red";
  } else {
      ellipseColorKagoshima = "white";
  }

  fill("black");
  text("Sapporo", 590, 172);
  text("Hakodate", 562, 214);
  text("Asahikawa", 622, 142);
  text("Yonezawa", 542, 369);
  text("Kirikata", 539, 394);
  text("Sano", 525, 462);
  text("Tokyo", 525, 482);
  text("Yokohama", 518, 494);
  text("Takayama", 438, 456);
  text("Kyoto", 382, 499);
  text("Wakayama", 353, 534);
  text("Hiroshima", 255, 519);
  text("Hakata", 180, 544);
  text("Kumamoto", 185, 576);
  text("Tokushima", 326, 545);
  text("Kagoshima", 168, 624);

  //var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);

  //console.log(hitZoneDist);

  //if (hitZoneDist < 10) {
    //  image(hitImage, hitZoneX - 100, hitZoneY - 100);

  //}

}
