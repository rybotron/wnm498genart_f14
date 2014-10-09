var p5lexusSystem;
var sound;
var amp;

function preload(){
  soundFormats('mp3', 'ogg');
  sound = loadSound('audio/real.mp3');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	p5lexusSystem = new P5lexus(10);

	amp = new p5.Amplitude(.1); // Adding a number between 0.0 and .999 will smooth the amplitude reading


	for( var i = 0; i < 30; i++ ){
		p5lexusSystem.addParticle( undefined, undefined, 20, undefined );
	}

	sound.play(); 
}

function draw() {

	var peaks = sound.getPeaks();

	background(255);
		
	p5lexusSystem.run();

	// frameCount();
    //p5lexusSystem.addParticle();
}


/******************************* 	
	Plexus-like system 
	A system of paritcles with connections based on distance from one another
*******************************/

function P5lexus( connectWeight, connectColor ){
	this.particles = new Array();
	this.connect = true;
	this.connectDist = 400;
	this.connectWeight = connectWeight || 5;
	this.connectColor = connectColor || [90, 180, 240, 255];
}

P5lexus.prototype.addParticle = function( location, velocity, diameter, pColor ){
	this.particles.push( new Particle( location, velocity, diameter, color(0) ));
}

P5lexus.prototype.removeParticle = function(){
	this.particles.pop();
}



P5lexus.prototype.connectParticles = function(){

	for( var i = 0; i < this.particles.length; i++){
		for ( var j = 0; j < this.particles.length; j++ ){

			var d = this.particles[i].location.dist( this.particles[j].location );

			if ( i > 0 && i < this.particles.length &&  d < this.connectDist ){


				stroke( this.connectColor, map( d, 0, this.connectDist, 255, 0 ));
				// stroke( amp.getLevel*100 );
				// sound.rate((this.connectDist/2000)+1);

				strokeWeight( map( d, 0, this.connectDist, this.connectWeight, 0));
				strokeCap(ROUND);

				// sound.rate((mouseX/800)+1);

				// beginShape();
				// vertex(this.particles[i].location.x, this.particles[i].location.y);
				// vertex(this.particles[j].location.x, this.particles[j].location.y);
				// endShape();

				line( this.particles[i].location.x, this.particles[i].location.y, this.particles[j].location.x, this.particles[j].location.y );
			}
		}
	}
}

P5lexus.prototype.run = function(){
	
	//DRAW LINE BEFORE DISPLAY ELLIPSE
	if( this.connect ){
		this.connectParticles();
		isConnected = true;
	} 
	for( var i = 0; i < this.particles.length; i++){
		this.particles[i].update();
		this.particles[i].display();
	}
}


/******************************* 	
	Particle Class
*******************************/

function Particle( location, velocity, diameter, pColor ){
	this.location = location || createVector(random(width+500), height/2);
	// this.velocity = velocity || createVector(random(-5, 5), random(-5, 5));
	this.velocity = velocity || createVector(-20, 0);
	this.diameter = diameter || 15;
	this.color = pColor || [240, 90, 180, 255];
}

Particle.prototype.update = function(){
	this.checkEdges();
	this.location.add(this.velocity);
	this.location.add(createVector(random(-amp.getLevel()*10,amp.getLevel()*10), random(-amp.getLevel()*80,amp.getLevel()*80)));
	// this.location.add(createVector(noise(amp.getLevel()*40,amp.getLevel()*40), random(-amp.getLevel()*40,amp.getLevel()*40)));

}

Particle.prototype.display = function(){
	noStroke();
	fill(this.color);
	// ellipse( this.location.x, this.location.y, this.diameter, this.diameter);
}

Particle.prototype.checkEdges = function(){

	//BUONCE EDGES
	// if( this.location.x > windowWidth-this.diameter/2 || this.location.x < 0 + this.diameter/2 ){
	// 	this.velocity.x *= -1;	// }

	// if( this.location.y > windowHeight-this.diameter/2 || this.location.y < 0 + this.diameter/2 ){
	// 	this.velocity.y *= -1;
	// }

	//INFINITE EDGES
	// if( this.location.x > windowWidth+this.diameter/2){
	// 	this.location.x = 0 + this.diameter;
	// }
	if(this.location.x < 0 - this.diameter*5 ) {
		this.location.x = windowWidth + this.diameter*5;
	}
	// if( this.location.y > windowHeight+this.diameter/2){
	// 	this.location.y = 0 + this.diameter*10;
	// }
	// if( this.location.y < 0 + this.diameter/2 ){
	// 	this.location.y = windowHeight - this.diameter*10;
	// }

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    p5lexusSystem.addParticle();
  } else if (keyCode === DOWN_ARROW) {
    p5lexusSystem.removeParticle();
  }
}