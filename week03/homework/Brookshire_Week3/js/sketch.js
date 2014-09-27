var yPos= 800
var speed=2
var bCount=20

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(242,234,208);  

}
 
function draw() {
  // 1
  // BART
  // 
  background(242,234,208);
  translate(width / bCount * 2, yPos);
  fill(0,142,154);
  noStroke();
  scale(5);
  
  //Balloon
  beginShape();
  vertex(10,2);
  bezierVertex(13,2, 17,4, 17,10);
  bezierVertex(17,13,12,18,10,21);

  bezierVertex(9.5,22,8.5,22,8,20);
  bezierVertex(8,18,2,14,2,10);
  bezierVertex(2,4,6,2,10,2);
  beginContour();

  bezierVertex(14,5,10,4,10,6);
  bezierVertex(15,10,13,5,5,5);
  endContour();
  endShape(CLOSE);

  //Balloon string
  noFill();
  stroke(100);
  strokeWeight(.5);
  bezier(10,50,8,31,10,22,9,21);



  yPos = yPos - speed; // Increment the yPos variable each frame
 

  

  



}

