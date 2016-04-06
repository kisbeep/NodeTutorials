var t2 = require('through2');
var split = require('split');
var i = 0;

process.stdin
	.pipe(split())
	.pipe(t2( function (line, enc, next) {
		i++;
		if (i % 2 ) {
			this.push(line.toString().toLowerCase() + '\n');
		} else {
			this.push(line.toString().toUpperCase() + '\n');
		}
		next();
	}))
	.pipe(process.stdout);

