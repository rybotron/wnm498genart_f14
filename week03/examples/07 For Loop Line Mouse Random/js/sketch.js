var seed = 1,
	tileCount = 20,
	circleRGBA;

function setup(){
	createCanvas( windowWidth, windowHeight );
	circleRGBA= color(10, 200, 180, 150);
}

function draw() {

	background(255);
	translate( width / tileCount / 2, 0 );

	randomSeed( seed );

	noFill();
	stroke( circleRGBA, circleRGBA[3] );
	strokeWeight( mouseY / 60 );

	for ( var gridX = 0; gridX < tileCount; gridX++ ) {

		var radius = mouseX / 15;
		var posX = width / tileCount * gridX;
		var posY = height / 2;

		var shiftX = random( -mouseX, mouseX ) / 20;
		var shiftY = random( -mouseX, mouseX ) / 20;

		ellipse( posX + shiftX, posY + shiftY, radius, radius );
	}
}