var b1;
var b2;

function setup() {
  createCanvas(500,500);

  bubble = {
    x: 10,
    y: 10,
    speed: 2,
    size: 30,
    color: color(256,24,3),
    type: "Bubble",

    move: function(){
      this.x = this.x + random(-2,2);
      this.y = this.y - this.speed;

      if (this.y< 0 - this.size) {
        this.y = height + this.size;
        this.x = random(width);
      }
    },

    show: function(){
      noStroke();
      fill(this.color)
      ellipse(this.x,this.y,this.size*2,this.size*2)
    }
  };

  b1 = bubble
  b2 = bubble
  // So im attempting to show twho bubbles at once. 
  // I know this is possible with processing. 
  // What am I doing work in this instance?
  // This just seems to compound the functions of the bubble


}

function draw() {
  background(255);
  b1.move();
  b1.show();

  b2.move();
  b2.show();


	
}
