// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var sound;
 
function preload(){
	  // Including both mp3 and ogg format to ensure browser compatibility
  soundFormats('mp3', 'ogg');

  // if the mp3 is not supported by the browseer it will automatically load the ogg file
  sound = loadSound('audio/real.mp3');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	sound.play();
}
 
function draw(){
	background(255);
	TWEEN.update();
}

function mousePressed(){

	var s = { volume: 1 };
    var tweenVolume = new TWEEN.Tween( s )
        .to( {volume: .1 }, 5000 )
        .delay( 1000 )
        .yoyo( true )
        .repeat(1)
        .easing( TWEEN.Easing.Cubic.InOut )
        .onUpdate(function(){
        	sound.setVolume(s.volume);
        	rect(width / 2, height / 2, 10, s.volume * -100)
        })
        .start();
}