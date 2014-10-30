// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//

var agent = {};
var newnew = {};
var tweening = false;

function setup(){
    createCanvas( windowWidth, windowHeight );

    agent.position = createVector( width * .1, height * .1);
    agent.diameter = 50;

    ellipse(agent.position.x, agent.position.y, agent.diameter, agent.diameter);

    newnew = {};
    newnew.position = createVector( width - width * .1, height - height * .1);
    newnew.diameter = 100;

    // tween.js
    // https://github.com/sole/tween.js
    //
    // See tween graphs here:
    // http://sole.github.io/tween.js/examples/03_graphs.html

    // Method Chaining
    // http://schier.co/blog/2013/11/14/method-chaining-in-javascript.html
    var tweenScale = new TWEEN.Tween( agent )
        .to( { diameter: newnew.diameter }, 1000 )
        .onStart( function(){
            tweening = true;
        })
        // .repeat( 1 )
        .repeat( Infinity )
        .delay( 1000 )
        .yoyo( true )
        .easing( TWEEN.Easing.Cubic.InOut )
        .start();

    var tweenPosition = new TWEEN.Tween( agent.position )
        .to( { x: newnew.position.x, y: newnew.position.y }, 1000 )
        .onStart( function(){
            print(newnew.position);
        })
        .repeat( Infinity )
        .delay( 1000 )
        .yoyo( true )
        .easing( TWEEN.Easing.Cubic.InOut )
        .onUpdate( function(){
            // print(agent.position);
        })
        .start();
}

function draw(){
    background(255);
    strokeWeight(10);
    ellipse( agent.position.x, agent.position.y, agent.diameter, agent.diameter );
    TWEEN.update();
}

function mousePressed(){
    newnew.position.x = mouseX;
    newnew.position.y = mouseY;
    print(newnew.position)
}