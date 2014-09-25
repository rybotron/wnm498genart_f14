var color = {
	bg: 255,
	light: 0
}


function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(color.bg);

	noStroke();
	ellipseMode(CENTER);


	fill(color.light,10);
	ellipse( windowWidth / 2, windowHeight , windowWidth * 2, windowWidth * 2 );

	fill(color.light,10);
	ellipse( windowWidth / 2, windowHeight , windowWidth * 1.5, windowWidth * 1.5 );

	fill(color.light,10);
	ellipse( windowWidth / 2, windowHeight , windowWidth / 1, windowWidth / 1 );

	fill(color.light,10);
	ellipse( windowWidth / 2, windowHeight , windowWidth / 2, windowWidth / 2 );

	fill(color.light);
	ellipse( windowWidth / 2, windowHeight , windowWidth / 4, windowWidth / 4 );
}

function mousePressed() {
  if (color.light == 0) {
    color.light = 255;
  } else {
    color.light = 0;
  }
}

function mouseReleased(){
  if (color.bg == 255) {
    color.bg = 0;
  } else {
    color.bg = 255;
  }
}
