
// Based on an example from Generative Design pg 202

var minRes = 3;
var maxRes = 30;

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
}
 
function draw() {
	background(255);

	translate( width / 2, height / 2 );

	// Set how many points the circle will have
	var circleResolution = floor( map( mouseY, 0, height, minRes, maxRes ) );
	var radius = mouseX - width / 2;
	var angle = TWO_PI / circleResolution;

	strokeWeight( 5 );
	stroke(0);

	beginShape();
	for ( var i = 0; i <= circleResolution; i++ ){

		var x = 0 + cos( angle * i ) * radius;
		var y = 0 + sin( angle * i ) * radius;
		vertex ( x, y );

	}
	endShape();

}

window.onresize = function(){
	myCanvas.size(windowWidth, windowHeight);
}