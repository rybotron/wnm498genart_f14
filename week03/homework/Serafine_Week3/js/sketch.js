// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
// 
// Example inspired by:
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Example 1-1: Bouncing Ball, no vectors


// Create a ball object with x, y, xSpeed, ySpeed properties


var ball = {
  x: 1,
  y: 1,
  xSpeed: 5,
  ySpeed: 9
}

function setup() {
  createCanvas(windowWidth, windowHeight);
};

function draw() {
  background(51);

  // Add the current speed to the position.
  ball.x = ball.x + ball.xSpeed;
  ball.y = ball.y + ball.ySpeed;

  if ((ball.x > width) || (ball.x < 0)) {
    ball.xSpeed = ball.xSpeed * -1.1;
  }
  if ((ball.y > height) || (ball.y < 0)) {
    ball.ySpeed = ball.ySpeed * -1;
  }

  // Display circle at x position


  noStroke();
  fill(255);
  ellipse (ball.x, ball.y, 100, 100);


    stroke(255);
    strokeWeight(4);
    curve(ball.x, ball.y, ball.x, ball.y, width, 0, height, 0); 


    stroke(255);
    strokeWeight(4);
    curve(ball.x, ball.y, ball.x, ball.y, width, height, width, height); 

    stroke(255);
    strokeWeight(4);
    curve(ball.x, ball.y, ball.x, ball.y, height, width, 0, 0); 




    stroke(0);
    strokeWeight(4);
    curve(0,width, ball.x * .8, ball.y/3, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(0,height, ball.x * .7, ball.y, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(width,0, ball.x/2.5, ball.y/4, 0, 0, 0, 0); 


    stroke(0);
    strokeWeight(4);
    curve(0,height, ball.x * .5, ball.y * .5, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(0,height, ball.x * .3, ball.y/4, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(0,height, ball.x/4, ball.y/3, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(width,0, ball.x, ball.y * .8, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(width,0, ball.x/6, ball.y, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(width,0, ball.x/2, ball.y/4, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(width,0, ball.x/6, ball.y/2, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(width,0, ball.x *.9, ball.y/9, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(width,0, ball.x *.4, ball.y * .3, 0, 0, 0, 0); 

    stroke(0);
    strokeWeight(4);
    curve(0,height, ball.x * .6, ball.y * .3, 0, 0, 0, 0); 


  noStroke();
    fill(195,214,192);
    ellipse (ball.x * .8, ball.y/3, 25, 25);
    fill(113,185,185);
    ellipse (ball.x * .7, ball.y, 18, 18);
    fill(156,199,188);
    ellipse (ball.x/2.5, ball.y/4, 15, 15);
    fill(35,171,181);
    ellipse (ball.x * .5, ball.y * .5, 25, 25);
    fill(53,148,170);
    ellipse (ball.x * .3, ball.y/4, 10, 10);
    fill(69,128,170);
    ellipse (ball.x/4, ball.y/3, 15, 15);
    fill(77,94,151);
    ellipse (ball.x, ball.y * .8, 15, 15);
    fill(195,214,192);
    ellipse (ball.x/6, ball.y, 20, 20);
    fill(66,60,116);
    ellipse (ball.x/2, ball.y/4, 15, 15);
    fill(156,199,188);
    ellipse (ball.x/6, ball.y/2, 10, 10);
    fill(195,214,192);
    ellipse (ball.x * .9, ball.y/9, 15, 15);
   fill(195,214,192);
    ellipse (ball.x * .4, ball.y * .3, 15, 15);
    fill(195,214,192);
    ellipse (ball.x * .6, ball.y * .3, 15, 15);

};


