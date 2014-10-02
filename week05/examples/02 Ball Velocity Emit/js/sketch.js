
// Academy of Art
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

// Emit Particles based on mouse velocity

var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  particles.push( new Particle( 
    createVector(random(width), random(0, height / 2)),
    createVector( 2, 1 ),
    random(5, 50) ));
}

function draw() {
  background(255, 200);

  var gravity = createVector(0, 0.5);

  for( var i = 0; i < particles.length; i++ ){

    // Friction snippet from Chapter 2 Forces in the Nature of Code
    var c = 0.01;
    var friction = particles[i].velocity.get();
    friction.mult(-1);
    friction.normalize();
    friction.mult(c);

    particles[i].display();
    particles[i].applyForce(friction);
    particles[i].applyForce(gravity);
    particles[i].move();
  }
}


function mouseMoved(){

  var m = createVector(mouseX, mouseY);
  var pm = createVector( pmouseX, pmouseY); //pmouseX & pmouseY are the previous frame mouse position

  // A hacky way of making sure a circle isn't emitted before we are expecting it 
  if( millis() < 350 ){ 
    pm.x = mouseX;
    pm.y = mouseY;
  }

  // find the distance between mouse and pmouse
  d = m.dist(pm);

  // Push a new Particle into the Particle array if the distance between the mouse and previous mouse position is > 50
  if ( m.dist(pm) > 50 ){
    // print( "mouseX: " + m.x + " mouseY: " + m.y + " pMouseX: " + pm.x + " pMouseY: " + pm.y + " distance: " + d );

    // Push a new Particle at the mouse location with a velocity set to the length of the distance between the mouse an pmouse
    var dConstrain = constrain( d, 0, 150);
    var dia = map( dConstrain, 0, 150, 150, 0 );
    particles.push( new Particle( m, p5.Vector.sub(m, pm).div(50), dia ));
  }
}
