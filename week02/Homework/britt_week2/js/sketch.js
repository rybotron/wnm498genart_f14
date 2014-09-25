function setup() {
  createCanvas(640, 480);
  background(250);
  noStroke();
  noLoop();  // Run once and stop
}

function draw() {
	smooth();
	// Red
	fill(255, 0, 0, 180)
	stroke(55);
	strokeWeight(5);
	strokeCap(ROUND);
  	ellipse(320, 160, 200, 200);
  	
  	// Blue
	fill(0, 0, 255, 180)
  	ellipse(250, 280, 200, 200);
  	
  	// Yellow
	fill(255, 255, 0, 180)
  	ellipse(390, 280, 200, 200);

  	//Orange
  	beginShape();
		fill(255, 128, 0, 220)
		stroke(55, 200);
		strokeWeight(4);
		strokeJoin(ROUND);
		vertex(295, 255);
		bezierVertex(310, 180, 400, 170, 415, 185);
		bezierVertex(390, 280, 300, 255, 295, 255);
	endShape();

	//Green
  	beginShape();
		fill(0, 255, 0, 220)
		stroke(55);
		strokeWeight(4);
		strokeJoin(ROUND);
		vertex(320, 210);
		bezierVertex(280, 250, 280, 310, 320, 350);
		bezierVertex(370, 300, 350, 240, 320, 210);
	endShape();

	//Purple
  	beginShape();
		fill(127, 0, 255, 220)
		stroke(55);
		strokeWeight(4);
		strokeJoin(ROUND);
		vertex(348, 257);
		bezierVertex(320, 260, 245, 270, 225, 185);
		bezierVertex(310, 165, 340, 235, 348, 257);
	endShape();

	//Black
	beginShape();
		fill(0, 0, 0, 220)
		stroke(0);
		strokeWeight(4);
		strokeJoin(ROUND);
		vertex(320, 210);
		bezierVertex(310, 220, 295, 240, 293, 257);
		bezierVertex(300, 260, 330, 260, 348, 257);
		bezierVertex(350, 260, 340, 230, 320, 210);
	endShape();
}

function mousePressed() {

	translate(320, 240);

	shapeMode(center);

	  if(value >= 0) {

	    rotate(PI*2);

	  } else {

	    value = 0;

	  }

}