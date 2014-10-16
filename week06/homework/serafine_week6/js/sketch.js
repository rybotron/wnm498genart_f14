// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com


//color palette
// purple: (82,52,112)
// blue: (205, 229, 236)
// pink: (235,214,232)
// taupe: (231,226,221)
// green: (195,176,50)
// nearly black: (47,45,46)

var sound;
var amp;
var accum = 0;
var theta = 0;
var vertices = [20];
var tileCount = 5,
    circleAlpha,
    circleColor;


function preload(){
    sound = loadSound("audio/SockIt2Summer.mp3");
}

function setup(){
    createCanvas( windowWidth, windowHeight );
    

    sound.play();

    amp = new p5.Amplitude( .5 );
    amp.setInput(sound);

}

function draw() {

    background( 205, 229, 236 );
    var level = amp.getLevel();

    var t = floor(sound.currentTime());

    if( t < 8){
        translate(width/2, height/2);
        var radius = 10;
        var n = map(noise(theta), 0, 1, 10, 1000);

        var xPos = sin(theta);
        var yPos = cos(theta);
        fill(255);
        noStroke();
        ellipse(xPos, yPos, n, n);

        var v = createVector(xPos, yPos); 
        vertices.unshift(v);
         if (vertices.length > 100){
        vertices.pop();
    }
    theta += level; 

    }else if (t > 9 && t < 10.9){
            background(231,226,221);
            translate( width/2, height/2 );
            noFill();

            stroke(82,52,112);
            strokeWeight( 60 );

            for ( var gridY = 0; gridY < tileCount; gridY++ ) {
            for ( var gridX = 0; gridX < tileCount; gridX++ ) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            rotate(3);
            rect( posX, posY, 25, 25);
        }

          }
 
    }else if (t > 11.9 && t < 13.5){
            background(255);
            translate( width / tileCount/ 2, height /tileCount/ 2 );
            noFill();

            stroke( 195,176,50);
            strokeWeight( 60 );

            for ( var gridY = 0; gridY < tileCount; gridY++ ) {
            for ( var gridX = 0; gridX < tileCount; gridX++ ) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            ellipse( posX, posY, 15, 15);


            }

        }
 
    }else if (t > 14.3 && t < 17){
        background(82,52,112);
            translate( width / tileCount/ 2, height /tileCount/ 2 );
            noFill();

            stroke(235,214,232);
            strokeWeight( 60 );

            for ( var gridY = 0; gridY < tileCount; gridY++ ) {
            for ( var gridX = 0; gridX < tileCount; gridX++ ) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            ellipse( posX, posY, 45, 45);

            }

        }
 
    }else if (t > 17.5 && t < 20){
        background(231,226,221);
                switch(t % 3){ //t is the value we're gonna check
        case 0: ellipse(width/2, height/2, 500, 500);
        break; //switch gets you out of reading a lot of extra code. Break allows you to get out of the conditional.
        background(195,176,50);
        case 1: ellipse(width/2, height/2, 200, 200);
        break;
        case 2: ellipse(width/2, height/2, 100, 100);
        break;

        }
 
    }else if (t > 20 && t < 22){
        background(235,214,232);
            translate( width / tileCount/ 2, height /tileCount/ 2 );
            noFill();

            stroke(0);
            strokeWeight( 60 );

            for ( var gridY = 0; gridY < tileCount; gridY++ ) {
            for ( var gridX = 0; gridX < tileCount; gridX++ ) {

            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            ellipse( posX, posY, 45,45);
            rotate(3);

            }

    }
 
    }else if (t > 22 && t < 30){
            translate(width/2, height/2);
            var radius = 10;
            var n = map(noise(theta), 0, 1, 10, 300);

            var xPos = sin(theta);
            var yPos = cos(theta);

            noStroke();
            fill(255)
            ellipse(xPos, yPos, n, n);

            var v = createVector(xPos, yPos); 
            vertices.unshift(v);
             if (vertices.length > 100){
            vertices.pop();
        }
    
        theta += level; 

    }else if (t > 30 && t < 34){
            background(231,226,221);
            translate(width/2, height/2);
            var radius = 10;
            var n = map(noise(theta), 0, 1, 10, 300);

            var xPos = sin(theta) + n;
            var yPos = cos(theta) - n;

            strokeWeight(70)
            fill(255);
            line(xPos, yPos, n, n);

            var v = createVector(xPos, yPos); 
            vertices.unshift(v);
             if (vertices.length > 100){
            vertices.pop();
        }
        theta += level; 
    }else if (t > 33 && t < 36){
            background(235,214,232);
            translate(width/2, height/2);
            var radius = 10;
            var n = map(noise(theta), 0, 1, 10, 300);

            var xPos = sin(theta) - n;
            var yPos = cos(theta) + n;

            strokeWeight(70)
            fill(255);
            line(xPos, yPos, n, n);

            var v = createVector(xPos, yPos); 
            vertices.unshift(v);
             if (vertices.length > 100){
            vertices.pop();
        }
    
        theta += level; 
    }else if (t > 35 && t < 300){
            background(205, 229, 236);
            translate(width/2, height/2);
            var radius = 10;
            var n = map(noise(theta), 0, 1, 10, 300);

            var xPos = sin(theta) - n;
            var yPos = cos(theta) + n;

            strokeWeight(70)
            fill(255);
            line(n, n, xPos, yPos);

            var v = createVector(xPos, yPos); 
            vertices.unshift(v);
             if (vertices.length > 100){
            vertices.pop();
        }
    
        theta += level; 
    }
}

function mouseClicked(){
  sound.stop();
}









