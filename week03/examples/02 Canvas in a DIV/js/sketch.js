// Academy of Art
// WNM 498 Generative Art & Code
//
// Ryan Berkey
// ryan@rybotron.com
//
// Placing the canvas in a div for CSS styling and positioning


function setup() {
	myCanvas = createCanvas(500, 500);
	myCanvas.parent("container");
}
 
function draw() {

	background(255);

	fill(240, 80, 5); 
	noStroke(); 

	ellipse( width / 2, height / 2, width / 4, width / 4 );  
}