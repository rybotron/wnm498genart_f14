// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var time,
	startTime = 0,
	length = 1000,
	animating = false,
	radius = 0;

function setup(){

	createCanvas( windowWidth, windowHeight );

}

function draw(){
	background(255);

	time = millis(); // millseconds since the sketch began
	var endTime = startTime + length; // time to end animation

	if ( time > endTime ) startTime = time; // reset startTime to current time

	// Map the time to the startTime and endTime to 0, 100
	radius = map( time, startTime, endTime, 0, 100 );
	ellipse( width / 2, height / 2, radius, radius );

}


