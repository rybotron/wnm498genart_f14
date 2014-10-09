
var renderer, scene, camera, light;
var mesh;
var	gui;
var riftEffect;

var gridCTRL = {
	walls: 1,
	rotation: false,
	speed: 1,
	size: 2.6
}

var material;


function preload(){
  background(255,0,0);
  sound = loadSound('assets/zdarlight_short.mp3');
}

function setup() {

	//remove loading screen
	loaderObj.style.display = "none";
	// document.body.style.cursor = "none";
  	cl.hide();
	noCanvas();

	sound.play();
  	fft = new p5.FFT();

	renderer = new THREE.WebGLRenderer( {antialias: false });
	renderer.setSize( windowWidth, windowHeight );
	document.body.appendChild( renderer.domElement );

	effect = new THREE.OculusRiftEffect(renderer, {
    	worldScale: 2
 	});

 	effect.setSize(windowWidth, windowHeight);

  	renderer.shadowMapEnabled = true;


	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 70, windowHeight / windowWidth, 1, 1300 );
	camera.aspect = windowWidth / windowHeight;

	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 500;
	camera.updateProjectionMatrix();
	

	light = new THREE.PointLight();
	light.position.set(150, 400, 1000);
	scene.add( light );

	gui = new dat.GUI();
	gui.add(gridCTRL, "walls", 1, 4);
	gui.add(gridCTRL, "rotation");
	gui.add(gridCTRL, "speed", 0,200);
	gui.add(gridCTRL, "size", 1,10);


	//STARS
	var particleCount = 400,
	    particles = new THREE.Geometry(),
	    pMaterial = new THREE.PointCloudMaterial({ color: 0xFFFFFF, size: 2 });

	for (var p = 0; p < particleCount; p++) {
		var pX = Math.random() * 2000 - 1000,
		    pY = Math.random() * 2000 - 1000,
		    pZ = Math.random() * 2000 - 1000,
		    particle = new THREE.Vector3(pX, pY, pZ);

		particles.vertices.push(particle);
	}

	var stars = new THREE.PointCloud( particles, pMaterial);
	scene.add(stars);


	//creating the surface
	group = new THREE.Object3D();
	group1 = new THREE.Object3D();
	group2 = new THREE.Object3D();
	group3 = new THREE.Object3D();

	gobalGroup = new THREE.Object3D();


	// var geometry = new THREE.SphereGeometry(30, 31, 31);
	var geometry = new THREE.BoxGeometry(20, 20, 20);

	var color = new THREE.Color(1,1,1);

	for(i=0;i<=31;i++){
		for(j=0;j<=31;j++){
			var location = i*i +j;
		
			var color = new THREE.Color(0,0,0);
			var material = new THREE.MeshPhongMaterial( { color:color });

			var geo = new THREE.Mesh( geometry, material );
			geo.position.set( j * 24-373, i * 34-373, 0);

			  // geo.castShadow = true;
			  // geo.receiveShadow = true;

			group.add( geo );
		}
	}

	for(i=0;i<=31;i++){
		for(j=0;j<=31;j++){
			var location = i*i +j;

			var color = new THREE.Color(0,0,0);
			var material = new THREE.MeshPhongMaterial( { color:color });

			var geo = new THREE.Mesh( geometry, material );
			geo.position.set( j * 24-373, i * 34-373, 0);
			group1.add( geo );
		}
	}

	for(i=0;i<=31;i++){
		for(j=0;j<=31;j++){
			var location = i*i +j;

			var color = new THREE.Color(0,0,0);
			var material = new THREE.MeshPhongMaterial( { color:color });

			var geo = new THREE.Mesh( geometry, material );
			geo.position.set( j * 24-373, i * 34-373, 0);
			group2.add( geo );
		}
	}

	for(i=0;i<=31;i++){
		for(j=0;j<=31;j++){
			var location = i*i +j;

			var color = new THREE.Color(0,0,0);
			var material = new THREE.MeshPhongMaterial( { color:color });

			var geo = new THREE.Mesh( geometry, material );
			geo.position.set( j * 24-373, i * 34-373, 0);
			group3.add( geo );
		}
	}

}
 
function draw() {

	var spectrum = fft.analyze(); 

	group.position.y = -386;
	group.rotation.z = radians(180);
	group.rotation.x = radians(-90+gridCTRL.rotation);	

	group1.position.y = 386;
	group1.rotation.x = radians(90+gridCTRL.rotation);	

	group2.position.x = 386;
	group2.rotation.y = radians(270+gridCTRL.rotation);
	group2.rotation.z = radians(270);

	group3.position.x = -386;
	group3.rotation.y = radians(90+gridCTRL.rotation);
	group3.rotation.z = radians(90);



	for (var i = 0; i< spectrum.length; i++){

		var cube = group.children[i];
		var cube1 = group1.children[i];
		var cube2 = group2.children[i];
		var cube3 = group3.children[i];


    	var specSize = spectrum[i];
    	var x = map(spectrum[i], 0, 1000, 0.0, 1.0);

    	cube.material.color.setHSL( i/x/4000, x*20, x/2 );
    	cube1.material.color.setHSL( i/x/4000, x*20, x/2 );
    	cube2.material.color.setHSL( i/x/4000, x*20, x/2 );
    	cube3.material.color.setHSL( i/x/4000, x*20, x/2 );

    	//four different colors
    	// cube.material.color.setRGB( x*2, x*2, x/i/600 );
    	// cube1.material.color.setRGB( x*2, x/i/600, x*2 );
    	// cube2.material.color.setRGB( x/i/600, x*2, x*2 );
    	// cube3.material.color.setRGB( x/i/600, x/i/600, x*2 );

		if(group.children[i].position.y>300) {
			group.children[i].position.y =  group.children[i].position.y -1090;
			group1.children[i].position.y =  group1.children[i].position.y -1090;
			group2.children[i].position.y =  group2.children[i].position.y -1090;
			group3.children[i].position.y =  group3.children[i].position.y -1090;
		}

		// cube.position.y =  cube.position.y+ 20 - specSize/30;
		// cube1.position.y =  cube1.position.y+ 20 - specSize/30;
		// cube2.position.y =  cube2.position.y+ 20 - specSize/30;
		// cube3.position.y =  cube3.position.y+ 20 - specSize/30;


		// cube.position.y =  cube.position.y + specSize/10;
		// cube1.position.y =  cube1.position.y + specSize/10;
		// cube2.position.y =  cube2.position.y + specSize/10;
		// cube3.position.y =  cube3.position.y + specSize/10;

		cube.position.y =  cube.position.y + gridCTRL.speed;
		cube1.position.y =  cube1.position.y + gridCTRL.speed;
		cube2.position.y =  cube2.position.y + gridCTRL.speed;
		cube3.position.y =  cube3.position.y + gridCTRL.speed;

		if(gridCTRL.rotation) {
			gobalGroup.rotation.z = gobalGroup.rotation.z+x/1500;
		} else {
			gobalGroup.rotation.z = 0;
		}

		cube.scale.z = specSize/gridCTRL.size/10;
		cube.position.z = specSize/gridCTRL.size;

		cube1.scale.z = specSize/gridCTRL.size/10;
		cube1.position.z = specSize/gridCTRL.size;

		cube2.scale.z = specSize/gridCTRL.size/10;
		cube2.position.z = specSize/gridCTRL.size;

		cube3.scale.z = specSize/gridCTRL.size/10;
		cube3.position.z = specSize/gridCTRL.size;
	}

	if(gridCTRL.walls <= 1.9) {
		gobalGroup.add( group );
		gobalGroup.remove( group1 );
		gobalGroup.remove( group2 );
		gobalGroup.remove( group3 );
	} else if (gridCTRL.walls <= 2.9) {
		gobalGroup.add( group );
		gobalGroup.add( group1 );
		gobalGroup.remove( group2 );
		gobalGroup.remove( group3 );
	} else if (gridCTRL.walls <= 3.9) {
		gobalGroup.add( group );
		gobalGroup.add( group1 );
		gobalGroup.add( group2 );
		gobalGroup.remove( group3 );
	} else if (gridCTRL.walls == 4) {
		gobalGroup.add( group );
		gobalGroup.add( group1 );
		gobalGroup.add( group2 );
		gobalGroup.add( group3 );
	}

	scene.add( gobalGroup );


	camera.position.set(mouseX/6-160,-mouseY/6+120,500);
	camera.lookAt(new THREE.Vector3(mouseX/6-168,-mouseY/4+145,0));

	// group.rotation.z = radians(gridCTRL.rotation);
	// group.rotation.z = radians(frameCount/4);


	renderer.render( scene, camera );
    // effect.render(scene, camera);

}

function keyTyped() {
  if (key === 'f' || key === 'F') {
	  	var fs = fullscreen();
	    fullscreen(!fs);  
	} else if (key === 'b') {

  	}
}

function windowResized() {
	camera.aspect = windowWidth / windowHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( windowWidth, windowHeight );
	// effect.setSize( windowWidth, windowHeight );

}