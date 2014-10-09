// Code from p5 reference: http://p5js.org/reference/#/p5.FFT has been altered for this project

var amp,
	theta = 0;

function preload(){
  background(255);
  sound = loadSound('audio/prettygirls.ogg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	sound.play();

	fft = new p5.FFT();

}
 
function draw() {



  var spectrum = fft.analyze(); 
  noStroke();
  fill(0,250,154, 5); 
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

  var waveform = fft.waveform();
  beginShape();
  stroke(0,0,0, 50); 
  strokeWeight(3);
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

function keyPressed(){
	sound.play();
}