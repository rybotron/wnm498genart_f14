// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var spheres = [],
    numSpheres = 500;

function setup(){
  createCanvas( windowWidth, windowHeight );

  for ( var i = 0; i < numSpheres; i++ ){
      spheres.push( new Ball("basketball") );
  }
}

function draw(){

  background(255);

  for ( var j = 0; j < spheres.length; j++ ){
    spheres[j].show();
    spheres[j].move();
  }

}


function Ball( type ){
    this.xPos = random( width );
    this.yPos = random( height );
    this.xSpeed = random( 0, 10 );
    this.ySpeed = random( 0, 20 );
    this.size = random( 100, 500 );
    this.color = color( random( 100, 255), random( 100, 255), random( 100, 255), random( 100, 255) );
    this.type = type;
}

Ball.prototype.show = function(){

  noStroke();
  fill( this.color, this.color[3] ); // fill with our color, and the color[3] alpha
  ellipse(this.xPos, this.yPos, this.size, this.size);

}

Ball.prototype.move = function(){

  this.xPos += this.xSpeed;
  this.yPos += this.ySpeed;

  if ((this.xPos > width) || (this.xPos < 0)) {
    this.xSpeed *= -1;
  }

  if ((this.yPos > height) || (this.yPos < 0)) {
    this.ySpeed *= -1;
  }

}

Ball.prototype.randomize = function(){
  this.color = color( random( 100, 255), random( 100, 255), random( 100, 255), random( 100, 255) );
}


function mousePressed(){

  for ( var j = 0; j < spheres.length; j++ ){
    spheres[j].randomize();
  }

}














