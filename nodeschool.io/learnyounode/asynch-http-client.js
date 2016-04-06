var http = require('http');

var results = [];
var count = 0;

function printResults() {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

function httpGet (index) {

	http.get(process.argv[2 + index], function (response) {
		response.setEncoding('utf8');
		var str = '';
		response.on('error', console.error);
		response.on('data', function (data) {
			str += data;
		});
		response.on('end', function (data) {
			results[index] = str;
			count++;

			if (count == 3) {
				printResults();
			}
		});
	});
}

for (var i = 0; i < 3 ; i++) {
	httpGet(i);
}