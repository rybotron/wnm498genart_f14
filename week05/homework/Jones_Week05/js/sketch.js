var amp,
	theta = 0;

function preload(){
  background(255);
  sound = loadSound('audio/Chant From Inner Earth.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	sound.play();

	amp = new p5.Amplitude(.8); // Adding a number between 0.0 and .999 will smooth the amplitude reading

}
 
function draw() {

	background(255);
	stroke(0);
	fill(xPos*2, yPos*2, diameter);

	translate(width / 2, height / 2);
	var level = amp.getLevel(); // Get the amplitude level in a 0.0 - 1.0 range then scaling it by ampScale
	var radius = theta * level;
	theta += 1 * level / 3;

	var xPos = radius * cos(theta);
	var yPos = radius * sin(theta);

	var diameter = map( level, 0, 1, 5, 250);
	stroke(0);
	strokeWeight(level*2, 0);
	
	ellipse( xPos, yPos, diameter, diameter);
	ellipse( -xPos, yPos, -diameter, diameter);
	ellipse( xPos, -yPos, diameter, -diameter);
	noFill();
	stroke(0);
	ellipse( -xPos*2, -yPos*2, diameter*2, diameter*2);
	ellipse( xPos*3, yPos*3, diameter*3, diameter*3);
	triangle( xPos, yPos, diameter, diameter, xPos*diameter, yPos*diameter );
	triangle( xPos, yPos, -diameter, -diameter, -xPos*diameter, -yPos*diameter );
	triangle( -xPos, -yPos, -diameter, -diameter, xPos*diameter, yPos*diameter );
	
	triangle( -xPos, -yPos, diameter, diameter, -xPos*diameter, -yPos*diameter );


}




