var test = require('tape');
var fancify = require(process.argv[2]);

test('test fancify', function (t) {

	t.equal(fancify('hello'), '~*~hello~*~', 'simple string fail');
	t.equal(fancify('hello', true), '~*~HELLO~*~', 'upper case (true) string fail');
	t.equal(fancify('hello', false, '!'), '~!~hello~!~', 'character replace fail');
	t.end();

});