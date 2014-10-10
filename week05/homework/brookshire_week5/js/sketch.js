
var sound;
var amplitude;

function preload(){
	background(20);
	//initate fomat
	soundFormats('mp3', 'ogg');
	//load song
	sound = loadSound('audio/face-to-face.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	sound.play();
	

	fft = new p5.FFT();
}

function draw(){
  background(0);

  
  var waveform = fft.waveform();
  beginShape();
  stroke(0,206,252); // waveform is red
  strokeWeight(10);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], 0, 255, 0, height);
    vertex(x,y);
  }
  endShape();
  
}

function mouseClicked(){
  sound.stop();
}