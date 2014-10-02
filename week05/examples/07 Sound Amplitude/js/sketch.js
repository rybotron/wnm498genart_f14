var amp,
	theta = 0;

function preload(){
  background(255);
  sound = loadSound('audio/real.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	sound.play();

	// amp = new p5.Amplitude(); // Measures overall volume between 0.0 and 1.0
	amp = new p5.Amplitude(.8); // Adding a number between 0.0 and .999 will smooth the amplitude reading

}
 
function draw() {

	background(255);
	stroke(0);
	fill(0);

	translate(width / 2, height / 2);
	var level = amp.getLevel(); // Get the amplitude level in a 0.0 - 1.0 range then scaling it by ampScale

	var diameter = map( level, 0, 1, 10, 500);
	ellipse( 0, 0, diameter, diameter );

}

