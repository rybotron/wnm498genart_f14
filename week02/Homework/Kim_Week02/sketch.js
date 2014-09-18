var value = 1;
var x = 300;
var y = 300;
var xspeed = Math.random(-2,2);
var yspeed = Math.random(-2,2);
var dangerous = 255;


function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  x = x + xspeed;
  y = y + yspeed;


  background(0);
  fill(255,dangerous,dangerous);
  ellipse(x, y, 40,40);

//  if ((x > width-20) || (x < 20)) {
//    xspeed = xspeed * -1;
//    dangerous = dangerous + 5;

//  if ((y > height-20) || (y < 20)) {
//    yspeed = yspeed * -1;
//    dangerous = dangerous + 5;
//  }


  if ((x > windowWidth-20) || (x < 20)) {
    xspeed = xspeed * -1;
    dangerous = dangerous + 5;
	}
  if ((y > windowHeight-20) || (y < 20)) {
    yspeed = yspeed * -1;
    dangerous = dangerous + 5;
  }

  if (Math.abs(xspeed) <= 2 || Math.abs(yspeed) <= 2) {
    dangerous = dangerous + 5;
  }

}

function mouseDragged() {
  var moveX = pmouseX - mouseX;
  var moveY = pmouseY - mouseY;
  if (value == 0) {
    print(1);
    x = mouseX;
    y = mouseY;
  } else {
    value = 0;
  }

  if (moveX >= 20) {
    xspeed = -10;
    dangerous = dangerous - 20;
  } else if (Math.abs(moveX) >= 20 && moveX <= 0) {
    xspeed = 10;
    dangerous = dangerous - 20;
  }

  if (moveY >= 20) {
    yspeed = -10;
    dangerous = dangerous - 20;
  } else if (Math.abs(moveY) >= 20 && moveY <= 0) {
    yspeed = 10;
    dangerous = dangerous - 20;
  }
}

function mousePressed() {
  if (value == 0) {
    print(1);
    x = mouseX;
    y = mouseY;
    dangerous = dangerous - 20;
    if(xspeed == 10 || xspeed == -10){
      xspeed = random(-2,2);
    }
    if(yspeed == 10 || yspeed == -10){
      yspeed = random(-2,2);
    }
  } else {
    value = 0;
  }
}
