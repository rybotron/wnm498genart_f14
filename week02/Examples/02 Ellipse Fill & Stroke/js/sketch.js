// http://coursescript.com/notes/interactivecomputing/drawing/circle/

function setup() 
{
  // set canvas size
  createCanvas(400, 400); 
}
 
function draw() 
{
  // set background color to white
  background(255);
 
  // set the fill color
  fill(51, 102, 255);
 
  // set the stroke color
  stroke(0, 51, 102);
 
  // set the stroke weight
  strokeWeight(10);
 
  // set the ellipse mode
  // http://p5js.org/reference/#/p5/ellipseMode
  ellipseMode(CENTER);
 
  // draw a circle
  ellipse(200, 200, 250, 250);
}
