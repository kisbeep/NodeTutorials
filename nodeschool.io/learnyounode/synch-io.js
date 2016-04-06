var fs = require('fs');

var data = fs.readFileSync(process.argv[2]).toString();
var lines = data.split('\n');

//console.log(data);
//console.log(lines);
console.log(lines.length - 1);

//console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1);