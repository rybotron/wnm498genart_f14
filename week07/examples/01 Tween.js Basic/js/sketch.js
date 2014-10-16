// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//

var agent;

function setup(){
    createCanvas( windowWidth, windowHeight );

    agent = createVector(0, 0);

    // tween.js
    // https://github.com/sole/tween.js
    //
    // See tween graphs here:
    // http://sole.github.io/tween.js/examples/03_graphs.html
    var tween = new TWEEN.Tween( agent );
    tween.to( { x: width, y: height }, 2000 );
    tween.easing( TWEEN.Easing.Sinusoidal.InOut );
    tween.start();
}

function draw(){
    background(255);
    ellipse( agent.x, agent.y, 50, 50);
    TWEEN.update();
}