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

var level = amp.getLevel();
var radius = 35;
var d = map(noise(theta),0,1,0,250);
var xPos = 200 * cos(theta);
var yPos = 200 * sin(theta);
var info = fft.analyze();
var waveform = fft.waveform();
var bass = map(fft.getEnergy("bass"), 0, 255, 0, 40);
var high = map(fft.getEnergy("treble"),0,255,0,40);
var lm = map(fft.getEnergy("lowMid"),0,255,0,40);
var hm = map(fft.getEnergy("highMid"),0,255,0,40);
var level = amp.getLevel();
var t = floor( sound.currentTime() ) % 8;
var rand = random(1,400);




map()
theta += level;

if(level > 200 ){


}


switch(t){
//First Animation
	case 0:
//From p5 FFT example
background(227,113,98);
beginShape();
stroke(49,55,89);
strokeWeight(4);
for (var i = 0; i < waveform.length; i++){
	var x = map(i,0,waveform.length,0,width);
	var y = map( waveform[i], 0, 255, 0, height);
	vertex(x,y);
}
endShape();
	break;
// Second Animation
case 1:
case 2:
background(49,55,89);
push();
noStroke();
translate(width/2,height/2);
rotate(bass/30);
rectMode(CENTER);
fill(255,255,255)
rect(0,0,10,level*3000)
pop();

push();
strokeWeight(3);
stroke(255,255,255);
fill(81,238,207);
ellipse(width/2,height/2,level*600,level*600);
pop();
break;
//Third Animation
case 3:
case 4:
case 5:
case 6:
case 7:
	background(238,183,63);
		push();
		if(rand < 100){
			translate(-bass+width/2 -25, bass+height/2 +25);
		}else{
		translate(width/2 -25, height/2 +25);
		};
		rectMode(CENTER);
		noStroke();
		fill(10,165,175);
		rect(0,0,50,50);
		pop();

		push();
		if(rand >= 100 && rand <200){
			translate(-high+width/2 -25, -high+height/2 -25);
		}else{
		translate(width/2 -25, height/2 -25);
		};
		rectMode(CENTER);
		noStroke();
		fill(10,165,175);
		rect(0,0,50,50);
		pop();

		push();
		if(rand >= 200 && rand < 300){
			translate(lm+width/2 + 25, -lm+height/2 -25);;
		}else{
		translate(width/2 + 25, height/2 -25);
		};
		rectMode(CENTER);
		noStroke();
		fill(10,165,175);
		rect(0,0,50,50);
		pop();

		push();
		if(rand > 300){
			translate(hm+width/2 +25,hm+height/2 +25);
		}else{
		translate(width/2 +25,height/2 +25);
		};
		// for curved motion: translate(25+xPos+(width/2 +25), 25+yPos+ (height/2 +25));
		rectMode(CENTER);
		noStroke();
		fill(10,165,175);
		rect(0,0,50,50);
		pop();



	break;
}


}

function mouseClicked(){
  sound.stop();
}