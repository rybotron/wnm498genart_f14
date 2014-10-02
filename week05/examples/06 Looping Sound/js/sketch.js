// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var sound;
var amp;
 
function preload() {
  soundFormats('mp3', 'ogg');
  sound = loadSound('audio/real.mp3');
}
 
function setup() {
	createCanvas(windowWidth, windowHeight);


	// stop sound to prevent it from playing automatically
	// sound.play();
  
	amp = new p5.Amplitude(.1);
	amp.setInput(sound);

}
 
function draw()
{
  background(255);
  
  // draw an ellipse based on current volume level
  var vol = amp.getLevel();

  noStroke();
  fill(255, 0, 0);
  var diameter = map(vol, 0, 1, 0, width);
  ellipse((width/2), height/2, diameter, diameter);
    
}

function mousePressed(){
	if (sound.playing){
		sound.stop();
	}else {
		sound.loop( 1, 1, 0, 2);
	}

}