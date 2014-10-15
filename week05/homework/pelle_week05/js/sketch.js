// Credit to Ryan Berkey, ryan@rybotron.com, WNM 498 Generative Art & Creative Code ACADEMY OF ART

// Goal:  Animate a gradient background to change gradient according to sound.


var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;
var amp,
	theta = 0;

function preload(){
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);
  sound = loadSound('audio/real.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	b1 = color(random(100, 253),random(125,250),random(36,150));
  b2 = color(252,23,125);
  q1 = color(253,125,36);
  q2 = color(252,23,125);

	sound.play();

	amp = new p5.Amplitude(.8); 

}
 
function draw() {

	var level = amp.getLevel();

if (level>.100){
		var grad = color(random(0,255),random(0,255),random(0,255));
		var grad2 = color(random(0,255),random(0,255),random(0,255));
		setGradient(0, 0, width, height, grad, grad2, Y_AXIS);
	}
	else {
		setGradient(0, 0, width, height, color(253,125,36), b2, Y_AXIS);
	}

	stroke(0);
	fill(0);
	translate(width / 2, height / 2);

	var diameter = map( level, 0, 1, 0, 255);

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
      print(true)
    }
  }  
}