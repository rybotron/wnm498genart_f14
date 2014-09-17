function setup() {
  // set canvas size
  createCanvas(400, 200);
}
 
function draw() {
  
  // set background color
  background(255);
  
  // remove stroke
  noStroke();
  
  // set rectMode for all three rectangles
  rectMode(CENTER);
 
  // draw a red rectangle
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
  
  // draw a green rectangle - rotated 45 degrees
  fill(0, 255, 0);
  push();
  translate(200, 100); 
  rotate(radians(45));
  rect(0, 0, 50, 50);
  pop();
  
  // draw a blue rectangle - without any rotation at the top-left of the screen
  fill(0, 0, 255);
  rect(300, 100, 50, 50);
  
}