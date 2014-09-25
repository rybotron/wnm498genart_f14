// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var animations = [];

function setup(){

	createCanvas( windowWidth, windowHeight );

	var numKeys = 10;
	while ( numKeys > 0 ){
		animations.push( new Animation( random( 250, 2000 ) ) );
		numKeys--;
	}
}

function draw(){
	background(255);

	for( var i = 0; i < animations.length; i++ ){
		animations[i].update();
		animations[i].display();
	}
}

function Animation( duration ){
	this.xPos = 0;
	this.yPos = 0;
	this.fillColor = color( random(100, 255), random(100, 255), random(100, 255));
	this.strokeColor = color( random(100, 255), random(100, 255), random(100, 255));
	this.strokeWeight = random( 5, 50 );
	this.finalScale = random(100, 500);
	this.duration = duration;
	this.startTime = 0;
	this.endTime = 0;
	this.tween = 0;
}

Animation.prototype.update = function(){
	this.tween = map( millis(), this.startTime, this.endTime, 0, this.finalScale );
	if( millis() > this.endTime ){
		this.endTime = this.startTime;
	}
}

Animation.prototype.animate = function(){
	this.xPos = random( 100, width - 100 );
	this.yPos = random( 100, height - 100 );
	this.startTime = millis();
	this.endTime = this.startTime + this.duration;
}

Animation.prototype.display = function(){
	fill( this.fillColor )
	stroke( this.strokeColor );
	strokeWeight( this.strokeWeight );
	ellipse( this.xPos, this.yPos, this.tween, this.tween );
}

// keyTyped() is called once everytime a key is pressed but actions keys are ignored Command, CTRL, Shift, Alt
// the most recent key is passed to the key variable
// keyTyped()

function keyTyped(){

	switch ( key ){ // key contains the most recent key that was typed

		case "q":
			animations[0].animate();
			break;
		case "w":
			animations[1].animate();
			break;
		case "e":
			animations[2].animate();
			break;
		case "r":
			animations[3].animate();
			break;
		case "t":
			animations[4].animate();
			break;
		case "y":
			animations[5].animate();
			break;
		case "u":
			animations[6].animate();
			break;
		case "i":
			animations[7].animate();
			break;
		case "o":
			animations[8].animate();
			break;
		case "p":
			animations[9].animate();
			break;
		default:
			break;

	}

}