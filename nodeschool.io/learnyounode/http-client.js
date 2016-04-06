var http = require('http');

http.get(process.argv[2], function (response) {

/*  OFFICIAL SOLUTION
	response.setEncoding('utf8');
	response.on('data', console.log);
	response.on('error', console.error);
*/

	response.on('data', function (data) {
		console.log(data.toString());
	});

	response.on('end', function (data) {
		return;
	});

	response.on('error', function (err) {
		return console.log("ERROR", err);
	});
});