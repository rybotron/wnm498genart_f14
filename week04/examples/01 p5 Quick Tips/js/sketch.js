// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var c,
	tileCount = 10;

function setup(){
	createCanvas( windowWidth, windowHeight );

	/**************************************** 
		FRAME RATE 
		Specifies the number of frames to be displayed every second
		For example, the function call frameRate(30) will attempt to refresh 30 times a second.
		If the processor is not fast enough to maintain the specified rate, the frame rate will not be achieved
	****************************************/

	frameRate(60); // The default frame rate for p5 is 60
	// frameRate(30);
	// frameRate(10);

	/**************************************** 
		COLOR 
	****************************************/

	colorMode(RGB, 255); // Set the color mode either RGB or HSB with a scale between 0-255
	// colorMode( RGB, 1 ); // Sets the color mode to RGB and scale betwen 0 - 1

	c = color(10, 200, 180, 180); // Creates a new Color Array values 0-255

	background( c ) // Sets the background color to value of c[0], c[1], c[2]
	// backgroudn( c, c[3] ) // Sets the background color to value of c[RGB] with c[3] as the alpha


}

function draw() {

	background(255);

	noFill();
	stroke( c, c[3] );
	strokeWeight( 10 );

	rect(width / 2, height / 2 , 50, 50);

	/**************************************** 	
		MAPPING VALUES
		Here we are mapping the mouseX position to 0 - 100
		When the mouseX = 0 then r = 0 and mouseX = width, r = 100
	****************************************/


	// var radius = map( mouseX, 0, width, 0, 100 );
	// ellipse( width / 2, height / 2, radius, radius );


	/**************************************** 
		MILLISECONDS
		millis() Returns the number of milliseconds (thousandths of a second) since starting the program. 
		This information is often used for timing events and animation sequences.
		Because our framerate can vary depending on processor speed we use millis for exact timing
	****************************************/

	// var m = millis();
	// if ( m > 1000 && m < 2000 ){
	// 	ellipse( 100, 100, 50, 50 );
	// }
	// if ( m > 3000 && m < 4000  ){
	// 	ellipse( 200, 200, 50, 50 );
	// }
	// if ( m > 5000 && m < 6000  ){
	// 	ellipse( 300, 300, 50, 50 );
	// }
	// if ( m > 7000 && m < 8000  ){
	// 	ellipse( 400, 400, 50, 50 );;
	// }


	/**************************************** 
		SEEDING RANDOM & NOISE
	****************************************/

	// Seed the noise, in other words it sets the noise to a constant value 
	// without it the noise would update each itertation through the loop

	// noiseSeed(999);
	// var n = noise(1) * width;
	// // var n = map( noise(1), 0, 1, 0, width ); // Does the same as the previous line
	// line( n, 0, n, height / 2 );

	// randomSeed(999);
	// var r = random(1) * width;

	// // var r = random( width ); // Does the same as the previous line
	// // var r = map( random(1), 0, 1, 0, width ); // Does the same as the previous line
	// line( r, 0, r, height / 2 );

	// // print( random(1), random(1), random(1) );


	/**************************************** 
		DISTANCE
	****************************************/

	// noStroke();
	// fill( c, 50 );
	// var d = dist( width / 2, height / 2, mouseX, mouseY );
	// // print(d);

	// if ( mouseIsPressed && d < 100 ){
	// 	noFill();
	// 	stroke( c );
	// 	strokeWeight( 20 );
	// }

	// ellipse( width / 2, height / 2, 200, 200);


}

