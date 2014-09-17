function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
  	//background(255);
    fill(0);
    print("Mouse Pressed, setting ellipse color to Black");
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}