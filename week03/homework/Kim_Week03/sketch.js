var mouseIsPressed = false;
var value = 0;


function setup() {
  createCanvas(windowWidth,windowHeight);

  ball = {
    x : 300,
    y : 300,
    xspeed : Math.random(-2,2),
    yspeed : Math.random(-2,2),
    dangerous : 255,
    size: 30,

  display: function(){
    noStroke();
    fill(255,this.dangerous,this.dangerous);
    ellipse(this.x, this.y, this.size,this.size);

    //limit dangerous
    if(this.dangerous <= 0) { 
      this.dangerous = 0;
    };
     
  },
  movement: function(){
    this.x += this.xspeed;
    this.y += this.yspeed;

    if ((this.x > windowWidth-this.size/2) || (this.x < this.size/2)) {
    this.xspeed = this.xspeed * -1;
    this.dangerous = this.dangerous + 15;
  };

  if ((this.y > windowHeight-this.size/2) || (this.y < this.size/2)) {
    this.yspeed = this.yspeed * -1;
    this.dangerous = this.dangerous + 15;
  };

  if (Math.abs(this.xspeed) <= 2 || Math.abs(this.yspeed) <= 2) {
    this.dangerous = this.dangerous + 15;
  };
  },

  grab: function(){
    var moveX = pmouseX - mouseX; //mouse moving
    var moveY = pmouseY - mouseY; //mouse moving

    if (mouseIsPressed == true){
    print(1);
    this.x = mouseX; //grab a ball
    this.y = mouseY; //grab a ball

    if (moveX >= 20) {  //movement
      this.xspeed = -10;  //heading to left
      this.dangerous -= 20; //get red
    } else if (Math.abs(moveX) >= 20 && moveX <= 0) { //movement
      this.xspeed = 10; //heading to right
      this.dangerous -= 20; //get red
    };

    if (moveY >= 20) {
      this.yspeed = -10;
      this.dangerous -= - 20;
    } else if (Math.abs(moveY) >= 20 && moveY <= 0) {
      this.yspeed = 10;
      this.dangerous -= 20;
    };};



  } // end of grab
}//end of ball
};//end of setup


function draw() {

  background(0);

  ball.display();
  ball.movement();
  ball.grab();

// dat.gui doesn't working
// No error in Console
  window.onload = function() {
  var ball = new ball.display();
  var gui = new dat.GUI();
  gui.add(ball, 'size', 10, 50);
  gui.add(ball, 'xspeed', -5, 5);
};

}


