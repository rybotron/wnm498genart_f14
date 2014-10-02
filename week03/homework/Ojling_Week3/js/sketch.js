var gui;
var transforms; 

function setup() {
    transforms = {
    modifier: 0.1,
    xPos: width / 2,
    yPos: width / 2
  }
  myCanvas = createCanvas(windowWidth, windowHeight);
  gui = new dat.GUI();
  gui.add(transforms, "modifier", 0,5);
}
 
function draw() 
{
  background(52, 54, 73);
  fill(227, 111, 33); 
  stroke(255);
  ellipse( transforms.xPos, transforms.yPos, width / 4, width / 4 );
  push();
  translate( transforms.xPos, transforms.yPos);
  noFill();
  stroke(255);
  rotate(millis() * transforms.modifier * -0.001);
  ellipse( width / 5, height / 5, width / 15, width / 15 );
  pop();
}

// Window event handler when the browser window size changes
// When resized it calls the anonymous function
window.onresize = function(){
	myCanvas.size(windowWidth, windowHeight);
}