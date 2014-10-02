var yPos = 750
var speed = 3
var bCount = 6.5


function setup() {

  // set canvas size
  //createCanvas(800, 480); 
  createCanvas(windowWidth, windowHeight);
 } 
 
function draw() {

  yPos = yPos - speed; 
  // Increment the yPos variable each frame
 
  background(192, 91, 120)

  translate(width / bCount * 2, yPos);
  fill(255, 255, 255, 50);
  noStroke();
  scale(2);
 

  // Heart
  beginShape();
  vertex(150,150);
  bezierVertex( 150,120, 100,120, 100, 150);
  bezierVertex( 100,180, 150,185, 150, 210 );
  bezierVertex( 150,185, 200,180, 200, 150 );  
  bezierVertex( 200,120, 150,120, 150, 150 ); 
  endShape(CLOSE);

 
}
