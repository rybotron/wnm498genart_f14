
var colorBart = 0 
var colorBart2 = 242
function setup() {
  createCanvas(1600, 800);
  background(210, 25, 59);  
}
 
function draw() {
  // 1
  // BART
  // 

  fill(colorBart2,229, colorBart);
  scale(2,2);
  strokeWeight(2);
  bezierDetail(100);
  strokeJoin(ROUND);

  // Head
  beginShape();
 
  vertex(99,38);
  vertex(109,53);
  vertex(120,35);
  vertex(128,53);
  vertex(139,38);
  vertex(144,53);
  vertex(156,42);
  vertex(160,57);
  vertex(171,46);
  vertex(174,63);
  vertex(187,52);
  vertex(187,67);
  vertex(200,57);
  vertex(202,73);
  vertex(215,63);
  vertex(215,78);
  vertex(232,72);

  bezierVertex(202,157,173,242,190,276);
  bezierVertex(179,289,145,298,128,285);
  bezierVertex(128,275,124,272,120,270);
  bezierVertex(118,268,111,264,112,259);
 
  bezierVertex(132,260,147,257,153,254);
  bezierVertex(129,259,68,262,46,237);
  bezierVertex(52,218,60,211,61,196);  

  bezierVertex(66,201,80,204,83,203);
  bezierVertex(66,198,54,193,58,181);
  bezierVertex(63,170,75,189,102,183);
  vertex(75,129);
  bezierVertex(74,120,76,124,81,115);
  bezierVertex(88,105,97,77,99,38);

  endShape(CLOSE);

  //Ear
  beginShape();
  noStroke();
  vertex(182,222);
  bezierVertex(205,220,196,250,178,243);
  endShape(CLOSE);

  stroke(50);
  bezier(182,222,205,220,196,250,178,243);

  //Mouth
  bezier(146,248,150,248,155,252,156,258);

  //Eyes
  fill(234,234,234);
  ellipse(89,157,62,62);
  fill(40,40,40);
  ellipse(89,157,7.5,7.5);
  fill(234,234,234);
  ellipse(131,170,62,62);
  fill(40,40,40);
  ellipse(131,170,7.5,7.5);




  // 2
  // BART
  // 

  fill(colorBart2,colorBart, 1);
  translate(300,0);
  strokeWeight(2);
  bezierDetail(100);
  strokeJoin(ROUND);

  // Head
  beginShape();
 
  vertex(99,38);
  vertex(109,53);
  vertex(120,35);
  vertex(128,53);
  vertex(139,38);
  vertex(144,53);
  vertex(156,42);
  vertex(160,57);
  vertex(171,46);
  vertex(174,63);
  vertex(187,52);
  vertex(187,67);
  vertex(200,57);
  vertex(202,73);
  vertex(215,63);
  vertex(215,78);
  vertex(232,72);

  bezierVertex(202,157,173,242,190,276);
  bezierVertex(179,289,145,298,128,285);
  bezierVertex(128,275,124,272,120,270);
  bezierVertex(118,268,111,264,112,259);
 
  bezierVertex(132,260,147,257,153,254);
  bezierVertex(129,259,68,262,46,237);
  bezierVertex(52,218,60,211,61,196);  

  bezierVertex(66,201,80,204,83,203);
  bezierVertex(66,198,54,193,58,181);
  bezierVertex(63,170,75,189,102,183);
  vertex(75,129);
  bezierVertex(74,120,76,124,81,115);
  bezierVertex(88,105,97,77,99,38);

  endShape(CLOSE);

  //Ear
  beginShape();
  noStroke();
  vertex(182,222);
  bezierVertex(205,220,196,250,178,243);
  endShape(CLOSE);

  stroke(50);
  bezier(182,222,205,220,196,250,178,243);

  //Mouth
  bezier(146,248,150,248,155,252,156,258);

  //Eyes
  fill(234,234,234);
  ellipse(89,157,62,62);
  fill(40,40,40);
  ellipse(89,157,7.5,7.5);
  fill(234,234,234);
  ellipse(131,170,62,62);
  fill(40,40,40);
  ellipse(131,170,7.5,7.5);



}

function mouseMoved(){
  colorBart = colorBart + 2;
}

