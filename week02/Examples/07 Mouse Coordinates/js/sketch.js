// http://coursescript.com/notes/interactivecomputing/drawing/mousecoordinates/

function setup() 
{
  // set canvas size
  createCanvas(400, 400); 
}
 
function draw() 
{
  // set background color to white
  background(255);
 
  // draw a circle
  ellipseMode(CENTER);
  ellipse(200, 200, 100, 100);
  
  // this line displays the coordinates of the mouse
  fill(0);
  text(ceil(mouseX) + ", " + ceil(mouseY), mouseX, mouseY);
  print( "mouseX " + mouseX + " mouseY " + mouseY); 
}