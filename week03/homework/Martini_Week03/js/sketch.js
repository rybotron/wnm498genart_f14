
var renderer, scene, camera, light;
var mesh;
var	gui;

var gridCTRL = {
	rotation: 180,
}

var material;


function preload(){
  background(255,0,0);
  sound = loadSound('assets/zdarlight_short.mp3');
}

function setup() {

	//remove loading screen
	loaderObj.style.display = "none";
  	cl.hide();
	noCanvas();

	sound.play();
  	fft = new p5.FFT();

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( windowWidth, windowHeight );
	document.body.appendChild( renderer.domElement );

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 70, windowHeight / windowWidth, 1, 2000 );
	camera.aspect = windowWidth / windowHeight;
	camera.position.set(0,350,800);

	camera.position.y = 350;
	camera.position.z = 800;
	camera.updateProjectionMatrix();
	

	light = new THREE.PointLight();
	light.position.set(150, 800, 500);
	scene.add( light );

	gui = new dat.GUI();
	gui.add(gridCTRL, "rotation", 90, 270);


	//STARS
	var particleCount = 400,
	    particles = new THREE.Geometry(),
	    pMaterial = new THREE.PointCloudMaterial({ color: 0xFFFFFF, size: 10 });

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
	// var geometry = new THREE.SphereGeometry(10, 31, 31);
	var geometry = new THREE.BoxGeometry(20, 20, 20);

	var color = new THREE.Color("rgb(255,0,0)");
	material = new THREE.MeshPhongMaterial( { color:color} );

	for(i=0;i<=31;i++){
		for(j=0;j<=31;j++){
			var location = i*i +j;

			var geo = new THREE.Mesh( geometry, material );
			geo.position.set( j * 24-373, i * 24-373, 0);
			group.add( geo );
		}
	}

	scene.add( group );	

}
 
function draw() {

	var spectrum = fft.analyze(); 

	group.position.y = 150;
	group.rotation.x = radians(-90);	

	for (var i = 0; i< spectrum.length; i++){

		var cube = group.children[i];
    	var specSize = spectrum[i];
    	var x = map(spectrum[i], 0, 1000, 0, 1);

    	cube.material.color.setRGB( i/800, x, i/200 );
		cube.scale.z = specSize/40;	
		cube.position.z = specSize/4;	
	}

	camera.lookAt(new THREE.Vector3(mouseX/6-130,-mouseY/4+400,0));

	// group.rotation.z = radians(gridCTRL.rotation);
	group.rotation.z = radians(frameCount/4);


	renderer.render( scene, camera );

}

function mouseClicked(){
	var fs = fullscreen();
    fullscreen(!fs);
}

function windowResized() {
	camera.aspect = windowWidth / windowHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( windowWidth, windowHeight );
}