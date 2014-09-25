//Credit to Daniel Shiffman - http://natureofcode.com

var gui;
var transforms = {
  x: 100,
  y: 100,
  xspeed: 1,
  yspeed: 1,
  modifier: 1,
  backgroundr: 50,
  backgroundg: 224,
  backgroundb: 156,

};


function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = new dat.GUI();
  gui.add(transforms, "modifier", 0, 100);
  gui.add(transforms, "backgroundr", 0, 255);
  gui.add(transforms, "backgroundg", 0, 255);
  gui.add(transforms, "backgroundb", 0, 255);


};

function draw() {
  background(50);

  transforms.x = transforms.x + transforms.xspeed * transforms.modifier;
  transforms.y = transforms.y + transforms.yspeed * transforms.modifier;

  if ((transforms.x > width) || (transforms.x < 0)) {
    transforms.xspeed = transforms.xspeed * -1;
  }   
  if ((transforms.y > height) || (transforms.y < 0)) {
    transforms.yspeed = transforms.yspeed * -1;
  }



  // background color
  background(transforms.backgroundr,transforms.backgroundg,transforms.backgroundb);

  // stroke color
  noStroke();
  // ellipse mode
  ellipseMode(CENTER);
  // face
  fill(0);
  ellipse(transforms.x, transforms.y, 260, 260);
  // ears
  fill(0);
  ellipse(transforms.x-150, transforms.y-120, 225, 225);
  ellipse(transforms.x+150, transforms.y-120, 225, 225);
  // eyes
  fill(mouseX,mouseY,255);
  noStroke();
  ellipse(transforms.x-70, transforms.y-60, 50, 60);
  ellipse(transforms.x+70, transforms.y-60, 50, 60);
  // mouth
  fill(255,mouseX,mouseY);
  noStroke();
  arc(transforms.x, transforms.y, 225, 225, 0, radians(180)); 
};

