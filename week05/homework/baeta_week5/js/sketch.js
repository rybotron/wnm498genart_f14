var amp,
	theta = 0;

function preload(){
  background(200,220,230);
  sound = loadSound('audio/fool.m4a');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	sound.play();

	// amp = new p5.Amplitude(); // Measures overall volume between 0.0 and 1.0
	amp = new p5.Amplitude(.8); // Adding a number between 0.0 and .999 will smooth the amplitude reading

}

function draw() {

	background(250,245,240);
	noStroke();
	fill(0);


	var level = amp.getLevel(); // Get the amplitude level in a 0.0 - 1.0 range then scaling it by ampScale

	var diameter = map( level, 0, 1, 10, 500);

	if (diameter < 200) {
		fill(255-diameter/2,200,200)
	} else {
		fill(50,50,255-diameter/2)
		background(250-diameter/10,245-diameter/10,240-diameter/10,50);
	}

	translate(windowWidth / 2, windowHeight / 2);
	ellipse( 0, 0, diameter*2, diameter*2 );
}
