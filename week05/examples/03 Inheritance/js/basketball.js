function Basketball( location, velocity ){
  Ball.call(this, location, velocity, 50) // Call the parent constructor and any arguments
  this.color = color( 220, 115, 0);
}

// Use Object.create() to set the Basketball prototype to the Ball.prototype
// We use Object.create() instead of setting it directly: Basketball.prototype = Ball.prototype
// This way if we update the prototype methods of Ball the are inherited by Basketball
Basketball.prototype = Object.create(Ball.prototype);

// Because we set the protoype to Ball.prototype, the constructor of Basketball is now pointing to the Ball constructor
// Reset the constructor to point to Basketball
// Then, when we call new Basketball it will point to the Basketball constructor instead of Ball
Basketball.prototype.constructor = Basketball;

// Add or overwrite methods and properties

Basketball.prototype.display = function(){
  stroke(0);
  strokeWeight(2);
  fill(this.color);
  ellipse(this.location.x, this.location.y, 50, 50);

}