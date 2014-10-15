// help from
// http://p5js.org/learn/examples/Form_Regular_Polygon.php //
// 

    var amp,
    theta = 0;

    function preload(){
        sound = loadSound('audio/likeApen.mp3')
    }

    function setup(){
        createCanvas(windowWidth, windowHeight);
        sound.play();

        amp = new p5.Amplitude();
        amp.setInput(sound);

    }

    function draw() {
        background(255);
        var level = amp.getLevel();
        var radius = 40;
        theta += 1 * level / 2;

        var xPos = radius * cos(theta);
        var yPos = radius * sin(theta);

        var diameter = map( level, 0, 1, 80, 250);

        var diameter2 = map( level, 0, 1, height / 2, height + 10);


        push();
        translate(width*0.2, height / 2);
        rotate(xPos, yPos * level);
        polygon(0, 0, 80, 3); 
        pop();

        push();
        translate(width*0.5, height / 2);
        rotate(frameCount / 50.0);
        polygon(0, 0, diameter, 20); 
        pop();

        push();
        translate(width*0.8, diameter2);
        rotate(frameCount / -100.0);
        polygon(0, 0, 70, 7); 
        pop();
    }

    function polygon(x, y, radius, npoints) {
        var angle = TWO_PI / npoints;
        beginShape();
        for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
        }
        endShape(CLOSE);
    }