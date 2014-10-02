//Menu Interface

var Menu = function() {
  this.brush = 0.9;
  this.distance = 0.6;
  this.chance = 0.4;
  this.displayDots = false;
};

window.onload = function() {
  var text = new Menu();
  var gui = new dat.GUI();
  gui.add(text, 'brush', -10, 10);
  gui.add(text, 'distance', -5, 5);
  gui.add(text, 'chance', -5, 5);
  gui.add(text, 'displayDots');
};