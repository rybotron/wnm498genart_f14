// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com



var sound;
var amp;
var accum = 0;

// Preload the sound file
function preload(){
    sound = loadSound("audio/real.mp3");
}

function setup(){
    createCanvas( windowWidth, windowHeight );
    circleRGBA = color(10, 200, 180, 100);

    // Start playing the sound
    sound.play();

    amp = new p5.Amplitude( .5 );
    amp.setInput(sound);

}

function draw() {

    background( 255 );
    var level = amp.getLevel();

    var t = floor( sound.currentTime() ) % 5;
    accum += level;

    switch( t ){
        case 0:
            noFill();
            strokeWeight(5);
            ellipse(width / 2, height / 2, level*500, level* 500);
            strokeWeight(10);
            ellipse(width / 2, height / 2, level*2000, level*2000);
            strokeWeight(30);
            ellipse(width / 2, height / 2, level*5000, level*5000);
            break;
        case 1:
            rect( random(0, width), random(0, height), level*500, level* 500);
            var pos = map(noise(accum), 0, 1, 0, width );
            ellipse( pos, pos, level*500, level* 500);
            break;
        case 2:
            rect( width / 2, height / 2, level*500, level* 500);
            rect( width / 2, height / 2, -level*500, -level* 500);
            break;
        case 3:
        case 4:

            push();
            translate(width / 2, height / 2);
            rectMode(CENTER);
            rotate(-accum / 10);
            noFill();
            rect(0,0, 250, 250);
            pop();

            push();
            translate(width / 2, height / 2);
            rectMode(CORNER);
            rotate(accum);
            rect(0,0, 500, 500);
            pop();

            push();
            translate(width / 2, height / 2);
            rectMode(CORNER);
            rotate(accum - .25);
            noFill();
            rect(0,0, 500, 500);
            pop();

            break;
    }

}

















