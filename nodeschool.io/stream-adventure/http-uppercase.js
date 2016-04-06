var http = require('http');
var t2 = require('through2');

var stream = t2(write, end);

function write (buffer, encoding, next) {
	this.push( buffer.toString().toUpperCase() );
	next();
}

function end (done) {
	done();
}

var server = http.createServer( function(request, response) {
	if (request.method === 'POST') {
		request.pipe(stream).pipe(response);
	}

}).listen(process.argv[2]);