
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
	background(0);
	//packman
	fill(235, 238, 1);
	push();
	translate(300, 100); 
	rotate(radians(20));
	arc(50, 50, 80, 80, 0, QUARTER_PI+HALF_PI+HALF_PI+HALF_PI, PIE);
	pop();

	fill(235, 238, 1);
	//food
	ellipse(400, 163, 10, 10);
	ellipse(440, 163, 10, 10);
	ellipse(480, 163, 10, 10);
	ellipse(520, 163, 10, 10);
	ellipse(560, 163, 10, 10);
	ellipse(600, 163, 10, 10);
	ellipse(640, 163, 10, 10);	
	ellipse(680, 163, 10, 10);
	ellipse(820, 163, 10, 10);
	ellipse(860, 163, 10, 10);
	ellipse(900, 163, 10, 10);
	ellipse(940, 163, 10, 10);
	ellipse(980, 163, 10, 10);
	ellipse(1020, 163, 10, 10);
	ellipse(1060, 163, 10, 10);
	ellipse(1100, 163, 10, 10);
	ellipse(1140, 163, 10, 10);
	ellipse(1180, 163, 10, 10);

	//food2
	ellipse(320, 363, 10, 10);
	ellipse(360, 363, 10, 10);	
	ellipse(400, 363, 10, 10);
	ellipse(440, 363, 10, 10);
	ellipse(480, 363, 10, 10);
	ellipse(520, 363, 10, 10);
	ellipse(560, 363, 10, 10);
	ellipse(600, 363, 10, 10);
	ellipse(640, 363, 10, 10);	
	ellipse(680, 363, 10, 10);
	ellipse(720, 363, 10, 10);
	ellipse(760, 363, 10, 10);
	ellipse(940, 363, 10, 10);
	ellipse(980, 363, 10, 10);
	ellipse(1020, 363, 10, 10);
	ellipse(1060, 363, 10, 10);
	ellipse(1100, 363, 10, 10);
	ellipse(1140, 363, 10, 10);
	ellipse(1180, 363, 10, 10);						
	//ghost
	push();
	translate(650, -50);
	ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
	fill(237,27,36);  // Set fill to white
	ellipse(100, 200, 35, 38);  // Draw white ellipse using RADIUS mode
	noStroke();
	rectMode(CENTER);
	rect(100, 225, 70, 45);
	
	//eyes
	ellipseMode(CENTER);  // Set ellipseMode to CENTER
	fill(255);  // Set fill to gray
	ellipse(82, 195, 20, 20);  // Draw gray ellipse using CENTER mode

	ellipseMode(CENTER); 
	fill(27, 76, 237);  
	ellipse(78, 195, 10, 10); 

	ellipseMode(CENTER); 
	fill(255);  
	ellipse(110, 195, 20, 20);

	ellipseMode(CENTER); 
	fill(27, 76, 237);  
	ellipse(106, 195, 10, 10); 

	//bottom
	ellipseMode(CENTER); 
	fill(0);  
	ellipse(78, 250, 20, 20);  

	ellipseMode(CENTER); 
	fill(0);  
	ellipse(100, 250, 20, 20); 

	ellipseMode(CENTER); 
	fill(0);  
	ellipse(122, 250, 20, 20);  
	pop();

	//ghost2
	push();
	translate(750, 150);
	ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
	fill(73,246,244);  // Set fill to white
	ellipse(100, 200, 35, 38);  // Draw white ellipse using RADIUS mode
	noStroke();
	rectMode(CENTER);
	rect(100, 225, 70, 45);
	
	//eyes
	ellipseMode(CENTER);  // Set ellipseMode to CENTER
	fill(255);  // Set fill to gray
	ellipse(82, 195, 20, 20);  // Draw gray ellipse using CENTER mode

	ellipseMode(CENTER); 
	fill(27, 76, 237);  
	ellipse(78, 195, 10, 10); 

	ellipseMode(CENTER); 
	fill(255);  
	ellipse(110, 195, 20, 20);

	ellipseMode(CENTER); 
	fill(27, 76, 237);  
	ellipse(106, 195, 10, 10); 

	//bottom
	ellipseMode(CENTER); 
	fill(0);  
	ellipse(78, 250, 20, 20);  

	ellipseMode(CENTER); 
	fill(0);  
	ellipse(100, 250, 20, 20); 

	ellipseMode(CENTER); 
	fill(0);  
	ellipse(122, 250, 20, 20);  
	pop();


	//ghost3
	push();
	translate(300, 350);
	ellipseMode(RADIUS);  // Set ellipseMode to RADIUS
	fill(246,73,199);  // Set fill to white
	ellipse(100, 200, 35, 38);  // Draw white ellipse using RADIUS mode
	noStroke();
	rectMode(CENTER);
	rect(100, 225, 70, 45);
	
	//eyes
	ellipseMode(CENTER);  // Set ellipseMode to CENTER
	fill(255);  // Set fill to gray
	ellipse(82, 195, 20, 20);  // Draw gray ellipse using CENTER mode

	ellipseMode(CENTER); 
	fill(27, 76, 237);  
	ellipse(86, 195, 10, 10); 

	ellipseMode(CENTER); 
	fill(255);  
	ellipse(110, 195, 20, 20);

	ellipseMode(CENTER); 
	fill(27, 76, 237);  
	ellipse(106, 195, 10, 10); 

	//bottom
	ellipseMode(CENTER); 
	fill(0);  
	ellipse(78, 250, 20, 20);  

	ellipseMode(CENTER); 
	fill(0);  
	ellipse(100, 250, 20, 20); 

	ellipseMode(CENTER); 
	fill(0);  
	ellipse(122, 250, 20, 20);  
	pop();

	//walls
	fill(0);
	stroke(65, 14, 255);
	rect(0, 50, window.innerWidth, 10);

	fill(0);
	stroke(65, 14, 255);
	rect(0, 250, window.innerWidth, 10);

	fill(0);
	stroke(65, 14, 255);
	rect(0, 450, window.innerWidth, 10);

	fill(0);
	stroke(65, 14, 255);
	rect(0, 650, window.innerWidth, 10);
		

	//Text
	fill(value);
	stroke(235, 238, 1);
	textSize(100);
	textFont("Helvetica");
	textStyle(BOLD);
	text("PACMAN", 600, 590); 
	}
	var value = 0;
	function mouseClicked() {
	  if (value == 0) {
	    value = 255;
	  } else {
	    value = 0;
	  }
		
}


