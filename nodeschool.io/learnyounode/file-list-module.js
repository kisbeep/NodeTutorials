var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback)  {

	fs.readdir(dir, function (err, list) {
		if (err) {
			return callback(err);
		} else {

/*			OFFICIAL SOLUTION
			list = list.filter( function (file) {
				return path.extname(file) === '.' + ext;
			});
			return callback(null, list);
*/

			var files = [];
			list.forEach( function(file) {
				if (path.extname(file) === "." + ext) {
					files.push(file);
				}
			})
			return callback(null, files);
		}
	})

};