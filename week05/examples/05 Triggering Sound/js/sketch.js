// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var sounds = [];
 
function preload(){
	for( var i = 1; i <= 10; i++ ){
		sounds.push( loadSound("audio/" + i.toString() + ".mp3") );
	}

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	background(255);
}

// q - p keys mapped to sounds[]
function keyTyped(){

	// Stops currently playing sound, comment out if you want to overlay sounds
	for(var i = 0; i < sounds.length; i++ ){
		if ( sounds[i].isPlaying() ) sounds[i].stop();
		//print(sounds[i]);
	}

	switch ( key ){ // key contains the most recent key that was typed

		case "q":
			sounds[0].play();
			break;
		case "w":
			sounds[1].play();
			break;
		case "e":
			sounds[2].play();
			break;
		case "r":
			sounds[3].play();
			break;
		case "t":
			sounds[4].play();
			break;
		case "y":
			sounds[5].play();
			break;
		case "u":
			sounds[6].play();
			break;
		case "i":
			sounds[7].play();
			break;
		case "o":
			sounds[8].play();
			break;
		case "p":
			sounds[9].play();
			break;
		default:
			break;

	}

}