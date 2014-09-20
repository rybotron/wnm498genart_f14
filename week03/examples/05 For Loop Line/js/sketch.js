// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//
// Using a for loop to draw a series of ellipses


var tileCount = 10,
	circleAlpha,
	circleColor;


function setup(){
	createCanvas( windowWidth, windowHeight );
	circleRGBA = color(10, 200, 180, 180);
}

function draw() {

	background(255);

	var gridSize = width / tileCount;
	translate( gridSize / 2,  0 ); // Translate the entire matrix to center the ellipses

	noFill();
	stroke( circleRGBA, circleRGBA[3] );
	strokeWeight( 5 );
	
	for ( var gridX = 0; gridX < tileCount; gridX++ ) {

		var radius = gridSize / 2;
		var posX = gridSize * gridX;
		var posY = height / 2;

		ellipse( posX, posY, radius, radius);
	}
}