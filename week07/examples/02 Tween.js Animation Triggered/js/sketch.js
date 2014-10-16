// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var taps = [];
var sounds = [];


function preload(){
	for( var i = 1; i <= 10; i++ ){
		sounds.push( loadSound("audio/" + i.toString() + ".mp3") );
	}
}

function setup(){

	createCanvas( windowWidth, windowHeight );

	var numKeys = 10;
	while ( numKeys > 0 ){
		taps.push( new Tap( random( 250, 2000 ) ) );
		numKeys--;
	}
}

function draw(){
	background(255);

	for( var i = 0; i < taps.length; i++ ){
		taps[i].display();
	}

	TWEEN.update();
}

function Tap( duration ){
	this.location = createVector( random( 100, width - 100 ), random( 100, height - 100 ) );
	this.fillColor = color( random(100, 255), random(100, 255), random(100, 255));
	this.strokeColor = color( random(100, 255), random(100, 255), random(100, 255));
	this.strokeWeight = random( 5, 50 );
	this.diameter = 0;
	this.tweening = false;
}

Tap.prototype.animate = function( diameter, time ){

	// Reset the diameter to 0
	this.diameter = 0;

	// Create Tween on this object
	var tweenIn = new TWEEN.Tween(this);

	// Assign tween to diameter for a set milliseconds of time
	tweenIn.to( diameter, time );

	// Use probability to determine which Tween curve is used
	var r = random();
	if ( r < .35 ){
		tweenIn.easing( TWEEN.Easing.Sinusoidal.InOut );
	}else if (r >= .35 < .65 ){
		tweenIn.easing( TWEEN.Easing.Quadratic.Out );
	}else{
		tweenIn.easing( TWEEN.Easing.Bounce.Out );
	}

	// When tween starts do this...
	tweenIn.onStart( function(){
		this.tweening = true;
		print("Tween Start");
	});

	// While tweening do this...
	tweenIn.onUpdate( function(){});

	// When tween ends do this...
	tweenIn.onComplete( function(){
		this.tweening = false;
		print("Tween Complete");
		this.diameter = 0;
	})

	// Start the tween
	tweenIn.start();
}

Tap.prototype.display = function(){
	fill( this.fillColor )
	stroke( this.strokeColor );
	strokeWeight( this.strokeWeight );
	ellipse( this.location.x, this.location.y, this.diameter, this.diameter );
}

// keyTyped() is called once everytime a key is pressed but actions keys are ignored Command, CTRL, Shift, Alt
// the most recent key is passed to the key variable
// keyTyped()

function keyTyped(){

	// Stops currently playing sound, comment out if you want to overlay sounds
	for(var i = 0; i < sounds.length; i++ ){
		if ( sounds[i].isPlaying() ) sounds[i].stop();
		//print(sounds[i]);
	}

	switch ( key ){ // key contains the most recent key that was typed

		case "q":
			taps[0].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[0].play();
			break;
		case "w":
			taps[1].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[1].play();
			break;
		case "e":
			taps[2].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[2].play();
			break;
		case "r":
			taps[3].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[3].play();
			break;
		case "t":
			taps[4].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[4].play();
			break;
		case "y":
			taps[5].aanimate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[5].play();
			break;
		case "u":
			taps[6].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[6].play();
			break;
		case "i":
			taps[7].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[7].play();
			break;
		case "o":
			taps[8].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[8].play();
			break;
		case "p":
			taps[9].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[9].play();
			break;
		default:
			break;

	}

}