// Academy of Art
// WNM 498 Generative Art & Creative exitCode

// Ryan Berkey
// ryan@rybotron.com

// Based on example P_2_1_2_01.pde from:
// 
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Changing size and position of circles in a grid
//  	 
// MOUSE
// position x          : circle position
// position y          : circle size
// left click          : random position


var	gui;
var gridCTRL = {
	seed: 1,
	tileCountX: 20,
	tileCountY: 20,
	circleRGBA: [ 10, 200, 180, 150 ],
	randomness: 1
}

function setup(){
	createCanvas( windowWidth, windowHeight );
	gui = new dat.GUI();
	gui.add(gridCTRL, "seed", 0, 100);
	gui.add(gridCTRL, "randomness", 0, 1);
	gui.add(gridCTRL, "tileCountX", 1, 20);
	gui.add(gridCTRL, "tileCountY", 1, 20);
	gui.addColor(gridCTRL, "circleRGBA");
}

function draw() {

	background(255);
	translate( width / gridCTRL.tileCountX / 2, height / gridCTRL.tileCountY / 2 );
	noFill();

	randomSeed( gridCTRL.seed );

	stroke( gridCTRL.circleRGBA, gridCTRL.circleRGBA[3] );
	strokeWeight( mouseY / 60 + .25 );

	for ( var gridY = 0; gridY < gridCTRL.tileCountY; gridY++ ) {
		for ( var gridX = 0; gridX < gridCTRL.tileCountX; gridX++ ) {

			var posX = width / gridCTRL.tileCountX * gridX;
			var posY = height / gridCTRL.tileCountY * gridY;

			var shiftX = random( -mouseX * gridCTRL.randomness, mouseX * gridCTRL.randomness );
			var shiftY = random( -mouseX * gridCTRL.randomness, mouseX * gridCTRL.randomness );

		  ellipse( posX + shiftX, posY + shiftY, mouseY / 15 + 5, mouseY / 15 + 5);
		}
	}
}

