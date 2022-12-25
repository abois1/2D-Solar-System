class SmallStar {
  constructor() {
    this.pos = createVector(random(2500), random(2500));
    this.diameter = random(1, 3);
    this.colour = "#e1edf4";
  }
  draw(){
    noStroke();
    fill(this.colour);
    ellipse(this.pos.x, this.pos.y, this.diameter);
  }
}
