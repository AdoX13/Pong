class Minge{
 
    constructor() {
        this.r = 20;
        this.reset();
    }
     
	display() {
		if (scorMax<3){
			fill(255,180,128);
			stroke(255,180,128);
			ellipse(this.x, this.y, this.r * 2, this.r * 2); //Mingea portocalie
		}
		else if (scorMax>=3 && scorMax<5){
			fill(137,207,240);
			stroke(137,207,240);
			ellipse(this.x, this.y, this.r * 2, this.r * 2); //Mingea albastră
		}
		else if (scorMax >= 5 && scorMax < 10){
			fill(221,170,170);
			stroke(221,170,170);
			ellipse(this.x, this.y, this.r * 2, this.r * 2); //Mingea roz
		}
		else if (scorMax >= 10 && scorMax < 50){
			fill(201,125,201);
			stroke(201,125,201);
			ellipse(this.x, this.y, this.r * 2, this.r * 2); //Mingea violet
		}
		else if (scorMax >=50){
			fill(40,157,140);
			stroke(0, 255, 191);
			ellipse(this.x, this.y, this.r * 2, this.r * 2); //Mingea surpriză
		}
    }

	reset() {
        this.x = width/2;
        this.y = height/2;
        this.xSpeed = 12;
        let isLeft = random(1) > .5;
        if (isLeft) {
            this.xSpeed = -this.xSpeed;
        } 
		var h = random(1, 2);
        if (h==1) this.ySpeed=-7;
		else this.ySpeed=7;
    }

    update(scorJucator) {
        if (this.y < this.r || this.y > height - this.r) {
            this.ySpeed = -this.ySpeed;
        } 
        if (this.x < this.r) {
			sunet.play('C3');
			if(scorJucator.scor>scorMax){
				scorMax=scorJucator.scor;
			}
			const p1 = "La scor 3 vei debloca mingea ALBASTRĂ.";
			const p2 = "La scor 5 vei debloca mingea ROZ.";
			const p3 = "La scor 10 vei debloca mingea VIOLET.";
			const p4 = "La scor 50 vei debloca mingea SURPRIZĂ.";
			const p5 = "Ai deblocat deja toate mingile. Felicitări!";
			var p;
			if (scorMax < 3)
				p = p1;
			else if (scorMax >= 3 && scorMax < 5)
				p = p2;
			else if (scorMax >= 5 && scorMax < 10)
				p = p3;
			else if (scorMax >= 10 && scorMax < 50)
				p = p4;
			else if (scorMax >=50)
				p = p5;
			alert("Ai pierdut!" + "\n" + "Scorul tău a fost " + scorJucator.scor + ".\n" + "Cel mai mare scor al tău a fost " + scorMax + ".\n" + p);
			scorJucator.reset();
			this.reset();
        } else if (this.x > width + this.r) {
			sunet.play('B7');
          scorJucator.increment();
          this.reset();
        } 
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
  
    aAtinsJucator(jucator) {
      if (this.x - this.r < jucator.x + jucator.width && this.x > jucator.x) {
        if (this.eAceeasiInaltime(jucator)) {
			sunet.play('A4');
			this.xSpeed = -this.xSpeed;
        }
      }
    }

    aAtinsBot(bot) {
      if (this.x < bot.x + bot.width && this.x + this.r > bot.x) {
        if (this.eAceeasiInaltime(bot)) {
			sunet.play('A4');
			this.xSpeed = -this.xSpeed;
        }
      }
    }

    eAceeasiInaltime(jucator) {
      return this.y >= jucator.y && this.y <= jucator.y + jucator.height;
    }
}