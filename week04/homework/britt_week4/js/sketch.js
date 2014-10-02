var glitterCircle = [];


function setup() {
  createCanvas( displayWidth, displayHeight);
  // background(255, 255, 255);

  for (var i=0; i<50; i++) {
    glitterCircle[i] = new Glitter (random(450), random(1200), random(5,20), random(-5,5), random(-5,5));
  }
}

function draw() {
  background(239, 70, 58);
  for (var i=0; i<glitterCircle.length; i++) {
    glitterCircle[i].move();
    glitterCircle[i].display();
  }
}

function Glitter(tempXpos, tempYpos, tempSize, tempXSpeed, tempYSpeed) {
  //this.s = tempS;
  this.xpos = tempXpos;
  this.ypos = tempYpos;
  this.glitterSize = tempSize;
  this.glitterXSpeed = tempXSpeed;
  this.glitterYSpeed = tempYSpeed;
} 

Glitter.prototype.display = function (){
  ellipseMode(CENTER);
  fill(random(255),random(255),random(255));
  noStroke();
  ellipse(this.xpos, this.ypos, this.glitterSize*2, this.glitterSize*2);
}

Glitter.prototype.move = function (){
  this.xpos = this.xpos + this.glitterXSpeed * (this.glitterSize/2);
  this.ypos = this.ypos + this.glitterYSpeed * (this.glitterSize/2);
  this.glitterXSpeed = -map(mouseX, 0, displayWidth, -5, 5)/2;
  this.glitterYSpeed = -map(mouseY, 0, displayHeight, -5, 5)/2;
  if (this.xpos > displayWidth + 10) {
    this.xpos = -10;
  }
  if (this.xpos < -10) {
    this.xpos = displayWidth + 10;
  }
  if (this.ypos > displayHeight + 10) {
    this.ypos = -10;
  }
  if (this.ypos < -10) {
    this.ypos = displayHeight +10;
	}
}

