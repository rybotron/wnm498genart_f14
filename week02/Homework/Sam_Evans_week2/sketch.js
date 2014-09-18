function setup() {
  createCanvas(500,500);
  background(220,217,200)

}

function draw() {
	var x = 400;
	var b = 100;
	var c = 125;
	var d = 375;
	var f = 375;

	//change e to change increment
	if (keyIsPressed === true & mouseIsPressed === true){
		var e = random(20,50)
	} else {
			var e = 25;
			background(220,217,200)
	};




//first section
push();
	if (keyIsPressed === true) {
		noStroke();
    fill(random(256),random(256),random(256));
  } else {
noStroke();
    fill(51,62,84);
  }

  quad(x,x,b,x,c,d,d,f);
 pop();
//secon section
push();
	if (keyIsPressed === true) {
		noStroke();
    fill(random(256),random(256),random(256));
  } else {
  	noStroke();
    fill(119,101,138);
  }

  quad(x-e,x-e,b+e,x-e,c+e,d-e,d-e,f-e);
 pop();
 //third section
 push();
	if (keyIsPressed === true) {
		noStroke();
    fill(random(256),random(256),random(256));
  } else {
  	noStroke();
    fill(163,109,143);
  }

  quad(x-e*2,x-e*2,b+e*2,x-e*2,c+e*2,d-e*2,d-e*2,f-e*2);
 pop();
 // forth section
push();
	if (keyIsPressed === true) {
		noStroke();
    fill(random(256),random(256),random(256));
  } else {
  	noStroke();
    fill(171,98,125);
  }

  quad(x-e*3,x-e*3,b+e*3,x-e*3,c+e*3,d-e*3,d-e*3,f-e*3);
 pop();
 //fith section
push();
	if (keyIsPressed === true) {
		noStroke();
    fill(random(256),random(256),random(256));
  } else {
  	noStroke();
    fill(184,106,93);
  }

  quad(x-e*4,x-e*4,b+e*4,x-e*4,c+e*4,d-e*4,d-e*4,f-e*4);
 pop();
 //sixth section

push();
	if (keyIsPressed === true) {
		noStroke();
    fill(random(256),random(256),random(256));
  } else {
  	noStroke();
    fill(213,131,91);
  }

  quad(x-e*5,x-e*5,b+e*5,x-e*5,c+e*5,d-e*5,d-e*5,f-e*5);
 pop();

}
function keyPressed(){


}