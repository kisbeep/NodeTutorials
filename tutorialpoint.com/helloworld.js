/* "Hello World" program in node.js */

// Imports
var http = require("http");

// HTTP Server
http.createServer(function (request, response) {

	// Send the HTTP header
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// Send the response body as "Hello World"
	response.end('Hello World\n');

}).listen(8081);

// Log the address
console.log('Server running at http://127.0.0.1:8081/');