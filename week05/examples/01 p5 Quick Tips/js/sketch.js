// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com


var img;
/********************************************************************************** 
	preload()
	Called directly before setup(), the preload() function is used to handle asynchronous loading of external files. 
	If a preload function is defined, setup() will wait until any load calls within have finished. 
**********************************************************************************/

function preload(){
	img = loadImage( "images/ascidiae.jpg");
}


function setup(){
	createCanvas( windowWidth, windowHeight );

	noLoop()
	noCanvas();

}

function draw() {

	background(255);

	// Image was preloaded in the preload() method
	imageMode(CENTER);
	image(img, width / 2,  height / 2 );


	/**********************************************************************************
		constrain()
		Similar to map however if clamps the value instead of interpolating the value.
	**********************************************************************************/

	push()
	translate( width / 2, height / 2 );

	var d = abs( mouseX - width / 2);
	var dc = constrain(d, 0, 200);
	ellipse( 0, 0, dc, dc );

	pop();



}

