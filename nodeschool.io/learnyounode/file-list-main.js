var fl = require('./file-list-module.js');

fl (process.argv[2], process.argv[3], function (err, files) {
	if (err) {
		return console.log("ERROR", err);
	} else {
		files.forEach(function (file) {
			console.log(file);
		})
	}
});