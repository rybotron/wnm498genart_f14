function setup(){

// set canvas size
createCanvas(displayWidth, displayHeight);

}

function draw(){

//add background color
background(234, 126, 0);

//no stroke for shapes
noStroke();


//shape for eyes back
push();
fill(248,161,64);
translate(60,30);
scale(0.5,0.5);
ellipse(200, 173, 100, 100);

//fill for eyes back
fill(46,175,229);

//ellipse for eyes back
//(x,y,w,h)
ellipse(200,173,47,47);

//ellipse for eyes middle
fill(30,69,84);
ellipse(200,175,29,29);

//ellipse for eyes top
fill(113,208,246);
ellipse(200,175,11,11);
pop();

//shape for beak 
push();
fill(254,189,17);
triangle(30, 250, 200, 260, 200, 90);
pop();

//head back layer
push();
fill(178,106,41);
ellipse(250, 173, 200, 200);


pop();

//shape for eyes front
push();
fill(248,161,64);
translate(30,0);
ellipse(200, 173, 100, 100);

//fill for eyes back
fill(46,175,229);

//ellipse for eyes back
//(x,y,w,h)
ellipse(200,173,47,47);

//ellipse for eyes middle
fill(30,69,84);
ellipse(200,175,29,29);

//ellipse for eyes top
fill(113,208,246);
ellipse(200,175,11,11);

pop();

//rectange neck
push();
fill(178,106,41);
rect(250, 250, 30, 100);
pop();

//main body shape
push();
fill(178,106,41);
beginShape();
vertex(280, 330);
bezierVertex(900, 0, 800, 605, 800, 600);
bezierVertex(500, 300, 200, 700, 250, 330);
endShape(CLOSE);
pop();

//wing
push();
fill(235, 149, 50);
scale(0.5, 0.5);
translate(310, 300);
if(mouseIsPressed){
	rotate(.17);
}else{
	rotate(0);
}

beginShape();
vertex(280, 330);
bezierVertex(900, 0, 800, 605, 800, 600);
bezierVertex(500, 300, 200, 700, 250, 330);
endShape(CLOSE);
pop();

//water ring
push();
stroke(113,208,246);
strokeWeight(3);
noFill();
ellipse(660, 797, 70, 20);
translate(-50, -40);
ellipse(660, 797, 70, 20);
pop();

//legs
push();
fill(178,106,41);
rect(650, 500, 20, 300);
translate(-50, -40);
rect(650, 500, 20, 300);
pop();

//knees
push();
fill(178,106,41);
ellipse(610, 630, 40, 40);
translate(50, 30);
ellipse(610, 630, 40, 40);
pop();




// this line displays the coordinates of the mouse
  fill(0);
  text(ceil(mouseX) + ", " + ceil(mouseY), mouseX, mouseY);
  print( "mouseX " + mouseX + " mouseY " + mouseY); 




}