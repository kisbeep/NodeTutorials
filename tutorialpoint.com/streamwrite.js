var fs = require("fs");
var data = 'Simple Easy Learning';

// Create a writer stream
var writerStream = fs.createWriteStream('output.txt');

// Write to the stream with UTF-8 encoding
writerStream.write(data, 'UTF8');

// Mark the end of the file
writerStream.end();

// Handle stream events
writerStream.on('finish', function() {
	console.log("Write Completed.");
});

writerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("Program Ended.");