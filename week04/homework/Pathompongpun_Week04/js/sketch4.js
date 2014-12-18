var max_distance;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
  max_distance = dist(0, 0, width, height);

  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0);

  for(var i = 0; i <= width; i += 20) {
    for(var j = 0; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 99;
      ellipse(i, j, size, size);
      fill(r, g, b, 127);
    }
  }
}


function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}