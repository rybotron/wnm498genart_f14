
// Academy of Art
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var ballOne,
    ballTwo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballOne = new Ball( "basketball" ); //use the new contsrtuctor to create a new instance of Ball object and assign it to a variable
  ballTwo = new Ball( "football" );
}

function draw() {
  background(255);
  // text("Ball one is a " + ballOne.type + " and ball two is a " + ballTwo.type, 10, 10);

  // Call methods on Ball objects
  ballOne.display();
  ballOne.move();
}

// The function Ball(type) is the constructor "class"
// All code inside of the constructor is executed when a new instance is created
function Ball( type ){
  this.xPos = width / 2;
  this.yPos = height / 2;
  this.xSpeed = 5;
  this.ySpeed = 7;
  this.size = 50;
  this.type = type || "generic"; // Conditional stating that if a "type" was not specified during instantiation give the name "generic"

}

// Add methods specific to Ball objects to the prototype
Ball.prototype.display = function() {
   stroke(100);
   fill(0);
   ellipse(this.xPos, this.yPos, this.size, this.size);
}

Ball.prototype.move = function() {
  this.xPos += this.xSpeed;
  this.yPos += this.ySpeed;

  if ((this.xPos > width) || (this.xPos < 0)) {
    this.xSpeed *= -1;
  }
  if ((this.yPos > height) || (this.yPos < 0)) {
    this.ySpeed *= -1;
  }
}

Ball.prototype.setXSpeed = function( xSpeed ){
  this.xSpeed = xSpeed || 0; // Conditional to check if xSpeed is undefined
}
