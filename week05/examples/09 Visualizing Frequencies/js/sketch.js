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
  	fft = new p5.FFT( .5, 16 ); // Smoothing and length of the resulting array must be a power of two between 16 and 1024

}
 
function draw() {

	background(255);
	stroke(0);
	fill(0);

 	/********************************************************************************
 		Frequency Visualization
 	********************************************************************************/

	var freq = fft.analyze();
	
	for ( var i = 0; i < freq.length; i++ ){
		var x = width / freq.length * i;
		var y = height / 2;
		rect( x, y, width / freq.length, -freq[i] );
	}

}

