// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var tileCount = 10,
	circleAlpha,
	circleColor;

var video, ctx;

var grid = [];


function setup(){
	createCanvas( windowWidth, windowHeight );
	circleRGBA = color(10, 200, 180, 180);

	video = document.querySelector("video");

	var canvas = document.querySelector("canvas");
	ctx = canvas.getContext('2d');



	// Cross-browser camera capture with getUserMedia/WebRTC
	// https://hacks.mozilla.org/2013/02/cross-browser-camera-capture-with-getusermediawebrtc/

	function successCallback(stream) {
	    if (video.mozSrcObject !== undefined) {
	        video.mozSrcObject = stream;
	    } else {
	        video.src = ( window.URL && window.URL.createObjectURL(stream) ) || stream;
	    };
	    video.play();
	}

    function errorCallback(error) {
        console.error('An error occurred: [CODE ' + error.code + ']');
        // Display a friendly "sorry" message to the user
    }

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

	if (navigator.getUserMedia) {
    	navigator.getUserMedia( { video: true }, successCallback, errorCallback );
	} else {
	    console.log('Native device media streaming (getUserMedia) not supported in this browser.');
	    // Display a friendly "sorry" message to the user.
	}

	// Draw the Grid
	for ( var gridY = 0; gridY < tileCount; gridY++ ) {
		for ( var gridX = 0; gridX < tileCount; gridX++ ) {
			var posX = width / tileCount * gridX;
			var posY = height / tileCount * gridY;
			grid.push( createVector( posX, posY ) );
		}
	}

}

function draw() {

	push();
	translate(width,0);
	scale( -1, 1 );
	ctx.drawImage( video, 0, 0, width, height );
	pop();

	var image = get();
	background(255);
	// translate( width / tileCount / 2, height / tileCount / 2 );
	noStroke();

	for(i = 0; i < grid.length; i++){
		fill( image.get(grid[i].x, grid[i].y) );
		rect( grid[i].x, grid[i].y, width / tileCount + .5, height / tileCount + .5 );
	}
}





