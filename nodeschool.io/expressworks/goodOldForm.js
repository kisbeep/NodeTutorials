var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded( {extended: false} ));

// receives 'str' from form and returns the value reversed
// <form><input name="str"/></form>
app.post('/form', function (req, res) {
	res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);