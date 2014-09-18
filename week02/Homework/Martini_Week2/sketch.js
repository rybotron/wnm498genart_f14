var radius;
var isPlaying;
var rndR = 0.0;
var rndG = 0.0;
var rndB = 0.0;
var isLoading;


function preload(){
  background(255,0,0);
  sound = loadSound('assets/Racer_short.mp3');
}

function setup(){
  isPLaying = false;
  radius = 100;
  createCanvas(windowWidth,windowHeight);
  sound.play();
  fft = new p5.FFT();
  loaderObj.style.display = "none";
  cl.hide();
}

function draw(){

  rndR = rndR + .01;
  rndB = rndB + .01;
  rndG = rndG + .01;

  var r = noise(rndR) * width;
  var g = noise(rndG) * width;
  var b = noise(rndB) * width;

  background(0);

  translate(windowWidth/2,windowHeight/2);

  var spectrum = fft.analyze(); 
  stroke(255);

  for (var i = 110; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, 2024);
    var h = -windowHeight + map(spectrum[i], 0, 255, windowHeight, 0);
   
    rotate(radians(radius/10));

    push();

    scale(20-radius/30);

    rotate(radians(i+radius));
    translate(x/30,spectrum[i]);

    if(i>=0 && i<=341){

      strokeWeight(spectrum[i]/150);
      scale(spectrum[i]/100,spectrum[i]/30);

      // strokeWeight(spectrum[i]/90);
      stroke(spectrum[i]*r/8,spectrum[i]/g,spectrum[i]/b,spectrum[i]*0.2);
      // arc(0, 0, spectrum[i]/2, spectrum[i]/2, 0, radians(spectrum[i]/2));
      line(0,0,0,h/10);
    }


    if(i>=683 && i<=1024){
      strokeWeight(spectrum[i]/200);
      scale(spectrum[i]/100,spectrum[i]/30);
      stroke(spectrum[i]/r,spectrum[i]*g/8,spectrum[i]/b,spectrum[i]*1);
      line(0,0,2,h+r/15);

    }

    if(i>=342 && i<=682){
      strokeWeight(spectrum[i]/150);
      scale(spectrum[i]/100,spectrum[i]/30);
      stroke(spectrum[i]/r,spectrum[i]/g,spectrum[i]*b/8,spectrum[i]*1);
      line(0,0,2,h+r/20);
    }
    pop();

    push();
    beginShape();
    rotate(radians(i+radius));
    translate(x/30,spectrum[i]);
    if(i>=683 && i<=1024){
      stroke(255,150);
      strokeWeight(2);

      vertex(0,spectrum[i]/5*i/spectrum[i]);
      translate(0,spectrum[i]/5*i/spectrum[i]);
      noFill();
      vertex(0,spectrum[i]/5);
    }
    endShape();

    pop();
    radius=radius+0.0005;

  }


  noStroke();

  var waveform = fft.waveform();
  // beginShape();
  for (var i = 0; i< waveform.length; i++){

    // fill(waveform[i]/255,i/random(255),waveform[i/2]);
    fill(random(i)/255,i/random(255),waveform[i/2]);



    // var x = map(i, 0, waveform.length, 0, width);
    // var y = map( waveform[i], 0, 255, 0, height);
    // push();

    // radius = ( windowWidth/2 > windowHeight/2 ? windowHeight/2  : windowWidth/2 ) * waveform[i]

    // rotate(radians(i+r));

    // translate(0,y/10*i/waveform[i]);
    // rotate(radians(i));

    // line(0,0,waveform[i]/4,4);
    // pop();
    // r=r+0.005;
  }
}

function mouseClicked(){
  // isPLaying = !isPlaying;
  
  // if(isPLaying) {
  //   sound.stop();
  // } 
  var fs = fullscreen();
    fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}