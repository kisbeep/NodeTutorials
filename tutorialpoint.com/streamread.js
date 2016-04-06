var fs = require("fs");
var data = '';

// Create a readable stream & set encoding to UTF-8
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

// Handle stream events
readerStream.on('data', function(chunk) {
	data += chunk;
});

readerStream.on('end', function() {
	console.log(data);
});

readerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("Program Ended.");