class Scor{
	
  constructor() {
  	this.scor = 0;
  }
  
  reset() {
	this.scor = 0;
  }
  
  display() {
	fill(255,180,128);
	stroke(255,180,128);
    textSize(65);
    textAlign(CENTER);
  	text(this.scor,800, 60);
  }
  
  increment() {
  	this.scor++;
  }
}