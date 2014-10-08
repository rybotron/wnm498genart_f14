
FluidField = function() {
	this.iterations = 20; 	// solver iterations
	this.dt = 0.1;			// timestep
	this.dens = null;		// density field
	this.dens_prev = null;
	this.u = null;			// velocity x field
	this.u_prev = null;
	this.v = null;			// velocity y field
	this.v_prev = null;
	this.width = 180;		// mesh size x
	this.height = 120;		// mesh size y
	this.rowSize;			// rowstride
	this.size;				// mesh points
	this.interpolate = true;// interpolate when setting/getting fields
	this.damp = 1;	    // velocity damping
	this.reset();
}

FluidField.prototype.reset = function() {
	this.rowSize = this.width + 2;
	this.size = (this.width + 2) * (this.height + 2);
	this.dens = new Float32Array(this.size);
	this.dens_prev = new Float32Array(this.size);
	this.u = new Float32Array(this.size);
	this.u_prev = new Float32Array(this.size);
	this.v = new Float32Array(this.size);
	this.v_prev = new Float32Array(this.size);
}

FluidField.prototype.setResolution = function(x, y) {
	this.width = x;
	this.height = y;
	this.reset();
}

FluidField.prototype.addFields = function (x, s, dt) {
	for (var i = 0; i < this.size; i++) {
		x[i] += s[i] * dt;
	}
}

FluidField.prototype.enforceBCs = function(b, x) {
	var width = this.width;
	var height = this.height;
	var rowSize = this.rowSize;
	if (b == 1) {
	    for (var i = 1; i <= width; i++) {
	        x[i] =  x[i + rowSize];
	        x[i + (height+1) * rowSize] = x[i + height * rowSize];
	    }
	    for (var j = 1; i <= height; i++) {
	        x[j * rowSize] = -x[1 + j * rowSize];
	        x[(width + 1) + j * rowSize] = -x[width + j * rowSize];
	    }
	} else if (b == 2) {
	    for (var i = 1; i <= width; i++) {
	        x[i] = -x[i + rowSize];
	        x[i + (height + 1) * rowSize] = -x[i + height * rowSize];
	    }
	    for (var j = 1; j <= height; j++) {
	        x[j * rowSize] =  x[1 + j * rowSize];
	        x[(width + 1) + j * rowSize] =  x[width + j * rowSize];
	    }
	} else {
	    for (var i = 1; i <= width; i++) {
	        x[i] =  x[i + rowSize];
	        x[i + (height + 1) * rowSize] = x[i + height * rowSize];
	    }
	    for (var j = 1; j <= height; j++) {
	        x[j * rowSize] =  x[1 + j * rowSize];
	        x[(width + 1) + j * rowSize] =  x[width + j * rowSize];
	    }
	}
    var maxEdge = (height + 1) * rowSize;
    x[0]                      = 0.5 * (x[1] + x[rowSize]);
    x[maxEdge]                = 0.5 * (x[1 + maxEdge] + x[height * rowSize]);
    x[(width+1)]         = 0.5 * (x[width] + x[(width + 1) + rowSize]);
    x[(width+1)+maxEdge] = 0.5 * (x[width + maxEdge] + x[(width + 1) + height * rowSize]);
}

FluidField.prototype.linSolve = function(b, x, x0, a, c) {
	var width = this.width;
	var height = this.height;
	var rowSize = this.rowSize;
	if (a == 0 && c == 1) {
		for (var j = 1; j <= height; j++) {
			var row = j * rowSize;
			++row;
			for (var i = 0; i < width; i++) {
				x[row] = x0[row];
				++row;
			}
		}
		this.enforceBCs(b, x);
	} else {
		var cinv = 1 / c;
		for (var k = 0; k < this.iterations; k++) {
			for (var j = 1; j <= height; j++) {
				var last = (j - 1) * rowSize;
				var current = j * rowSize;
				var next = (j + 1) * rowSize;
				var lastx = x[current];
				++current;
				for (var i = 1; i < width; i++) {
					lastx = x[current] = (x0[current] + a * (lastx + x[++current] + x[++last] + x[++next])) * cinv;
				}
			}
			this.enforceBCs(b, x);
		}
	}
}

FluidField.prototype.diffuse = function(b, x, x0) {
	// var a = 0.5;
	// this.linSolve(b, x, x0, a, 1 + 4 * a);
	this.linSolve(b, x, x0, 0, 1);
}

FluidField.prototype.linSolve2 = function(x, x0, y, y0, a, c) {
    if (a == 0 && c == 1) {
        for (var j = 1 ; j <= this.height; j++) {
            var current = j * this.rowSize;
            ++current;
            for (var i = 0; i < this.width; i++) {
                x[current] = x0[current];
                y[current] = y0[current];
                ++current;
            }
        }
        this.enforceBCs(1, x);
        this.enforceBCs(2, y);
    } else {
        var invC = 1 / c;
        for (var k = 0 ; k < this.iterations; k++) {
            for (var j=1 ; j <= this.height; j++) {
                var last = (j - 1) * this.rowSize;
                var current = j * this.rowSize;
                var next = (j + 1) * this.rowSize;
                var lastX = x[current];
                var lastY = y[current];
                ++current;
                for (var i = 1; i <= this.width; i++) {
                    lastX = x[current] = (x0[current] + a * (lastX + x[current] + x[last] + x[next])) * invC;
                    lastY = y[current] = (y0[current] + a * (lastY + y[++current] + y[++last] + y[++next])) * invC;
                }
            }
            this.enforceBCs(1, x);
            this.enforceBCs(2, y);
        }
    }
}

FluidField.prototype.diffuse2 = function(x, x0, y, y0, dt) {
	// var a = 0;
	// this.linSolve2(x, x0, y, y0, a, 1 + 4 * a);
	this.linSolve2(x, x0, y, y0, 0, 1);
}

FluidField.prototype.advect = function(b, d, d0, u, v, dt) {
	var rowSize = this.rowSize;
    var Wdt0 = this.dt * this.width;
    var Hdt0 = this.dt * this.height;
    var Wp5 = this.width + 0.5;
    var Hp5 = this.height + 0.5;
    for (var j = 1; j<= this.height; j++) {
        var pos = j * rowSize;
        for (var i = 1; i <= this.width; i++) {
            var x = i - Wdt0 * u[++pos]; 
            var y = j - Hdt0 * v[pos];
            if (x < 0.5)
                x = 0.5;
            else if (x > Wp5)
                x = Wp5;
            var i0 = x | 0;
            var i1 = i0 + 1;
            if (y < 0.5)
                y = 0.5;
            else if (y > Hp5)
                y = Hp5;
            var j0 = y | 0;
            var j1 = j0 + 1;
            var s1 = x - i0;
            var s0 = 1 - s1;
            var t1 = y - j0;
            var t0 = 1 - t1;
            var row1 = j0 * rowSize;
            var row2 = j1 * rowSize;
            d[pos] = s0 * (t0 * d0[i0 + row1] + t1 * d0[i0 + row2]) + s1 * (t0 * d0[i1 + row1] + t1 * d0[i1 + row2]);
        }
    }
    this.enforceBCs(b, d);
}

FluidField.prototype.project = function(u, v, p, div) {
	var width = this.width;
	var height = this.height;
	var rowSize = this.rowSize;
    var h = -0.5 / Math.sqrt(width * height);
    for (var j = 1 ; j <= height; j++ ) {
        var row = j * rowSize;
        var previousRow = (j - 1) * rowSize;
        var prevValue = row - 1;
        var currentRow = row;
        var nextValue = row + 1;
        var nextRow = (j + 1) * rowSize;
        for (var i = 1; i <= width; i++ ) {
            div[++currentRow] = h * (u[++nextValue] - u[++prevValue] + v[++nextRow] - v[++previousRow]);
            p[currentRow] = 0;
        }
    }
    this.enforceBCs(0, div);
    this.enforceBCs(0, p);
    
    this.linSolve(0, p, div, 1, 4 );
    var wScale = 0.5 * width;
    var hScale = 0.5 * height;
    for (var j = 1; j<= height; j++ ) {
        var prevPos = j * rowSize - 1;
        var currentPos = j * rowSize;
        var nextPos = j * rowSize + 1;
        var prevRow = (j - 1) * rowSize;
        var currentRow = j * rowSize;
        var nextRow = (j + 1) * rowSize;
        for (var i = 1; i<= width; i++) {
            u[++currentPos] -= wScale * (p[++nextPos] - p[++prevPos]);
            v[currentPos]   -= hScale * (p[++nextRow] - p[++prevRow]);
        }
    }
    this.enforceBCs(1, u);
    this.enforceBCs(2, v);
}

FluidField.prototype.densityStep = function(x, x0, u, v, dt) {
    this.addFields(x, x0, dt);
    this.diffuse(0, x0, x, dt);
    this.advect(0, x, x0, u, v, dt);
    for (var i = 0; i < this.size; i++) {
		x[i] *= 0.895;
	}
}

FluidField.prototype.velocityStep = function(u, v, u0, v0, dt) {
    this.addFields(u, u0, dt);
    this.addFields(v, v0, dt);
    var temp = u0; u0 = u; u = temp;
    var temp = v0; v0 = v; v = temp;
    this.diffuse2(u,u0,v,v0, dt);
    this.project(u, v, u0, v0);
    var temp = u0; u0 = u; u = temp; 
    var temp = v0; v0 = v; v = temp;
    this.advect(1, u, u0, u0, v0, dt);
    this.advect(2, v, v0, u0, v0, dt);
    this.project(u, v, u0, v0);
    for (var i = 0; i < this.size; i++) {
		u[i] *= this.damp;
		v[i] *= this.damp;
	}
}

FluidField.prototype.setDensity = function(x, y, d) {
	this.dens[(x + 1) + (y + 1) * this.rowSize] = d;
}

FluidField.prototype.getDensity = function(x, y) {
	return this.dens[(x + 1) + (y + 1) * this.rowSize];
}

FluidField.prototype.setVelocity = function(x, y, xv, yv) {
	this.u[(x + 1) + (y + 1) * this.rowSize] = xv;
	this.v[(x + 1) + (y + 1) * this.rowSize] = yv;
}

FluidField.prototype.getXVelocity = function(x, y) {
	if (this.interpolate) {
		var x_ = Math.floor(x);
		var y_ = Math.floor(y);
		var center = this.u[(x_ + 1) + (y_ + 1) * this.rowSize]; 
		var right = this.u[(x_ + 2) + (y_ + 1) * this.rowSize];
		var up = this.u[(x_ + 1) + (y_ + 2) * this.rowSize];
		var dx = x - x_;
		var dy = y - y_;
		return (center * dx + (1 - dx) * right + center * dy + (1 - dy) * up) / 2;
	}
	return this.u[(x + 1) + (y + 1) * this.rowSize];
}

FluidField.prototype.getYVelocity = function(x, y) {
	if (this.interpolate) {
		var x_ = Math.floor(x);
		var y_ = Math.floor(y);
		var center = this.v[(x_ + 1) + (y_ + 1) * this.rowSize]; 
		var right = this.v[(x_ + 2) + (y_ + 1) * this.rowSize];
		var up = this.v[(x_ + 1) + (y_ + 2) * this.rowSize];
		var dx = x - x_;
		var dy = y - y_;
		return (center * dx + (1 - dx) * right + center * dy + (1 - dy) * up) / 2;
	}
	return this.v[(x + 1) + (y + 1) * this.rowSize];
}

FluidField.prototype.update = function() {
	this.velocityStep(this.u, this.v, this.u_prev, this.v_prev, this.dt);
	// this.densityStep(this.dens, this.dens_prev, this.u, this.v, this.dt);
}
