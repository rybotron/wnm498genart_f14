
// Academy of Art
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

// Emit balls based on mouse velocity

var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 50; i++){
    if( i % 2 === 1 ){ // Use Modulo to alternate between pushing Basketball and Ball
      balls.push(new Basketball());
    }else{
      balls.push(new Ball());
    }
  }
}

function draw() {
  background(255, 200);

  var gravity = createVector(0, 0.5);

  for( var i = 0; i < balls.length; i++ ){

    // Friction snippet from Chapter 2 Forces in the Nature of Code
    var c = 0.025;
    var friction = balls[i].velocity.get();
    friction.mult( -1 );
    friction.normalize();
    friction.mult(c);

    balls[i].display();
    balls[i].applyForce(friction);
    balls[i].applyForce(gravity);
    balls[i].move();
  }
}
