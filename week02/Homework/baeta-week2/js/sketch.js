function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
	// Canvas Center Variables
	var centerX = windowWidth/2;
	var centerY = windowHeight/2;

	// Mouse Parallax Variables
	var parallaxX = mouseX/10;
	var parallaxY = mouseY/10;

	// Canvas Background
	background(250,248,245);

	ellipseMode(CENTER);
	noStroke();
	
	fill(245,242,240);
	ellipse(centerX-parallaxX/3,centerY-parallaxY/3,windowWidth*1.01,windowWidth*1.01);

	fill(240,238,235);
	ellipse(centerX-parallaxX/2.5,centerY-parallaxY/2.5,windowWidth/1.2,windowWidth/1.2);

	fill(235,232,230);
	ellipse(centerX-parallaxX/2,centerY-parallaxY/2,windowWidth/1.6,windowWidth/1.6);

	fill(230,228,225);
	ellipse(centerX-parallaxX/1.5,centerY-parallaxY/1.5,windowWidth/2,windowWidth/2);

	// Outside Lines
	stroke(200,198,195,150);
	line(0,0,windowWidth/5,windowHeight/5);
	line(0,windowHeight,windowWidth/5,windowHeight-windowHeight/5);
	line(windowWidth,0,windowWidth-windowWidth/5,windowHeight/5);
	line(windowWidth,windowHeight,windowWidth-windowWidth/5,windowHeight-windowHeight/5);

	// Foreground Objects
	noStroke();
	
	fill(120,218,215);
	ellipse(centerX-parallaxX/2,centerY-parallaxY/2,windowWidth/5,windowWidth/5);

	fill(50,218,215);
	ellipse(centerX+100-parallaxX/1.5,centerY+100-parallaxY/1.5,windowWidth/8,windowWidth/8);

	fill(200,250,240,50);
	ellipse(centerX-parallaxX,centerY-parallaxY,windowWidth/10,windowWidth/10);
}