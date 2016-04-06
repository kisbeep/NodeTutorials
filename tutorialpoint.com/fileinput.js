var fs = require("fs");

// Blocking Code Example
//var data = fs.readFileSync('input.txt');
//console.log(data.toString());
//console.log("Program Ended");

// Non-Blocking Code Example
fs.readFile('input.txt', function(err, data) {
	if (err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("Program Ended");
