
// Go up
// If bumps with 10 Velocity
// Boom and display particles




var ballOne, ballTwo; //ballTwo for debugging

var particles = [],
	numParticles = 400;

function setup(){
  createCanvas( windowWidth, windowHeight );
  ballOne = new Ball();
  ballTwo = new Ball();

//set up particles
  for(var i = 0; i < numParticles; i++){
    particles.push( new Ball() );
    // particles.push( new Ball() );
    // particles[i].xSpeed = random(-1,1);
    particles[i].yPos = random(10,20);
    particles[i].size = random(3,17);

    //particle speed based on Mass X Gravity
    // particles[i].ySpeed += particles[i].size/4;

    var mass = 20 - particles[i].size;
    particles[i].xSpeed = mass/5 * random(-1,1);
      // particles[i].xSpeed = random(-2,2);
  };
};

function draw(){
  background(255);
  ballOne.show();
  ballOne.move();
  if(ballOne.appear < 1){
	  ballOne.color = color(0,0,0,0);


  for(var i = 0; i < numParticles; i++){

      // particles[i].yPos = particles[i].size/2;

      particles[i].show();
      particles[i].move();
      particles[i].ySpeed += particles[i].size/random(60,80);
  }

}



    
};


var Ball = function(){
  this.size = 40;
  this.color = color(227,45,47,random(150,255));
  this.xPos = width/2;
  this.yPos = height/2;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.appear = 1;
};

Ball.prototype.show = function(){
  noStroke();
    fill( this.color, this.color[3] );
    ellipse(this.xPos, this.yPos, this.size, this.size); 
};


Ball.prototype.move = function(){
  
  this.xPos += this.xSpeed;
  this.yPos += this.ySpeed;

/*
      if ((this.xPos > width-this.size/2) || (this.xPos < this.size/2)) {
        this.xSpeed *= -1;
      }
*/

      if ((this.yPos > height-this.size/2) || (this.yPos < this.size/2)) {
        this.ySpeed *= -1;
	      if(this.ySpeed > 9 && this.yPos < this.size){
	          this.appear = 0;
	          print(ballOne.ySpeed, this.appear);
      }}

      if (this.yPos > height - this.size/2){
        this.yPos = height - this.size/2;
      }

    };


function mousePressed(){
  ballOne.ySpeed -= 2;
};

