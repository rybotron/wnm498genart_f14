var stars = [];
var joint = 100.0;
var v;
var points = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  
  stroke(255,50);
  smooth();

  for (var i=0; i<70; i++) {
    stars[i] = new Star (random(displayWidth), random(displayHeight), random(5,15), random(-5,5), random(-5,5));
  }
}

function draw() {
  background(0,0,0,100);
  for (var i=0; i<stars.length; i++) {
    stars[i].move();
    stars[i].display();
  }

}

function mouseDragged(){
  ellipse(mouseX,mouseY,.5,.5);

  var d = new p5.Vector(mouseX,mouseY,0,0);
  points.push(d);

  for (var p=0; p<points.length; p++){
  var v = points[p];
  var join = d.dist(v)/joint;
  if (join < random(5)){
    line(d.x,d.y,v.x,v.y);
    }
  }
}


function Star(tempXpos, tempYpos, tempstarSize, tempstarXSpeed, tempstarYSpeed) {
  this.xpos = tempXpos;
  this.ypos = tempYpos;
  this.starSize = tempstarSize;
  this.starXSpeed = tempstarXSpeed;
  this.starYSpeed = tempstarYSpeed;
} 

Star.prototype.display = function (){
  ellipseMode(CENTER);
  fill(255,255,255,200);
  noStroke;
  ellipse(this.xpos, this.ypos, this.starSize, this.starSize);
}

Star.prototype.move = function (){
  this.xpos = this.xpos + this.starXSpeed * (this.starSize/3);
  this.ypos = this.ypos + this.starYSpeed * (this.starSize/3);
  this.starXSpeed = -map(mouseX, 0, displayWidth, -3, 3);
  this.starYSpeed = -map(mouseY, 0, displayHeight, -5, 3);
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

