//setting up the canvas
let smallStars = [];
function setup() {
	createCanvas(1550, 875);
	sun = new Planet(75, 0, 0, random(TWO_PI));
	sun.spawnMoons(5, 1);
  // Create 1750 "smaller stars":
  for(let i = 0; i <= 1750; i++) {
    smallStars.push(new SmallStar());
  }
}

function draw() {
	background(0);
	for(let i = 0; i < smallStars.length; i++) {
     smallStars[i].draw();
  }
  translate(width / 2, height / 2);
  sun.show();
	sun.orbit();
  
}