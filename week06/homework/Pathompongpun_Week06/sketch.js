var sound;
var amp;
var theta = 0;

function preload(){
	sound = loadSound('audio/HarderBetterFasterStronger.mp3');
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
background(239,232,46);
		
		push();
		strokeWeight(6);
		stroke(8,0,30);
		fill(239,232,46);
		ellipse(width/2,height/2,level*600,level*600);
		pop();

		push();
		// strokeWeight(6);
		noStroke();
		fill(227,60,131);
		ellipse(width/2,height/2,level*300,level*300);
		pop();

	break;

case 1:
//Second Animation
case 2:
background(8,0,30);

    var level = amp.getLevel();
    var radius = 40;
        theta += 1 * level / 2;

    var xPos = radius * cos(theta);
    var yPos = radius * sin(theta);

    // var diameter = map( level, 0, 1, 80, 250);

    // var diameter2 = map( level, 0, 1, height / 2, height + 10);


    push();
    translate(width/2, height / 2);
    rotate(xPos, yPos * level);
    strokeWeight(15);
	stroke(227,60,131);
	fill(239,232,46);
    polygon(0, 0, 80, 3); 
    pop();



break;
//Third Animation
case 3:
case 4:
case 5:
case 6:
case 7:
	background(227,60,131);

		beginShape();
		stroke(8,0,30);
		strokeWeight(6);
		for (var i = 0; i < waveform.length; i++){
			var x = map(i,0,waveform.length,0,width);
			var y = map( waveform[i], 0, 255, 0, height);
			vertex(x,y);
		}
		endShape();

	break;
}


}

function polygon(x, y, radius, npoints) {
        var angle = TWO_PI / npoints;
        beginShape();
        for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
        }
        endShape(CLOSE);
    }

var count = 1;

function mouseClicked(){
	if(count%2 != 0 ){
  		sound.pause();
  		count++;
  	}else{
  		sound.play();
  		count++;
  	}
}