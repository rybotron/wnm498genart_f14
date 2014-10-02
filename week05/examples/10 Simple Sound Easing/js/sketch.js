// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

// Simple Sound Easing

var sound, amp, gui;
var	soundCTRL = {
		min: 100,
		max: 500,
		storedLevel: undefined,
		increasingScale: .1,
		decreasingScale: .1
	};

function preload(){
  background(255);
  sound = loadSound('audio/real.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	sound.play();
	amp = new p5.Amplitude(); // Measures overall volume between 0.0 and 1.0
	gui = new dat.GUI();
	gui.add(soundCTRL, "min", 0, windowWidth);
	gui.add(soundCTRL, "max", 0, windowWidth);
	gui.add(soundCTRL, "increasingScale", .01, 1).name("Ease In");
	gui.add(soundCTRL, "decreasingScale", .01, 1).name("Ease Out");

}
 
function draw() {

	background(255);
	stroke(0);
	fill(0);

	var curLevel = map( amp.getLevel(), 0, 1, soundCTRL.min, soundCTRL.max) // Get the amplitude level in a 0.0 - 1.0 range then scaling it by ampScale
	var prevLevel = soundCTRL.storedLevel || 100;
	

	if ( curLevel > prevLevel ){
 		prevLevel += soundCTRL.increasingScale * ( curLevel - prevLevel );
 	}

 	if ( curLevel < prevLevel ){
 		prevLevel += soundCTRL.decreasingScale * ( curLevel - prevLevel );
 	}

	ellipse( width / 2, height / 2, prevLevel, prevLevel )
 	soundCTRL.storedLevel = prevLevel;

}