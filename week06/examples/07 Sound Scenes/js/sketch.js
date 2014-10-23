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

    background( 0, 170, 215 );
    var level = amp.getLevel();

    var t = floor( sound.currentTime() );

    // Take m modulo 2 to see if m is even or odd
    if( t % 2 ){
        var tileCount = 5;
        var gridWidth = width / tileCount;
        translate( gridWidth / 2, gridWidth / 2 );

        for ( var gridY = 0; gridY < tileCount; gridY++ ) {
            for ( var gridX = 0; gridX < tileCount; gridX++ ) {

                var posX = width / tileCount * gridX;
                var posY = height / tileCount * gridY;

                noFill();
                strokeWeight(5);
                var d = gridWidth - level * 500;
                ellipse( posX, posY, d, d);
            }
        }
    }else{
        ellipse(width / 2, height / 2, level*1000, level*1000);
    }
}
