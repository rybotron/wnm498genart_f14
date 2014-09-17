// http://coursescript.com/notes/interactivecomputing/drawing/tree/

function setup() 
{
  // set canvas size
  createCanvas(400, 400); 
}
 
function draw() 
{
  // set background color to white
  background(255);
 
  // turn off the stroke
  noStroke();
 
  // green fill
  fill(102, 153, 0);
 
  // row 1 triangle
  triangle(200, 50, 175, 100, 225, 100);
 
  // row 2 triangles
  triangle(175, 100, 150, 150, 200, 150);
  triangle(225, 100, 200, 150, 250, 150);
 
  // row 3 triangles
  triangle(150, 150, 125, 200, 175, 200);
  triangle(200, 150, 175, 200, 225, 200);
  triangle(250, 150, 225, 200, 275, 200);
 
  // row 4 triangles
  triangle(125, 200, 100, 250, 150, 250);
  triangle(175, 200, 150, 250, 200, 250);
  triangle(225, 200, 200, 250, 250, 250);
  triangle(275, 200, 250, 250, 300, 250);
 
  // tree base square
  rectMode(CORNER);
  fill(153, 102, 0);
  rect(175, 250, 50, 50);
}
    