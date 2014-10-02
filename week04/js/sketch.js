//all the points
var points = [];
//are we painting?
var painting = false;
//set tolerance for connections
var joint = 100.0;
var v;
//check where we are and where were we
var current;
var previous;



function setup() {
	createCanvas(displayWidth, displayHeight);
	background(255);
	stroke(0,50);
	smooth();
	current = createVector(0,0);
	previous = createVector(0,0);

	
}


function draw(){
	


}
function mousePressed(){
	
}
 
function mouseDragged(){
	ellipse(mouseX,mouseY,0.6,0.6);

	var d = new p5.Vector(mouseX,mouseY,0,0);
	points.push(d);

	for (var p=0; p<points.length; p++){
	var v = points[p];
	var join = d.dist(v)/joint;
	if (join < random(1)){
		line(d.x,d.y,v.x,v.y);
		}
	}
}