//setting up the canvas
function setup() {
	createCanvas(1550, 1024);
	sun = new Planet(50, 0, 0, random(TWO_PI));
	sun.spawnMoons(5, 1);
}

function draw() {
	background(25);
	translate(width / 2, height / 2);
  sun.show();
	sun.orbit();
}