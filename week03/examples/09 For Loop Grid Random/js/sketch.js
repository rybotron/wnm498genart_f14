// Academy of Art
// WNM 498 Generative Art & Creative exitCode

// Ryan Berkey
// ryan@rybotron.com

// Ported and updated from Processing by Rybotron
//
// P_2_1_2_01.pde
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

/**
 * Changing size and position of circles in a grid
 * 	 
 * MOUSE
 * position x          : circle position
 * position y          : circle size
 * left click          : random position
 */



var tileCount = 20,
	circleAlpha = 180,
	actRandomSeed = 1, // Try changing to 0
	circleColor;


function setup(){
	createCanvas( windowWidth, windowHeight );
	circleColor = color(10, 200, 180);
}

function draw() {

	background(255);
	translate( width / tileCount / 2, height / tileCount / 2 );
	noFill();

	randomSeed( actRandomSeed );

	stroke( circleColor, 50 );
	strokeWeight( mouseY / 60 );

	for ( var gridY = 0; gridY < tileCount; gridY++ ) {
		for ( var gridX = 0; gridX < tileCount; gridX++ ) {

			var posX = width / tileCount * gridX;
			var posY = height / tileCount * gridY;

			var shiftX = random( -mouseX, mouseX );
			var shiftY = random( -mouseX, mouseX );

		  ellipse( posX + shiftX, posY + shiftY, mouseY / 15, mouseY / 15);
		}
	}
}
  
function mousePressed() {
  actRandomSeed = random(1);
}

