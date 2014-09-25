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

	// sound.play();

	// amp = new p5.Amplitude(); // Measures overall volume between 0.0 and 1.0
	amp = new p5.Amplitude(.75); // Adding a number between 0.0 and .999 will smooth the amplitude reading

  	fft = new p5.FFT();
  	fft = new p5.FFT( .5, 16 ); // Smoothing and length of the resulting array must be a power of two between 16 and 1024

}
 
function draw() {

	background(255);
	stroke(0);
	fill(0);

	var level = amp.getLevel() * ampScale; // Get the amplitude level in a 0.0 - 1.0 range then scaling it by ampScale

	/********************************************************************************
 		Amplitude Visualization
 	********************************************************************************/

 	ellipse( width / 2, height / 1.5, level, level )

 	/********************************************************************************
 		Using sound to drive forward an animation
 	********************************************************************************/


	if ( xPos > width || xPos < 0 ){
		xDir *= -1;
	}
	xPos += xDir * level; // Incrementing our x position
	yPos = height / 4;

	ellipse( xPos, yPos, 50, 50 );

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

function mouseClicked() {
  if ( !playing ){
	sound.play();
	playing = true;
  }else{
  	sound.stop();
  	playing = false;
  }

}
