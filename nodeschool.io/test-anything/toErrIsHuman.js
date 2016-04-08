var test = require('tape');
var feedCat = require(process.argv[2]);

test('feedCat', function (t) {

	t.plan(2);
	t.equal(feedCat('beef'), 'yum', 'cat fed ok');
//	t.throws(feedCat.bind(null, 'chocolate'));
	t.throws( function () {
		feedCat('chocolate');
	});

});