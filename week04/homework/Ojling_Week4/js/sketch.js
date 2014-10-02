function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  noLoop(); 
}


function draw() {
  background(random(255), random(255), random(255), random(4));
}

function mousePressed() {
  loop();  // Holding down the mouse activates looping
}

function mouseReleased() {
  noLoop();  // Releasing the mouse stops looping draw()
}


// Window event handler when the browser window size changes
// When resized it calls the anonymous function
window.onresize = function(){
  myCanvas.size(windowWidth, windowHeight);
}

