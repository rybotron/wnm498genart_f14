// Scott Brookshire
// scott.e.brookshire@gmail.com
// Made for Generative Art & Creative Code WNM 498 


var sound;
var amp;
var fft;

var color1;  //lt blue
var color2;  //blue
var color3;  //green
var color4;  //yellow
var color5;  //red

var easing = .05;

var xPos = 0;
  var speed = 2;


function preload(){
	background(20);
	//initate fomat
	soundFormats('mp3', 'ogg');
	//load song
	sound = loadSound('audio/face-to-face.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  cricleRGBA = color(100, 0, 0, 255);
	sound.play();
	
  //Set up new amplitude 
  amp = new p5.Amplitude(.5);

  //Get amplitude from this source:sound
  amp.setInput(sound);

	fft = new p5.FFT(.8, 128);


  color1 = color(0,206,252);  //lt blue
  color2 = color(27,10,230);  //blue
  color3 = color(102,255,94);  //green
  color4 = color(239,236,1);  //yellow
  color5 = color(198,30,30);  //red
}

function draw(){
  background(10);

  //Analyze amplitude for each specific second
  var level = amp.getLevel();

  var freq = fft.analyze();

  //Get curent time, and round it down
  var time = sound.currentTime();

  var diameter = map (level, 0, 1, 20, 50);

  var circuit = level + diameter;

  //Scene 1 : Shapes
  if (time < 7.4){


    //  push();
    // strokeWeight(15);
    // stroke(color1);
    // line (width/2, height, width/2, circuit);
    // pop();
    
    
    var diameter = map ( level, 0, 1, 100, 400 );
    push();
    fill(color1);
    strokeWeight(30);
    ellipse(width / 2, height / 2, diameter*3, diameter*3);
    pop();

    push();
    fill(color4);
    strokeWeight(10);
    ellipse(width / 2, height / 2, diameter*2, diameter*2);
    pop();

    push();
    fill(color3);
    strokeWeight(5);
    ellipse(width / 2, height / 2, diameter*1.5, diameter* 1.5);
    pop();

    push();
    fill(color5);
    ellipse ( width*.5, height*.5, diameter, diameter );
    pop();





   


  
 


  
  // Set how many points the circle will have
  var circleResolution = 3;
  var radius = 200;
  var angle = TWO_PI / circleResolution;
  noStroke;
  fill(color1);
  beginShape();
  for ( var i = 0; i <= circleResolution; i++ ){
    var x =  cos( angle * i ) * radius;
    var y =  sin( angle * i ) * radius;
    vertex ( x, y );
  }
  endShape();
  pop();

  // Scene 2 : Circles
  } else if (time > 8.15 && time < 40.5){
      var waveform = fft.waveform();
      beginShape();
        stroke(color1); 
        strokeWeight(8);
        for (var i = 0; i< waveform.length; i++){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map( waveform[i]*.6, 0, 255, height*.9, height*.4);
         vertex(x,y);
        }
      endShape();


      beginShape();
        stroke(color2); 
        strokeWeight(8);
        for (var i = 0; i< waveform.length; i++){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map( waveform[i]*(-.3), 0, 255, height*.7, height);
         vertex(x,y);
        }
      endShape();


      beginShape();
        stroke(color3); 
        strokeWeight(8);
        for (var i = 0; i< waveform.length; i++){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map( waveform[i]*(-.3), 0, 255, height*.5, height*.2);
         vertex(x,y);
        }
      endShape();

      beginShape();
        stroke(color4); 
        strokeWeight(8);
        for (var i = 0; i< waveform.length; i++){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map( waveform[i]*.3, 0, 255, height*.3, height);
         vertex(x,y);
        }
      endShape();
      

       beginShape();
        stroke(color5); 
        strokeWeight(8);
        for (var i = 0; i< waveform.length; i++){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map( waveform[i]*.3, 0, 255, height*.1, height);
         vertex(x,y);
        }
      endShape();





    // Scene 3 : Lines
  } else if (time > 40.5){


  //Ryan Berkey
  push();
    translate(width/2, height / 2);
  // Set how many points the circle will have
  var circleResolution = 3;
  var radius = circuit;
  var angle = TWO_PI / circleResolution;
  fill(100,0,0);
  stroke(color1);
  strokeWeight(10);
  
  beginShape();
  for ( var i = 0; i <= circleResolution; i++ ){
    var x =  cos( angle * i ) * radius ;
    var y =  sin( angle * i ) * radius ;
    vertex ( x, y );
  }
  endShape();
  pop();


  //Ryan Berkey
  push();
    translate(width/2, height / 2);
  // Set how many points the circle will have
  var circleResolution = 3;
  var radius = circuit*.5;
  var angle = TWO_PI / circleResolution;
  fill(100,0,0);
  stroke(color5);
  strokeWeight(10);
  
  beginShape();
  for ( var i = 0; i <= circleResolution; i++ ){
    var x =  cos( angle * i ) * radius ;
    var y =  sin( angle * i ) * radius ;
    vertex ( x, y );
  }
  endShape();
  pop();







  }

  
}

function mouseClicked(){
  sound.stop();
}

window.onresize = function(){
  myCanvas.size(windowWidth, windowHeight);
}