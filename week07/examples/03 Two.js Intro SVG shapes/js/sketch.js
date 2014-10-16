// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//
// Two.js with p5.js


var two;
var group;
var line, rectangle, circle, ellipse, curve, polygon;
var moving = false;

function setup() { 
    noCanvas(); //p5.js call to specify the canvas to not load


    two = new Two({
      fullscreen: true,
      // type: Two.Types.svg || Two.Types.canvas || Two.Types.webgl
    });
    two.appendTo(document.body); // Append the two instance to the body of the document

    /***************************************************************************************
        Because we did not load the p5.js canvas, nor did we specify it's dimensions,
        the default width and height is set to 100 and 100 respectively.
        Here we will override that with the size of the Two.js renderer size
    ***************************************************************************************/
    width = two.width;
    height = two.height;

    /**************************************************************************************
        Bind the "resize" event to the two instance when the window is resized 
    **************************************************************************************/    
    two.bind("resize", function(){
        width = two.width;
        height = two.height;
        two.scene.translation.set( two.width / 2, two.height / 2 );
        two.update();
    });


    /**************************************************************************************
        Drawing with Two.js
        In Two, shapes are objects that can be updated, translated, scaled, rotated, etc
    **************************************************************************************/

    // Create a shape group to that we will add each path to
    group = two.makeGroup();
    
    // Create a row with even column spacing
    var row = gridRow( 6 );
    var cellWidth = width / 6;

    // Line
    line = two.makeLine(row[0].x - cellWidth / 2, 0, row[0].x + cellWidth / 2, 0);
    line.linewidth = 5;
    line.stroke = "red"; // All valid css representations of color are accepted.
    group.add(line);

    // Rectangle
    rectangle = two.makeRectangle(row[1].x, 0, cellWidth, cellWidth );
    rectangle.fill = "orange";
    rectangle.opacity = 0.5;
    rectangle.linewidth = 5;
    group.add(rectangle);

    // Circle
    circle = two.makeCircle( row[2].x, 0, cellWidth / 2);
    circle.fill = "#FF6138"; // All valid css representations of color are accepted.
    circle.linewidth = 5;
    circle.noStroke();
    group.add(circle);

    // Ellipse
    ellipse = two.makeEllipse( row[3].x, 0, cellWidth / 2, cellWidth / 4 );
    ellipse.stroke = "#112233"; // All valid css representations of color are accepted.
    ellipse.linewidth = 10;
    ellipse.noFill();
    group.add(ellipse);

    // Curves
    // two.makeCurve takes two arguments
    // 1. array of Two.Anchor points and 2. boolean if the path is open or closed
    var a1 = new Two.Anchor( row[4].x - cellWidth / 2, row[4].y - cellWidth / 2);
    var a2 = new Two.Anchor( row[4].x + cellWidth / 2, 0);
    var a3 = new Two.Anchor( row[4].x - cellWidth / 2, row[4].y + cellWidth / 2);
    var curveAnchors = [a1, a2, a3];
    curve = two.makeCurve(curveAnchors, true);
    curve.linewidth = 10;
    curve.noFill();
    group.add(curve);

    // Polygons
    // two.makePolygon takes two arguments 
    // 1. array of Two.Anchor points and 2. boolean if the path is open or closed
    var polyAnchors = [];
    var resolution = 6;
    for (var i = 0; i < resolution; i++){
        var angle = TWO_PI / resolution;
        var x = row[5].x + cos( angle * i ) * cellWidth / 2;
        var y = row[5].y+ sin( angle * i ) * cellWidth / 2;
        polyAnchors.push( new Two.Anchor( x, y ) );
    }

    polygon = two.makePolygon(polyAnchors, false);
    polygon.fill = "purple"; // All valid css representations of color are accepted.
    group.add(polygon);

    // Translate the group by half of the cell width
    group.translation.x = cellWidth / 2;

    // Translate the enitre two.scene to the middle of the screen
    two.scene.translation.set( two.width / 2, two.height / 2);
    two.update();
} 


function draw() { 

    // Two.js shapes are objects with transform properties so we don't have to redraw them each frame
    line.rotation += .05;
    rectangle.scale = map( sin(frameCount / 10), -1, 1, .5, 1);
    circle.translation.x += map( cos(frameCount / 5 ), -1, 1, -1, 1 );
    ellipse
    
    // Instead we call two.update() that will update our instance of two and all of it's contents
    two.update();
 
}

function gridRow( cells, length ){
    var c = cells || 10;
    var l = length || width;
    var grid = [];
    var spacing = l / c;
    for( var i = 0; i < c; i ++ ){
        grid.push(createVector( i * spacing - width / 2, 0 ));
    }
    return grid;
}



 