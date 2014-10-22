var config = {
	rows: 1,
	columns: 5,
	spacing: 0,
	minsize: 20,
	maxsize: 300,
};

var music, amplitude, spheres = [];

function preload() {
	music = new p5.SoundFile('Moon behind the Tree.mp3', music);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	amplitude = new p5.Amplitude(0.2);

	for(var j = 0; j < config.rows; j++) {
		var row = [];
		spheres.push(row);
		for(var i = 0; i < config.columns; i++) {
			var sphere = new Sphere(width/(config.columns +1) + width/(config.columns + 1)*i, height/(config.rows +1) + height/(config.rows +1)*j);
			spheres[j].push(sphere);
		}
	}
}

function draw() {
	clear();

	for(var j = 0; j < config.rows; j++) {
		for(var i = 0; i < config.columns; i++) {
			spheres[j][i].update();
			spheres[j][i].show();
		}
	}
}

function music() {
	music.loop();
	console.log("Yes!");
}

var Sphere = function(x, y) {
	this.size = config.minsize;
	this.position = createVector(x, y);
};

Sphere.prototype.update = function() {
	var level = amplitude.getLevel();
	var size = map(level, 0, 1, config.minsize, config.maxsize);
	this.size = size;
};

Sphere.prototype.show = function() {
	fill(255);
	noStroke();
	ellipse(this.position.x, this.position.y, this.size, this.size);
};

function mouseClicked() {
	if(music.isPlaying()) {
		music.pause();
	} else {
		music.play();
	}
}
