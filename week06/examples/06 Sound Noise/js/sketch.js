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

    amp = new p5.Amplitude( .8 );
    amp.setInput(sound);

}

function draw() {

    background( 0, 170, 215 );

    var level = amp.getLevel();
    accum +=  level / 10;

    var n = map( noise(accum), 0, 1, 0, width );

    stroke( 0, 100, 250 );
    strokeWeight(level * 500);
    line( n, 0, n, height);


}

















