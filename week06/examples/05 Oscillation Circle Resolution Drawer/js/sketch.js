// Based on an example from Generative Design pg 202

var minRes = 3;
var maxRes = 10;

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  noFill();
  background(255);
}
 
function draw() {

	if ( mouseIsPressed ){

		translate( width / 2, height / 2 );
		var circleResolution = floor( map( mouseY, 0, height, minRes, maxRes ) );
		var radius = mouseX - width / 2;
		var angle = TWO_PI / circleResolution;

		strokeWeight( 2 );
		stroke( 0, 25 );

		beginShape();
		for ( var i = 0; i <= circleResolution; i++ ){

			var x = 0 + cos( angle * i ) * radius;
			var y = 0 + sin( angle * i ) * radius;
			vertex ( x, y );

		}
		endShape();
	}

}

window.onresize = function(){
	myCanvas.size(windowWidth, windowHeight);
}