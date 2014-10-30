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
    var tween1 = new TWEEN.Tween( agent );
    tween1.to( { x: width, y: height }, 1000 );
    tween1.easing( TWEEN.Easing.Sinusoidal.InOut );
    tween1.onStart(function(){
        print("Agent's x: " + agent.x + " y: " + agent.y);
    });
    tween1.onUpdate(function(){});
    tween1.onComplete(function(){
        tween2.start();
    });

    var tween2 = new TWEEN.Tween( agent );
    tween2.to( { x: width / 2, y: height / 2}, 1000 );
    tween2.easing( TWEEN.Easing.Sinusoidal.InOut );
    tween2.onStart(function(){
        print("Agent's x: " + agent.x + " y: " + agent.y);
    });
    tween2.onComplete(function(){
        tween3.start();
    });

    var tween3 = new TWEEN.Tween( agent );
    tween3.to( { x: width, y: 0}, 1000 );
    tween3.easing( TWEEN.Easing.Sinusoidal.InOut );
    tween3.onStart(function(){
        print("Agent's x: " + agent.x + " y: " + agent.y);
    });
    tween3.onComplete(function(){
        tween4.start();
    });

    var tween4 = new TWEEN.Tween( agent );
    tween4.to( { x: 100, y: height -100 }, 1000 );
    tween4.easing( TWEEN.Easing.Sinusoidal.InOut );
    tween4.onStart(function(){
        print("Agent's x: " + agent.x + " y: " + agent.y);
    });
    tween4.onComplete(function(){
        tween5.start();
    });

    var tween5 = new TWEEN.Tween( agent );
    tween5.to( { x: 0, y: 0 }, 1000 );
    tween5.easing( TWEEN.Easing.Sinusoidal.InOut );
    tween5.onStart(function(){
        print("Agent's x: " + agent.x + " y: " + agent.y);
    });
    tween5.onComplete(function(){
        tween1.start();
    });

    tween1.start();
}

function draw(){
    background(255);
    ellipse( agent.x, agent.y, 50, 50);
    TWEEN.update();
}