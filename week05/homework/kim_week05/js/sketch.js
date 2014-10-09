// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An array of objects
var oscillators = [];
var sound,
  fft,
  levelOne,
  levelTwo,
  diameter,
  diameterTwo,
  ampTwo,
  amp;


function preload(){
  background(60);
  sound = loadSound('audio/quagua.mp3');
}

function setup()  {
  createCanvas(windowWidth, windowHeight);
  // Initialize all objects
  for (var i = 0; i < 10; i++) {
    oscillators.push(new Oscillator());
  }

  sound.play();
  fft = new p5.FFT();
  amp = new p5.Amplitude(0.5); // Measures overall volume between 0.0 and 1.0
  ampTwo = new p5.Amplitude(1); // Measures overall volume between 0.0 and 1.0

}

function draw() {
  background(255,200);
  // Run all objects
  for (var i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
  // Get the amplitude level in a 0.0 - 1.0 range then scaling it by ampScale
  levelOne = amp.getLevel(1);
  diameter = map( levelOne, 0, 1, 10, 200);

  levelTwo = amp.getLevel(0.5);

  diameterTwo = map( levelTwo, 0, 1, 10, 100);

}



var Oscillator = function() {
  this.angle = createVector();
  // this.velocity = createVector(random(-0.05,0.05), random(-0.05, 0.05));
  this.amplitude = createVector(random(10, windowWidth/2), random(10, windowHeight/2));
};

Oscillator.prototype.oscillate = function() {
  this.velocity = createVector(random(-levelTwo,levelTwo), random(-levelTwo,levelTwo));
  // this.amplitude = createVector(random(10, levelTwo*500), random(10, levelTwo*500));

  this.angle.add(this.velocity);
};


Oscillator.prototype.display = function() {
  var x = sin(this.angle.x) * this.amplitude.x;
  var y = sin(this.angle.y) * this.amplitude.y;
  // var natural = random(1,10);
  deepness = diameterTwo*2

  push();
  translate(windowWidth/2, windowHeight/2);
  stroke(255-deepness);
  strokeWeight(1);
  // noStroke();
  fill(255-deepness,deepness*10);
  line(0, 0, x, y);
  ellipse(x, y, diameter,diameter);
  pop();
};
