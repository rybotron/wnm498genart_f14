// http://coursescript.com/notes/interactivecomputing/drawing/happyface/

function setup() 
{
  // set canvas size
  createCanvas(760, 480); 
}
 
function draw() 
{
  // set background color to white
  background(255);
 
  // set the fill color
  fill(212, 144, 121);
 
  // set the stroke color
  stroke(255, 153, 0);
 
  // set the stroke weight
  strokeWeight();

  // set the ellipse mode
 // ellipseMode(CENTER);
 
  // draw a big circle for the body
  ellipse(260, 270, 260, 260);

  // draw a big circle for the body 2
  fill(255, 232, 159, 35);
  //fill(212, 162, 129, 165);
  ellipse(270, 275, 240, 245);

  // draw eye whites
  fill(57, 49, 86);
  noStroke();
  ellipse(330, 190, 15, 15);
 
  // draw eye pupils
  fill(255, 237, 212);
  ellipse(332, 188, 5, 5);
 
  // draw a small triangle for the tail
  fill(130, 188, 189);
  triangle(88, 270, 88, 295, 132, 270);

  // draw a small triangle for the fin
  fill(130, 188, 189);
  triangle(250, 270, 235, 315, 220, 270);

  // draw an arc for the mouth
  fill(57, 49, 86);
  arc(280, 270, 220, 220, 0, HALF_PI);

  // draw small triangle for the teeth
  // roll 1 triangle
  fill(255, 237, 212);
  triangle(320, 270, 300, 300, 280, 270);
  triangle(320, 270, 340, 300, 360, 270);
  triangle(390, 270, 375, 300, 360, 270);

  // roll 2 triangle shadow
  fill(0, 0, 40, 45);
  triangle(320, 270, 308, 290, 280, 270);
  triangle(320, 270, 350, 285, 360, 270);
  triangle(390, 270, 384, 282, 360, 270);

  // draw light
  fill(255, 232, 159);
  noStroke();
  ellipse(534, 255, 20, 20);

  // draw light 2
  // fill(55, 237, 212, 65);
  fill(255, 232, 159, 180);
  ellipse(540, 270, 35, 35);

  // draw light 3
  //fill(212, 144, 121, 90);
  fill(255, 232, 159, 150);
  ellipse(520, 290, 42, 42);

  // draw light 4
  //noFill();
  //strokeWeight(2);
  //stroke(255, 232, 159, 180);
  //ellipse(520, 292, 52, 52);


 // set the stroke color
  stroke(255, 153, 0);
 
  // set the stroke weight
  strokeWeight(6);

  // draw arc for light curve
  stroke(57, 49, 86);
  noFill();
  // arc(400, 200, 250, 250, 0, radians(360)); 

  arc(400, 240, 270, 270, PI+QUARTER_PI, TWO_PI);

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
    