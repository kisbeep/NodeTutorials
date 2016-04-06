var http = require('http');

var options = {
	host: 'localhost',
	port: '8081',
	path: '/index.htm'
};

// Callback to deal with response
var callback = function (response) {

	var body = '';
	response.on('data', function (data) {
		// Continuously update stream with data
		body += data;
	});

	response.on('end', function () {
		// All data received
		console.log(body);
	});
}

// Make request to server
var req = http.request(options, callback);
req.end();