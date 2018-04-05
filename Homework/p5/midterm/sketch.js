var centerX = 400;
var centerY = 381;

var hitZoneX = 580;
var hitZoneY = 168;

var hitZoneA = 552;
var hitZoneB = 210;

var hitZoneC = 612;
var hitZoneD = 138;

var hitZoneE = 532;
var hitZoneF = 365;

var hitZoneG = 529;
var hitZoneH = 390;

var hitZoneI = 515;
var hitZoneJ = 458;

var hitZoneK = 515;
var hitZoneL = 478;

var hitZoneM = 508;
var hitZoneN = 490;

var hitZoneO = 428;
var hitZoneP = 452;

var hitZoneQ = 372;
var hitZoneR = 495;

var hitZoneS = 343;
var hitZoneT = 530;

var hitZoneU = 245;
var hitZoneV = 515;

var hitZoneW = 170;
var hitZone1 = 540;

var hitZone2 = 175;
var hitZone3 = 572;

var hitZone4 = 320;
var hitZone5 = 534;

var hitZone6 = 158;
var hitZone7 = 620;

var japan;
var bgImage;
//var hitImage;

var ellipseColorSapporo = "white";
var ellipseColorHakodate = "white";
var ellipseColorAsahikawa = "white";
var ellipseColorYonezawa = "white";
var ellipseColorKitakata = "white";
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
  hitImage = loadImage("assets/sapporoRamen-01.png");
  hakodateImage = loadImage("assets/hakodateRamen-02.png");
  asahikawaImage = loadImage("assets/asahikawaRamen-03.png");
  yonezawaImage = loadImage("assets/yonezawaRamen-04.png");
  kitakataImage = loadImage("assets/kitakataRamen-05.png");
  sanoImage = loadImage("assets/sanoRamen-06.png");
  tokyoImage = loadImage("assets/tokyoRamen-07.png");
  yokohamaImage = loadImage("assets/yokohamaRamen-08.png");
  takayamaImage = loadImage("assets/takayamaRamen-09.png");
  kyotoImage = loadImage("assets/kyotoRamen-10.png");
  wakayamaImage = loadImage("assets/wakayamaRamen-11.png");
  hiroshimaImage = loadImage("assets/hiroshimaRamen-12.png");
  hakataImage = loadImage("assets/hakataRamen-13.png");
  kumamotoImage = loadImage("assets/kumamotoRamen-14.png");
  tokushimaImage = loadImage("assets/tokushimaRamen-15.png");
  kagoshimaImage = loadImage("assets/kagoshimaRamen-16.png");
  ramenImage = loadImage("assets/ramenKyara-17.png");
}

function setup() {
    createCanvas(800, 762);
    bgImage = japan;
}

function draw() {
  background(255);
  image(bgImage,0,0);
  image(ramenImage, 75, 120);

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

  //
  fill(ellipseColorKitakata);
  ellipse(529, 390, 10, 10);
  if (mouseX > 519 && mouseX < 539 && mouseY > 380 && mouseY < 400) {
      ellipseColorKitakata = "red";
  } else {
      ellipseColorKitakata = "white";
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
  text("Kitakata", 539, 394);
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

  var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);
  var hitZoneDist1 = dist(mouseX, mouseY, hitZoneA, hitZoneB);
  var hitZoneDist2 = dist(mouseX, mouseY, hitZoneC, hitZoneD);
  var hitZoneDist3 = dist(mouseX, mouseY, hitZoneE, hitZoneF);
  var hitZoneDist4 = dist(mouseX, mouseY, hitZoneG, hitZoneH);
  var hitZoneDist5 = dist(mouseX, mouseY, hitZoneI, hitZoneJ);
  var hitZoneDist6 = dist(mouseX, mouseY, hitZoneK, hitZoneL);
  var hitZoneDist7 = dist(mouseX, mouseY, hitZoneM, hitZoneN);
  var hitZoneDist8 = dist(mouseX, mouseY, hitZoneO, hitZoneP);
  var hitZoneDist9 = dist(mouseX, mouseY, hitZoneQ, hitZoneR);
  var hitZoneDist10 = dist(mouseX, mouseY, hitZoneS, hitZoneT);
  var hitZoneDist11 = dist(mouseX, mouseY, hitZoneU, hitZoneV);
  var hitZoneDist12 = dist(mouseX, mouseY, hitZoneW, hitZone1);
  var hitZoneDist13 = dist(mouseX, mouseY, hitZone2, hitZone3);
  var hitZoneDist14 = dist(mouseX, mouseY, hitZone4, hitZone5);
  var hitZoneDist15 = dist(mouseX, mouseY, hitZone6, hitZone7);


  //console.log(hitZoneDist);

  if (hitZoneDist < 10) {
    image(hitImage, 210, 80);

  }

  if (hitZoneDist1 < 10) {
    image(hakodateImage, 188, 80);

  }

    if (hitZoneDist2 < 10) {
      image(asahikawaImage, 240, 70);

    }

    if (hitZoneDist3 < 10) {
      image(yonezawaImage, 168, 250);

    }

    if (hitZoneDist4 < 10) {
      image(kitakataImage, 165, 250);

    }

    if (hitZoneDist5 < 10) {
      image(sanoImage, 148, 320);

    }

    if (hitZoneDist6 < 10) {
      image(tokyoImage, 148, 330);

    }

    if (hitZoneDist7 < 10) {
      image(yokohamaImage, 142, 340);

    }

    if (hitZoneDist8 < 10) {
      image(takayamaImage, 60, 320);

    }

    if (hitZoneDist9 < 10) {
      image(kyotoImage, 195, 180);

    }

    if (hitZoneDist10 < 10) {
      image(wakayamaImage, 165, 215);

    }

    if (hitZoneDist11 < 10) {
      image(hiroshimaImage, 120, 200);

    }

    if (hitZoneDist12 < 10) {
      image(hakataImage, 50, 225);

    }

    if (hitZoneDist13 < 10) {
      image(kumamotoImage, 60, 258);

    }

    if (hitZoneDist14 < 10) {
      image(tokushimaImage, 165, 215);

    }

    if (hitZoneDist15 < 10) {
      image(kagoshimaImage, 40, 305);

    }

}
