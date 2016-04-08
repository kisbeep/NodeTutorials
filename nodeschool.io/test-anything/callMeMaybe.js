var test = require('tape');
var rc = require(process.argv[2]);

test('repeatCallback', function (t) {

	t.plan(3);
	rc(3,function () {
		t.pass('callback called');
	});

});