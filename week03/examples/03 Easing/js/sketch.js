// Academy of Art
// WNM 498 Generative Art & Code
//
// Ryan Berkey
// ryan@rybotron.com
//
// Position easing
// Ported from http://processing.org/examples/easing.html

var myCanvas,
    x = 0,
    y = 0,
   	easing = .05; // Smaller the number the slower the ease

function setup() {
  myCanvas = createCanvas( windowWidth, windowHeight);   
}

function draw() { 
  background(51, 51, 51, 150);
  
  var dx = mouseX- x;
  if( abs(dx) > 1 ) {
    x += dx * easing;
  }

  var dy = mouseY - y;
  if( abs(dy) > 1 ) {
    y += dy * easing;
  }
  
  ellipse(x, y, 66, 66);
}

window.onresize = function(){
  myCanvas.size(windowWidth, windowHeight);
  background(51, 51, 51 );  
}