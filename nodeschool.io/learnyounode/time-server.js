var net = require('net');
var strftime = require('strftime');

var netServer = net.createServer ( function (socket) {

	socket.write(strftime('%F %H:%M'));
	socket.end();

});
netServer.listen(process.argv[2]);