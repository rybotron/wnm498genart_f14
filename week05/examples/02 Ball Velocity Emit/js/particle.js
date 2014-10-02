// The function Particle(type) is the constructor "class"
// All code inside of the constructor is executed when a new instance is created
function Particle( location, velocity, diameter ){
  this.location = location || createVector( width / 2, height / 2 );
  this.velocity = velocity || createVector( 5, 7 );
  this.acceleration = createVector(0, 0);
  this.diameter = diameter;
  this.mass = diameter / 100;
}

// Add methods specific to Particle objects to the prototype 
Particle.prototype.display = function() {
  noStroke();
  fill(0);
  ellipse(this.location.x, this.location.y, this.diameter, this.diameter);
}

Particle.prototype.move = function() {

  this.velocity.add( this.acceleration );
  this.location.add( this.velocity );

  if ((this.location.x > width) || (this.location.x < 0)) {
    this.velocity.x = this.velocity.x * -1;
  }
  if ((this.location.y > height) || (this.location.y < 0)) {
    this.velocity.y = this.velocity.y * -1;
  }

  this.acceleration.mult( 0 );
}

Particle.prototype.setVelocity = function( velocity ){
  this.velocity = velocity || createVector( 5, 7 ); 
}

Particle.prototype.applyForce = function(force) {
  var f = p5.Vector.div( force, this.mass );
  this.acceleration.add( f );
};