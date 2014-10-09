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

    var amplitude = mouseX - width / 2;
    var d = map(abs(amplitude), 0, width /2, 0, 100);
    var numVertices = 25;
    
    for ( var i = 0; i < numVertices; i++){
        var xPos = amplitude * cos(i * TWO_PI / numVertices);
        var yPos = amplitude * sin(i * TWO_PI / numVertices);
        ellipse(xPos, yPos, d, d);
    }

}