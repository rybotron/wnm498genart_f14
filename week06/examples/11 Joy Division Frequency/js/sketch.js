// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com


var gui,
    sound,
    FFT,
    freqs = [],
    freqNum = 50,
    circleRGBA;

var ctrl = {
    vSpace: 100
};

// Preload the sound file
function preload(){
    sound = loadSound("audio/real.mp3");
}

function setup(){
    createCanvas( windowWidth, windowHeight );
    circleRGBA = color(10, 200, 180, 100);

    // Start playing the sound
    sound.play();

    // Create an FFT with a frequency range of 15
    FFT = new p5.FFT(.25, 16);
    FFT.setInput(sound);

    gui = new dat.GUI();
    gui.add(ctrl, "vSpace", 0, height / 2).name("Vertical Spacing");
}

function draw() {

    background(255);

    var freq = FFT.analyze();

    // Add the new frequency array to the beginning of fequencies
    freqs.unshift( freq );

    // If the frequencies array is longer than the freqNum pull out the last indexed element
    if (freqs.length >= freqNum){
        freqs.pop();
    }

    // Offset the matrix
    var xGridSize = width / freq.length;
    translate( xGridSize / 2,  height / 2 );

    stroke( circleRGBA, circleRGBA[3] );
    strokeWeight( 5 );
    
    // Loop through the array of frequencies and draw a line between each point of each array
    for(var j = 0; j < freqs.length; j++){
        var yGridPos = map( j, 0, (freqs.length - 1), -ctrl.vSpace, ctrl.vSpace);
        beginShape();
        for ( var i = 0; i < freqs[j].length; i++ ) {
            var radius = xGridSize / 2;
            var xPos = xGridSize * i;
            var yPos = -freqs[j][i] + yGridPos;
            vertex(xPos, yPos);
        }
        endShape();
    }

}

















