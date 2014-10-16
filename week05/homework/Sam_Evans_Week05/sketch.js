var sound;
var amp;
var theta = 0;

function preload(){
	sound = loadSound('audio/tent.mp3');
}

function setup() {
createCanvas(windowWidth, windowHeight);

sound.play();

amp =  new p5.Amplitude();
amp.setInput(sound);

fft = new p5.FFT(.9,512);

}

function draw() {


background(63,65,67);

var level = amp.getLevel();


var radius = 35;
var d = map(noise(theta),0,1,0,250);


 var xPos = 300 * cos(theta) *d;
 var yPos = 300 * sin(theta) *d;


//from p5s FFT example
var info = fft.analyze();

var waveform = fft.waveform();

var b = fft.getEnergy("bass");


beginShape();
stroke(255,255,255);
strokeWeight(3);
for (var i = 0; i < waveform.length; i++){
	var x = map(i,0,waveform.length,0,width);
	var y = map( waveform[i], 0, 255, 0, height);
	vertex(x,y);
}
endShape();



//circle start
beginShape();
stroke(255,255,255);

if( b < 200){
fill(63,65,678,8);
}
else{
fill(81,238,207);
}
ellipse(width/2,height/2,d,d);
endShape();
 theta += level;



 function mouseClicked(){
  sound.stop();
}



}