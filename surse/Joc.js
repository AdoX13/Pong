let paletaJucator;
let paletaBot;
let minge;
let scorJucator;
let sunetPaleta;

function setup() {
  createCanvas(1600, 800);
  paletaJucator = new Paleta(26);
  paletaBot = new Paleta(width - 48);
  minge = new Minge();
  scorJucator = new Scor(width / 2 - 50);
  sunet = new p5.MonoSynth();
}
 
function draw() {
  background(0);
  textSize(16);
  fill(255);
  stroke(0);
  text("Proiect realizat de Popa Adelin-Costin",805,780);
  getAudioContext().resume();
  paletaJucator.display();
  paletaBot.display();
  
  paletaJucator.update();
  paletaBot.update();
  
  if (paletaJucator.isUp) {
    paletaJucator.up();
  } else if (paletaJucator.isDown) {
    paletaJucator.down();
  }
  
  miscareBOT();
  
  minge.update(scorJucator); 
  minge.display(); 
  
  minge.aAtinsJucator(paletaJucator); 
  minge.aAtinsBot(paletaBot); 
  
  stroke(255); 
  line(width/2, 70, width/2, height); 
  
  scorJucator.display();
}

function miscareBOT() {
  let mijlocPaleta = paletaBot.y + paletaBot.height / 2;
     
  if (mijlocPaleta > minge.y) {
    paletaBot.isUp = true;
    paletaBot.isDown = false;
  } else if (mijlocPaleta < minge.y){
    paletaBot.isDown = true;
	paletaBot.isUp = false;
  }	else{ 
		paletaBot.isDown = false;
		paletaBot.isUp = false;
  }
}

function keyPressed() {
    if (keyCode == 38 || keyCode == 87) {
        paletaJucator.isUp = true;
    } else if (keyCode == 40 || keyCode == 83) {
        paletaJucator.isDown = true;
    }
}
 
function keyReleased() {
    if (keyCode == 38 || keyCode == 87) {
        paletaJucator.isUp = false;
    } else if (keyCode == 40 || keyCode == 83) {
        paletaJucator.isDown = false;
    }
}