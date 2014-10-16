// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Oscillators

// An array of objects
var oscillators = [];
var sound,
  fft,
  levelOne,
  levelTwo,
  diameter,
  diameterTwo,
  ampTwo,
  amp,
  rmeter,
  t,
  accum = 0;


function preload(){
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
  noCursor();
  background(255,255);

  translate(mouseX,mouseY);
  // Run all objects
  for (var i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
  // Get the amplitude level in a 0.0 - 1.0 range then scaling it by ampScale

  levelOne = amp.getLevel(1);
  diameter = map( levelOne, 0, 2, 10, 200);
  levelTwo = amp.getLevel(0.5);
  diameterTwo = map( levelTwo, 0, 1, 10, 100);
  rmeter = map( levelTwo, 0, 1, 10, 100);


     t = floor( sound.currentTime() );
    push();
    switch(t%3){

        case 0:
        rmeter = 0;
        break;
        case 1:
        //for background ellipse
          if(t > 25){
                fill(diameter*20,0,105-deepness,150-diameterTwo);
                stroke(diameter*20,0,105-deepness,150-diameterTwo);

              } else {
                fill(255-deepness,200-diameterTwo);
                 stroke(255-deepness);
          };

          // translate(mouseX, mouseY);

          ellipse( 0, 0, diameterTwo*15, diameterTwo*15 );
        diameter = 0;
        break;

        case 2:
        Oscillator.velocity = 0;
        diameter = 0;
        break;

    }
    pop();
    console.log(t);
}

var Oscillator = function() {
  this.angle = createVector();
  // this.velocity = createVector(random(-0.05,0.05), random(-0.05, 0.05));
  this.amplitude = createVector(random(10, 300), random(10, 300));//center sized
};

Oscillator.prototype.oscillate = function() {
  this.velocity = createVector(random(-levelTwo,levelTwo), random(-levelTwo,levelTwo));
  // this.amplitude = createVector(random(10, levelTwo*500), random(10, levelTwo*500));

  this.angle.add(this.velocity);
};


Oscillator.prototype.display = function() {
  var x = sin(this.angle.x) * this.amplitude.x;
  var y = sin(this.angle.y) * this.amplitude.y;
  deepness = diameterTwo*2
  // var natural = random(1,10);

push();
    if(t > 25){
      fill(diameter*20,0,105-deepness,deepness*10);
      stroke(diameter*20,0,105-deepness,deepness*10);

    } else {
      fill(255-deepness,deepness*10);
       stroke(255-deepness);
    };
  rectMode(CENTER);
  line(0,0,x,y);
  ellipse(x, y, diameter,diameter);
  rect(x, y, rmeter,rmeter);
pop();


};







