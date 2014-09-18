function setup() 
{
  // set canvas size
  createCanvas(1000, 700); 
}
 
function draw() 
{
  // background color
  background(50,224,156);
 
  // stroke color
  stroke(0);
 
  // stroke weight
  strokeWeight(10);
 
  // ellipse mode
  ellipseMode(CENTER);
 
  // face
  fill(0);
  ellipse(500,350, 250, 250);

  // ears
  fill(0);
  ellipse(340,220, 225, 225);
  ellipse(660,220, 225, 225);

 
  // eyes
  fill(255);
  noStroke();
  ellipse(440, 290, 50, 60);
  ellipse(560, 290, 50, 60);
 
  // mouth
  fill(255);
  noStroke();
  arc(500, 350, 225, 225, 0, radians(180)); 
}
    