var watch;

function setup() {
    createCanvas(windowWidth, windowHeight);
    watch = new Clock(500, windowWidth/2, windowHeight/2);

    ellipseMode(CENTER);
    strokeWeight(watch.size/12);
    strokeCap(ROUND);
    noFill();
}

function draw() {
    background(60);

    watch.update();
    watch.display();
}

var Clock = function(size, centerX, centerY) {
    this.initialPos = -HALF_PI;
    this.hours      = this.initialPos;
    this.minutes    = this.initialPos;
    this.seconds    = this.initialPos;    
    this.day        = this.initialPos;
    this.month      = this.initialPos;
    this.size     = size;
    this.center     = createVector(centerX, centerY);
}

Clock.prototype.update = function() {
    this.seconds = this.initialPos + (TAU / 60 * (second() + 1));
    this.minutes = this.initialPos + (TAU / 60 * (minute() + 1));
    this.hours   = this.initialPos + (TAU / 24 * (hour() + 1));
    this.day     = this.initialPos + (TAU / 31 * day());
    this.month   = this.initialPos + (TAU / 12 * month());
}

Clock.prototype.display = function() {
    var alpha = 40;
    var gap = 4;

    // Seconds
    stroke(255, 0, 60, alpha);
    arc(this.center.x, this.center.y, this.size, this.size, this.initialPos, TAU);

    // Minutes
    stroke(128, 0, 255, alpha);
    arc(this.center.x, this.center.y, this.size * 10/12 - gap, this.size * 10/12 - gap, this.initialPos, TAU);

    // Hours
    stroke(0, 180, 240, alpha);
    arc(this.center.x, this.center.y, this.size * 8/12 - gap * 2, this.size * 8/12 - gap * 2, this.initialPos, TAU);

    // Day
    stroke(0, 255, 150, alpha);
    arc(this.center.x, this.center.y, this.size * 6/12 - gap * 3, this.size * 6/12 - gap * 3, this.initialPos, TAU);

    // month
    stroke(220, 240, 0, alpha);
    arc(this.center.x, this.center.y, this.size * 4/12 - gap * 4, this.size * 4/12 - gap * 4, this.initialPos, TAU);

    
    // Seconds
    stroke(255, 0, 60, 200);
    arc(this.center.x, this.center.y, this.size, this.size, this.initialPos, this.seconds);

    // Minutes
    stroke(128, 0, 255, 200);
    arc(this.center.x, this.center.y, this.size * 10/12 - gap, this.size * 10/12 - gap, this.initialPos, this.minutes);

    // Hours
    stroke(0, 180, 240, 200);
    arc(this.center.x, this.center.y, this.size * 8/12 - gap * 2, this.size * 8/12 - gap * 2, this.initialPos, this.hours);

    // Day
    stroke(0, 255, 150, 200);
    arc(this.center.x, this.center.y, this.size * 6/12 - gap * 3, this.size * 6/12 - gap * 3, this.initialPos, this.day);

    // month
    stroke(220, 240, 0, 200);
    arc(this.center.x, this.center.y, this.size * 4/12 - gap * 4, this.size * 4/12 - gap * 4, this.initialPos, this.month);

    // // text
    // noStroke();
    // fill(255);
    // textSize(48);
    // textFont("Dosis");
    // text(hour() + ":" + minute() + ":" + second() + " " + month() + "/" + day(), width/2 - 50, height - 100 );
}
