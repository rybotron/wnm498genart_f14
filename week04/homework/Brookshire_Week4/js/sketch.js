


var yoff = 0.0;
var r, g, b;
var velocity;
function setup(){
	createCanvas( windowWidth, windowHeight );	
}

function draw(){
	background(20);
	noFill();
	
	strokeWeight(10);

	beginShape();
	stroke(r/2, g, b);
	var xoff = 0;
	for (var x = 0; x<= width; x += 5){
		var y = map(noise(xoff, yoff), 0, 1, 500, 300);
		vertex(x, y);
		xoff += 0.01;
	}
	yoff += 0.01;
	vertex(width, height);
	vertex(0, height);
	endShape(CLOSE);


	beginShape();
	stroke(r, g, b/2);
	var xoff = 0;
	for (var x = 0; x<= width; x += 4){
		var y = map(noise(xoff, yoff), 0, 1, 300, 100);
		vertex(x, y);
		xoff += 0.01;
	}
	yoff += 0.01;
	vertex(width, height);
	vertex(0, height);
	endShape(CLOSE);


	beginShape();
	stroke(r, g/2, b);
	var xoff = 0;
	for (var x = 0; x<= width; x += 3){
		var y = map(noise(xoff, yoff), 0, 1, 700, 500);
		vertex(x, y);
		xoff += 0.01;
	}
	yoff += 0.01;
	vertex(width, height);
	vertex(0, height);
	endShape(CLOSE);


	beginShape();
	stroke(r/2, g/2, b/2);
	var xoff = 0;
	for (var x = 0; x<= width; x += 3){
		var y = map(noise(xoff, yoff), 0, 1, 0, 100);
		vertex(x, y);
		xoff += 0.01;
	}
	yoff += 0.01;
	vertex(width, height);
	vertex(0, height);
	endShape(CLOSE);
}

function keyPressed(){
	r = random(255);
	g = random(255);
	b = random(255);
	xoff = random(10);

}

function keyReleased(){


}
