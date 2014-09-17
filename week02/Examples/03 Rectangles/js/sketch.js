// http://coursescript.com/notes/interactivecomputing/drawing/rectangles/

function setup() 
{
  // set canvas size
  createCanvas(400, 400); 
}
 
function draw() 
{
  // set background color to white
  background(255);
 
  // set the stroke color to black
  stroke(0);
 
  // set the stroke weight
  strokeWeight(10);
 
  // set the ellipse mode
  rectMode(CORNER);
 
  // set the fill color to red
  fill(255, 0, 0, 255);
 
  // draw a solid rectangle
  rect(50, 50, 200, 200);
 
  // set the fill color to blue with some transparency
  fill(0, 0, 255, 150);
 
  // draw another rectangle
  rect(150, 150, 200, 200);
}