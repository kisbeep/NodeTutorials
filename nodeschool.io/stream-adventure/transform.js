var t2 = require('through2');
var stream = t2(write, end);

function write (buffer, encoding, next) {
	this.push( buffer.toString().toUpperCase() );
	next();
}

function end (done) {
	done();
}

process.stdin.pipe(stream).pipe(process.stdout);
