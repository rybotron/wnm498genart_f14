
// Academy of Art
// WNM 498 Generative Art & Creative exitCode

// Ryan Berkey
// ryan@rybotron.com

var xPos = 0, // x position variable
    speed = 2; // speed variable
 
function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
}
 
function draw() 
{
  background(255); // Clear the Background each frame
 
  fill(255, 0, 0); // Set Fill Color
  stroke(0); // Set Stroke Color
 
  xPos = xPos + speed; // Increment the xPos variable each frame
 
  ellipse( xPos, 100, 25, 25 );   // Draw a Cricle using the xPos for the x value
  print( xPos );

}