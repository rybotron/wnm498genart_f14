// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Hugo Baeta
// http://hugobaeta.com
//
// Includes code from Ryan Berkey - ryan@rybotron.com


var amp,
	fft,
	theta = 0,
	accum = 0;

function preload(){
  background(200,220,230);
  sound = loadSound('audio/fool.m4a');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	sound.play();

	// amp = new p5.Amplitude(); // Measures overall volume between 0.0 and 1.0
	amp = new p5.Amplitude(.5); // Adding a number between 0.0 and .999 will smooth the amplitude reading
	fft = new p5.FFT( .5, 128 );
}

function draw() {
	background(250,245,240);
	noStroke();
	fill(0);

	var myLevel = amp.getLevel(); // Get the amplitude level in a 0.0 - 1.0 range then scaling it by ampScale

	var diameter = map( myLevel, 0, 1, 10, 500);

	translate(windowWidth / 2, windowHeight / 2);


	var t = floor( sound.currentTime() );

	if( t % 4 ) {
		strokeWeight(1);
		stroke(200,195,190,100);
		fill(0,0,0,0);
		rectMode(CENTER);
		rect( 0, 0, 250-diameter/3, 250-diameter/3 );

		// // Tried this but it crashes everything :(
		// var tileCount = 5;
	  // var gridWidth = width / tileCount;
	  // for ( var gridY = 0; gridY < tileCount; gridY++ ) {
	  //     for ( var gridX = 0; gridX < tileCount; gridX++ ) {
		//
	  //         var posX = width / tileCount * gridX;
	  //         var posY = height / tileCount * gridY;
		//
	  //         noFill();
	  //         strokeWeight(5);
		// 				stroke(100);
	  //         var d = gridWidth - level * 500;
	  //         ellipse( posX, posY, d, d);
	  //     }
	  // }
	} else {
		strokeWeight(1);
	  stroke(200,195,190,100);
		fill(0,0,0,0);
		ellipse(0, 0, diameter*4, diameter*4);
	}

	if ( t > 16 ) {
		if ( t & 1 ) {
			strokeWeight(1);
			stroke(200,195,190,100);
			fill(0,0,0,0);
			ellipse(0, 0, windowWidth-100, windowWidth-100);
		}
		if ( t % 2 ) {
			strokeWeight(diameter/2);
			stroke(200,195,190,20);
			fill(0,0,0,0);

			// ellipse(0, 0, windowWidth-100-diameter/3, windowWidth-100-diameter/3);
			ellipse(0, 0, windowWidth-100, windowWidth-100);
		}
	}


	// Main Ellipse, sitting on top of it all
	noStroke();
	if (diameter < 200) {
		fill(255-diameter/2,200,200)
	} else {
		fill(50,50,255-diameter/2)
	}
	ellipse( 0, 0, diameter*2, diameter*2 );



	//
	// Copied from example of Frequency Visualization
	// Just to see where the frequencies are
	//

	var freq = fft.analyze();

	var c1 = color(150, 50, 100,100);
	var c2 = color(50, 50, 150,100);

	for ( var i = 0; i < freq.length; i++ ){

		var x = width / freq.length * i;
		var y = 0;

		var c = lerpColor(c1, c2, i / freq.length);
		var s = lerpColor(c2, c1, i / freq.length);

		fill(c);
		// stroke(255,255,255,10);
		noStroke();
		rotate(0);
		rect( x-windowWidth/2, y+windowHeight/2, width / freq.length, -freq[i]/2 );
	}
}
