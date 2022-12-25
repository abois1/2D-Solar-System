class Planet {
	//stating all the parameters for the planets
	constructor(radius, distance, orbitspeed, angle) {
    this.radius = radius;
		this.distance = distance;
		this.orbitspeed = orbitspeed;
		this.angle = angle;
		this.planets = [];
    this.colours = []
    for (let j = 0; j < 3; j++){
      this.colours[j] = randomGaussian(0,256);
    }
  }
	//assigning the planets their orbit speed
	orbit() {
		this.angle += this.orbitspeed;
		for (let i in this.planets){
			this.planets[i].orbit();
		}
	}
	//creating moons to orbit the planets
	spawnMoons(total, level){
		for (let i = 0; i < total; i++){
			let r = this.radius / (level * 2.75);
			let d = random(225,325);
			let o = random (-0.075, 0.075);
			let a = random (TWO_PI);
			this.planets.push(new Planet(r, d / level, o, a));
			if (level < 2){
				let num = Math.floor(random(0, 4));
				this.planets[i].spawnMoons(num, level + 1)
			}
		}
	}
	//making the visual elements of the star, planets and  moons
	show()
  {
		push();
    //Fill and Stroke for Sun
    if (this.orbitspeed === 0){
      fill(255,255,0);
      stroke (255,165,0);
      strokeWeight(8);
    }
    //Fill and Stroke for Planets and Moons 
    else{
      fill(this.colours[0], this.colours[1], this.colours[2]);
      stroke (255,255,255);
      strokeWeight(2);
    }
		rotate(this.angle);
		translate(this.distance, 0);
		ellipse(0, 0, this.radius * 2);
		for (let i in this.planets){
			this.planets[i].show();
		}
		pop ();
	}
}