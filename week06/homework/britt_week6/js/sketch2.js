
var a,
	b,
	h,
	xpos,
	ypos,
	oxpos,
	oypos,
	t,
	ot,
	d,
	od,
	centerX,
	centerY;

function preload(){
  sound = loadSound('audio/duke.mp3')
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  sound.play();

  amp = new p5.Amplitude();
  amp.setInput(sound);

  colorMode(HSB,360);
  background(0);
  centerX = width/2;
  centerY = height/2;
  smooth();

}


function draw() {
  background(0);
  
  // math of the Spirograph: http://mathworld.wolfram.com/Hypotrochoid.html
  a = mouseX;
  b = 60;
  h = mouseY;

  var level = amp.getLevel();


  var radius = 35;
  var d = map(noise(theta),0,1,0,250);


  var xPos = 300 * cos(theta) *d;
  var yPos = 300 * sin(theta) *d;


  //from p5s FFT example
  var info = fft.analyze();

  var waveform = fft.waveform();

  var b = fft.getEnergy("bass");

    
  for(var i=1; i < waveform.length; i+=1) {
    t = map(radians(i),0,waveform.length,0,width);
    ot = map(radians(i-1), 0, 255, 0, height);
    d = a*t;
    od = a*ot;
  
    oxpos = (a-b)*cos(ot)+h*cos(od);
    oypos = (a-b)*sin(ot)+h*sin(od);    
    
    xpos = (a-b)*cos(t)+h*cos(d);
    ypos = (a-b)*sin(t)+h*sin(d);
    
    stroke(i-1,360,360);
    line(centerX+oxpos, centerY+oypos, centerX+xpos, centerY+ypos);
  }


 
  function mouseClicked(){
  sound.stop();
}

}

// function mousePressed() {
//   save("spiro_big_"+a+"_"+b+"_"+h+".png");
// }