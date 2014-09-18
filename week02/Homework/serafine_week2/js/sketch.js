function setup (){

	createCanvas(800,1000);
	frameRate(2000);
	background(246, 239, 229);
}
//sets up a canvas -- will create defaut (100px x 100px) canvas if you leave this blank

function draw (){

	push();

	translate(10, 100);

	strokeWeight(6);

	//body
	fill(167, 182, 175);
	noStroke();
	triangle(410, 200, 650, 800, 150, 800);

	//tie top left
	fill(167, 141, 67);
	quad(370, 440, 440, 440, 420, 500, 390, 500);

	//tie top right
	fill(86, 73, 40);
	quad(440, 440, 440, 440, 420, 500, 390, 500);

	//tie bottom
	fill(167, 141, 67);
	quad(350, 740, 440, 740, 420, 500, 390, 500);

	//head
	noStroke();
	fill(255);
	ellipse (400, 250, 380, 380);

		//nose
		stroke(130, 130, 130);
		strokeWeight(4);
		curve(300, -1100, 350, 250, 450, 250, 390, -400); 

		//eyebrows
		strokeWeight(6);
		stroke(0);
		line(250, 250, 550, 250);

		//eyes
		fill(0);
		ellipse (290, 280, 15, 15);
		ellipse (510, 280, 15, 15);


	if(mouseIsPressed){
	fill(0, 0, 0);
	ellipse(mouseX,mouseY, 4,4);
	frameRate(10000);
	};

	if(keyIsPressed){
		background(246, 239, 229);
	}

}

//our loop, request animation frame