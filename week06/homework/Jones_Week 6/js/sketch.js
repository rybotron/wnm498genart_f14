var sound;
var amp;
var playing = false;
var theta = 0;
var accum = 0;
var vertices = [];
var freqs = [];
var freqNum = 50;
var FFT;

function preload(){
  sound = loadSound('audio/Chant From Inner Earth.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	sound.play();

    FFT = new p5.FFT();
    FFT.setInput(sound);

	amp = new p5.Amplitude(.8); // Adding a number between 0.0 and .999 will smooth the amplitude reading
	amp.setInput(sound);
}


function draw() {
 background(255);

//sets the time to a floored number
var t = floor( sound.currentTime()) %5;
//print(t);

accum+= level;

var level = amp.getLevel();
//print(level);

var n = map(noise(theta), 0,1,0,500);

// Create an FFT with a frequency range of 15
    FFT = new p5.FFT(.25, 16);
    FFT.setInput(sound);


switch(t){
	case 0:
            background( 65, 242, 242 );
            stroke(49, 74, 71);
            noFill();
            strokeWeight(5);
            ellipse(width / 2, height / 2, level*500, level* 500);
            strokeWeight(10);
            ellipse(width / 2, height / 2, level*2000, level*2000);
            strokeWeight(30);
            
            ellipse(width / 2, height / 2, level*5000, level*5000);
            break;
    case 1:
    		background( 63, 191, 191 );
    		push();
    		translate(width/2, height/2);
			ellipse(xPos, yPos, level * 100, level * 100);

			var radius = n;
			
			var numVertices = 30;
			for(var i = 0; i < numVertices; i++){
			var xPos = n * sin(i * theta / numVertices);
			var yPos = n * cos(i * theta / numVertices);
			ellipse (xPos, yPos, 10,10);
			line(xPos, yPos, 0, 0);
			//vertex(vertices[i].x, vertices[i].y);
			}
			// endShape();
    		pop();
    	break;
    case 2:
    	background( 4, 191, 173 );
        var waveform =FFT.waveform();
        fill(93, 140, 135);
        
        beginShape();
        for(var i = 0; i < waveform.length; i++){
            var x = map(i, 0, waveform.length, 0, width);
            var y = map(waveform[i], 0, 255, 0, height);
            vertex(x,y);
        }

        endShape();
        print(y);

    		break;
    case 3:
    		background( 93, 140, 135 );
            strokeWeight(5);
            triangle( random(0, width), random(0, height), n, n, n ,n);
            var pos = map(noise(accum), 0, 1, 0, width );
            
    		break;

    case 4:
    var minRes = 2;
    var maxRes = 10;

    translate(width / 2, height / 2 );
    var circleResolution = floor(map(n, -n, height, minRes, maxRes));
    var radius = n;
    var angle = TWO_PI / circleResolution;
    strokeWeight(20);
    beginShape();
    for(var i = 0; i <= circleResolution; i++){
    		var x = 0 + cos( angle * i ) * radius;
			var y = 0 + sin( angle * i ) * radius;
			vertex ( x, y );
    }
    endShape();

    		break;
}






theta+=level;

}

function mouseClicked(){
if (!playing){
	sound.play();
	playing = true;
}else{
	sound.stop();
	playing = false;
}
}




