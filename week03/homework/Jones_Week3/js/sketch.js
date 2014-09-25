//Ryan Jones
//gen art week 3 homework

var ball;
var position;
var velocity;


function setup(){
  createCanvas( windowWidth, windowHeight );


//ball properties
  ball = {
    position: createVector(100,100),
    velocity: createVector(5, 5),
    acceleration: createVector(0,700),
    topspeed: 8,
    size: 50,
    color: color(255, 255, 255, 255),
    type: "ball",

// Draw the ball to the screen
    show: function(){
      noStroke();
      fill( this.color, this.color[1] );
      ellipse(this.position.x, this.position.y, this.size, this.size);
      
    },

// Check to see if ball has reached side of canvas and if so reverse velocity
    move: function(){
   
   	var mouse = createVector(mouseX,mouseY);
   	ball.acceleration = p5.Vector.sub(mouse,ball.position);
   	
   	//sets the magnitude of acceleration
   	ball.acceleration.setMag(.3);
	ball.velocity.add(ball.acceleration);
	ball.velocity.limit(ball.topspeed);
  	ball.position.add(ball.velocity);

	
	this.position.add(this.velocity);

      if ((this.position.x > width) || (this.position.x < 0)) {
        this.velocity.x *= -1;
      }
      if ((this.position.y > height) || (this.position.y < 0)) {
        this.velocity.y *= -1;
      }

    }

  };

}

function draw(){

//Canvas background
background(0,0,0);
var mouse = createVector(windowWidth, 0);
push();

mouse.sub(ball.position);
  strokeWeight(3);
  stroke(255);
  line(ball.position.x,ball.position.y,mouse.x,mouse.y);
pop();




// Call methods 
//for (var i = 0; i < ball.length; i++){
ball.show();
ball.move();
//}




}