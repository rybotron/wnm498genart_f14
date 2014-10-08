var canvas = document.getElementById("canvas-fluid");
canvas.addEventListener('mousemove', update, false);

var field = new FluidField(canvas);
var display = new FluidDisplay(field);

var start = new Date(); 
var initial = new Date(); // very beginning
var frames = 0; 

var time = 0; // time since very beginning
var offset = 0;
var interval = 5;
var running = false;

var n = 72000; // number of particles
var life = 1000; // lifetime of particles 
var px = new Float32Array(n); // x coordinate of particles
var py = new Float32Array(n); // y coordinate of particles
var pc = new Float32Array(n); // color of particle 
var pl = new Int16Array(n);  // age of particle

var showVelocity = false;
var showParticles = true;

var theta = 0;
var velocity = 2;
var radius = 8;

var mx = 0; // mouse coordinates
var my = 0;

function update(event) {
    event = event || window.event;
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    x = x / canvas.width / 1.5;
    y = y / canvas.height / 1.5;
    x = Math.floor(x * field.width);
    y = Math.floor(y * field.height);
    var dx = x - mx;
    var dy = y - my;
    mx = x;
    my = y;
    var v = 5;
    var vx = field.getXVelocity(x, y) + v * dx;
    var vy = field.getYVelocity(x, y) + v * dy;
    field.setVelocity(x, y, vx, vy);
}


function resetParticle(i) {
    px[i] = Math.random() * field.width;
    py[i] = Math.random() * field.height;
    var t = i / n * 0.3 + 0.5;
    pc[i] = t + offset;
    pc[i] -= Math.floor(pc[i]);
    pl[i] = life;
}

function updateFrame() {
  
  requestAnimationFrame(updateFrame);

  var end = new Date;
  time = end - initial;
  offset = time * 0.0001;

  field.update();  // updateVelocity

  for (var i = 0; i < n; i++) {
    var jitter = (1 - pl[i] / life);
    var vx = 10 * field.getXVelocity(px[i], py[i]);
    var vy = 10 * field.getYVelocity(px[i], py[i]);
    px[i] += vx + (Math.random() - 0.5) * jitter;
    py[i] += vy + (Math.random() - 0.5) * jitter;
    pl[i]--;
    if (pl[i] < 1 || px[i] < 1 || px[i] > field.width || py[i] < 1 || py[i] > field.height - 1) {
      resetParticle(i);
    }
  }
  
  display.clear();
  
  if (showParticles)
    display.renderParticles(field, px, py, pc, pl);
  
  if (showVelocity)
    display.renderVelocityField(field);

}

window.onload = function() {
  
  for (var i = 0; i < n; i++) {
    resetParticle(i);
    pl[i] = Math.floor(Math.random() * life);
  }

  requestAnimationFrame(updateFrame);
}