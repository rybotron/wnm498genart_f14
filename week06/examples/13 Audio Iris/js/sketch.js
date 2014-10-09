// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com


var sound;
var FFT;
var amp;
var gui;
var iris = {
    radials: [],
    accumFrameCount: 0,
    period: 300,
    accumScale: 2,
    streakLength: 250,
};
var accumFrameCount = 0;



// Preload the sound file
function preload(){
    sound = loadSound("audio/real.mp3");
}

function setup(){
    createCanvas( windowWidth, windowHeight );

    // Start playing the sound
    sound.play();

    /******************************************************************  
        Setup FFT and Amplitude
    ******************************************************************/
    FFT = new p5.FFT(0, 16);
    FFT.setInput(sound);

    amp = new p5.Amplitude();
    amp.setInput(sound);

    /******************************************************************  
        Create Radial Waves
    ******************************************************************/
    for ( var i = 0; i < FFT.freqDomain.length; i++){
        iris.radials.push(new Radial( i * 50, iris.streakLength));
    }

    /******************************************************************  
        DAT GUI Controls  
    ******************************************************************/
    gui = new dat.GUI();
    gui.add(iris, "period", 30, 3600).step(30).name("Period");
    gui.add(iris, "accumScale", 0, 100).step(1).name("Speed Scale");

    // Setup a controller for dat.GUI to fire a callback to set the length of every radial wave
    var slController = gui.add(iris, "streakLength", 10, 1000).step(10).name("Streak Length");
    slController.onFinishChange( function(value){
        for( var i = 0; i < iris.radials.length; i++){
            iris.radials[i].setLength(value);
            print("New Length: " + value);
        }
    });
}

function draw() {

    background(0);
    translate(width / 2, height / 2);

    var freq = FFT.analyze();
    var level = amp.getLevel();
    iris.accumFrameCount += 1 + (level * iris.accumScale);
    var timePeriod = iris.accumFrameCount / iris.period;

    var c1 = color(255, 100, 0);
    var c2 = color(0, 100, 160);

    for( var i = 0; i < iris.radials.length; i++){
        var c = lerpColor(c1, c2, i / iris.radials.length);
        stroke(c);
        var waveScale = map(freq[i], 0, 255, .5, 3);
        iris.radials[i].update( timePeriod, waveScale);
        iris.radials[i].display();
    }
}




















