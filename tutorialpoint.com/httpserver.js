var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function(request, response) {

	var pathname = url.parse(request.url).pathname;
	console.log("Request for '" + pathname + "' received.");

	fs.readFile(pathname.substr(1), function (err, data) {

		if (err) {
			console.log(err);
			// HTTP Status: 404 Not Found
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			// HTTP Status: 200 OK
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data.toString());
		}

		// Send the response
		response.end();

	});

}).listen(8081);

console.log('HTTP Server running at http://127.0.0.1:8081/');