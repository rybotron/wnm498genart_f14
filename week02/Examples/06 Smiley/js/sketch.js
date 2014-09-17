// http://coursescript.com/notes/interactivecomputing/drawing/happyface/

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
  fill(255, 204, 0);
 
  // set the stroke color
  stroke(255, 153, 0);
 
  // set the stroke weight
  strokeWeight(10);
 
  // set the ellipse mode
  ellipseMode(CENTER);
 
  // draw a big circle for the face
  ellipse(200, 200, 250, 250);
 
  // draw eye whites
  fill(255);
  noStroke();
  ellipse(160, 160, 50, 75);
  ellipse(240, 160, 50, 75);
 
  // draw eye pupils
  fill(50);
  ellipse(160, 175, 20, 30);
  ellipse(240, 175, 20, 30);
 
  // draw mouth
  stroke(255, 153, 0);
  noFill();
  arc(200, 200, 175, 175, 0, radians(180)); 
  // http://p5js.org/reference/#/p5/arc
  // First 4 arguments are x, y, width, height
  // The last two arguments tell the arc where to start and stop

  // http://p5js.org/reference/#group-Constants
  // arc(200, 200, 175, 175, 0, PI);
  // arc(200, 200, 175, 175, 0, TWO_PI);

  // http://p5js.org/reference/#/p5/radians
  // Degrees and Radians are two ways of measuring a curve or circle
  // 360 degress or 2 * PI Radians is a circle
}
    