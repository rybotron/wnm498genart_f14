// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//
// Two.js with p5.js


var two;
var stats;
var svgObject, svgTag, shape;
var moving = false;

function setup() { 
    noCanvas(); //p5.js call to specify the canvas to not load

    two = new Two({
      fullscreen: true,
      // type: Two.Types.svg || Two.Types.canvas || Two.Types.webgl
    });
    two.appendTo(document.body); // Append the two instance to the body of the document

    width = two.width;
    height = two.height;

    assets = document.getElementById("assets");
    svgObject = assets.children[1];
    svgTag = svgObject.contentDocument.getElementsByTagName("svg")[0];
    shape = two.interpret(svgTag);


    // Translate the enitre two.scene to the middle of the screen
    two.scene.translation.set( two.width / 2, two.height / 2);
    two.update();

    //Add stats to the DOM
    stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild( stats.domElement );

    two.bind("resize", function(){
        width = two.width;
        height = two.height;
        two.scene.translation.set( two.width / 2, two.height / 2 );
        two.update();
    });

    two.bind("update", function(){

        shape.scale = map(sin(frameCount / 30), -1, 1, 1, 4);
        shape.rotation += PI / 30;

        stats.update();
    }).play();

} 


// function draw() { 
    
//     // Instead we call two.update() that will update our instance of two and all of it's contents
//     shape.scale = map(sin(frameCount / 30), -1, 1, 1, 4);
//     shape.rotation += PI / 30;
//     two.update();
//     stats.update();
 
// }


 