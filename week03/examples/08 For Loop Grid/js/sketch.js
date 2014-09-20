// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var tileCount = 20,
	circleAlpha,
	circleColor;


function setup(){
	createCanvas( windowWidth, windowHeight );
	circleRGBA = color(10, 200, 180, 180);

}

function draw() {

	background(255);
	translate( width / tileCount / 2, height / tileCount / 2 );
	noFill();

	stroke( circleRGBA, circleRGBA[3] );
	strokeWeight( mouseY / 60 );

	for ( var gridY = 0; gridY < tileCount; gridY++ ) {
		for ( var gridX = 0; gridX < tileCount; gridX++ ) {

			var posX = width / tileCount * gridX;
			var posY = height / tileCount * gridY;

			ellipse( posX, posY, mouseX / 15, mouseX / 15);
		}
	}
}

