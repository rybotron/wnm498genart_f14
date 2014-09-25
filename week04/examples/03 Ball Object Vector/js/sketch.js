// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com


var ball;

function setup(){
  createCanvas( windowWidth, windowHeight );

  // Assign ball using object literal notation with properties and methods that mimic a ball in the real world
  ball = {
    position: createVector( 0, 0 ),
    velocity: createVector( 10, 5 ),
    size: 50,
    color: color(140, 70, 0,  255), // p5.js color() creates an array of rgba
    type: "basketball",

    // The show method will draw our ball to the screen
    show: function(){
      noStroke();
      fill( this.color, this.color[3] ); // fill with our color, and the color[3] alpha
      ellipse(this.position.x, this.position.y, this.size, this.size);
    },

    // The move method will update the ball's position and check to see if it hits the floor or ceiling.
    move: function(){

      this.position.add( this.velocity );

      if (( this.position.x > width) || ( this.position.x < 0 )) {
        this.velocity.x *= -1;
      }
      if (( this.position.y > height) || ( this.position.y < 0)) {
        this.velocity.y *= -1;
      }

    } 

  };

}

function draw(){

  background(255);

  // Call methods using property accessors (dot notation) to show and move the ball
  ball.show();
  ball.move();

}