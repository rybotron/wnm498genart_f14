
function Radial( radius, numVertices ){
    this.radius = radius || 100;
    this.numVertices = numVertices || 20;
    this.vertices = [];
}

Radial.prototype.update = function( time, scale ){
    var s = scale || 1;
    var xPos = this.radius * cos(TWO_PI * time) * s;
    var yPos = this.radius * sin(TWO_PI * time) * s;
    this.vertices.unshift( createVector( xPos, yPos) );

    if( this.vertices.length > this.numVertices ){
        this.vertices.pop();
    }
}

Radial.prototype.display = function(){
    beginShape();
    for (var i = 0; i < this.vertices.length; i++){
        vertex(this.vertices[i].x, this.vertices[i].y);
    }
    endShape();

}

Radial.prototype.changeRadius = function( radius ){
	this.radius = radius;
}

Radial.prototype.setLength = function( length ){
	var howMany = this.vertices.length - length;
	this.vertices.splice(length - 1, howMany);
	this.numVertices = length;
}