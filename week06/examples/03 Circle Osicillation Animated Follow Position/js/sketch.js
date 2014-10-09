// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com


function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(255);
    translate(width/2, height / 2);

    var period = 120;
    var t = frameCount / period;
    print(t);

    var numVertices = 30;
    // var amplitude = mouseX - width / 2;
    var amplitude = 300;
    
    for ( var i = 0; i < numVertices; i++){

        var offset = TWO_PI / numVertices;
        var xPos = amplitude * cos(i * offset + t);
        var yPos = amplitude * sin(i * offset + t);

        noFill();
        stroke(4);

        push();
        translate( xPos, yPos );
        rotate(atan2(yPos, xPos));
        rect(0, 0, 5, 20);
        pop();
    }

}