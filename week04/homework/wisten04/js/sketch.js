// Credit to Ryan Berkey, ryan@rybotron.com
// Academy of Art
// WNM 498 Generative Art & Creative Code

var animations = [];
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;
var spheres = [],
    numSpheres = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

 
  b1 = color(253,125,36);
  b2 = color(252,23,125);

  for ( var i = 0; i < numSpheres; i++){
      spheres.push( new Ball("basketball"));
  }
  
}

function draw() {
  
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);

  for (var j = 0; j < spheres.length; j++ ){
    spheres[j].show();
    spheres[j].move();
  }
  
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
}

function Ball( type){
		this.xPos = width/2,
    this.yPos = height/2,
    this.xSpeed = random( 0, 1 );
    this.ySpeed = random( 0, 1 );
    this.size = 700;
    this.color = color( random(100,255), random(100,255), random(100,255), random(0,100));
    this.type = type;
}

Ball.prototype.show = function(){

  noStroke();
  fill( this.color, this.color[3] ); 
  ellipse(this.xPos, this.yPos, this.size, this.size);
}

Ball.prototype.move = function(){
      
}

Ball.prototype.randomize = function(){
  this.color = color( random(200,255), random(200,255), random(200,255), random(200,255));
}

function mousePressed(){

  for (var j = 0; j < spheres.length; j++ ){
    spheres[j].randomize();
  }
}