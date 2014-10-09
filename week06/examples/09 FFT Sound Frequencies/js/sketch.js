var sound,
	fft,
	amp,
	playing = false;
	ampScale = 50,
	xPos = 0,
	yPos = 0,
	xDir = 1;

function preload(){
  background(255);
  sound = loadSound('audio/real.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	sound.play();

  	fft = new p5.FFT();
  	fft = new p5.FFT( .5, 128 ); // Smoothing and length of the resulting array must be a power of two between 16 and 1024

}
 
function draw() {

	background(255);
	translate(0, height / 2);

 	/********************************************************************************
 		Frequency Visualization
 	********************************************************************************/

	var freq = fft.analyze();
	
	var c1 = color(255, 0, 0);
	var c2 = color(0, 0, 255);

	for ( var i = 0; i < freq.length; i++ ){

		var x = width / freq.length * i;
		var y = 0;

		var c = lerpColor(c1, c2, i / freq.length);
		var s = lerpColor(c2, c1, i / freq.length);
		
		fill(c);
		stroke(s);
		rect( x, y, width / freq.length, -freq[i] );
	}

}

