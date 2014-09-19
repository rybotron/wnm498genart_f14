// Academy of Art
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
  x: 100,
  y: 100,
  xSpeed: 5,
  ySpeed: 7
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
    ball.xSpeed = ball.xSpeed * -1;
  }
  if ((ball.y > height) || (ball.y < 0)) {
    ball.ySpeed = ball.ySpeed * -1;
  }

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(ball.x, ball.y, 48, 48);
};

