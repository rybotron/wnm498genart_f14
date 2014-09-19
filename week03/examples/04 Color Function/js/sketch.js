// Academy of Art
// WNM 498 Generative Art & Code
//
// Ryan Berkey
// ryan@rybotron.com
//
// Creating a new color and assigning it to a variable

var myColor;

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myColor = color(0, 230, 190, 255);
}
 
function draw() {

	background(255);

	noStroke(); 
	fill( myColor, myColor[3] ); // Use myColor to assign the fill and alpha
	ellipse( width / 2, height / 2, width / 4, width / 4 );  

}

// Window event handler when the browser window size changes
// When resized it calls the anonymous function
window.onresize = function(){
	myCanvas.size(windowWidth, windowHeight);
}