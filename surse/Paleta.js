class Paleta{

    constructor(x) {
        this.x = x;
        this.y = height / 2;
        this.height = 150;
        this.width = 25;
       
        this.isUp = false;
        this.isDown = false;
    }
  
    update() {
      if (this.isUp) {
        this.up();
      } else if (this.isDown) {
        this.down();
      }
    }
     
    display() {
        fill(255,180,128);
		stroke(255,180,128);
        rect(this.x, this.y, 25, 150);
    }
     
    up() {
        if (this.y > 0) {
            this.y -= 6;
        }
    }

    down() {
        if (this.y < height - this.height) {
            this.y += 6;    
        }
    }
}