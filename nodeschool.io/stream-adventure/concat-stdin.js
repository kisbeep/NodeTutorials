var concat = require('concat-stream');

var concatStream = concat(gotStream);
function gotStream(stream) {
	console.log(stream.toString().split("").reverse().join(""));
}

process.stdin.pipe(concatStream);