var tileCount = 10,
	circleAlpha,
	circleColor;


function setup(){
	createCanvas( windowWidth, windowHeight );
	circleRGBA = color(10, 200, 180, 180);
}

function draw() {

	background(255);
	translate( width / tileCount / 2,  0 );

	for ( var gridX = 0; gridX < tileCount; gridX++ ) {

		var radius = mouseX / 15;
		var posX = width / tileCount * gridX;
		var posY = height / 2;

		noFill();
		stroke( circleRGBA, circleRGBA[3] );
		strokeWeight( mouseY / 60 );
		ellipse( posX, posY, radius, radius);

		// fill(0);
		// noStroke();
		// text( "x: " + floor(posX) + " y: " + floor(posY), posX, posY );
	}
}

