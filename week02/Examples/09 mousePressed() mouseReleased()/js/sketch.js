var rectColor = 0;
var bgColor = 255;

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(bgColor);
	
	fill(rectColor);
	noStroke();
	rectMode(CENTER);
	
	rect( width / 2, height / 2 , width / 2, height / 2 );
}

function mousePressed() {
  if (rectColor == 0) {
    rectColor = 255;
  } else {
    rectColor = 0;
  }
}

function mouseReleased(){
  if (bgColor == 255) {
    bgColor = 0;
  } else {
    bgColor = 255;
  }
}