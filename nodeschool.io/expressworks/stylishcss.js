var express = require('express');
var stylus = require('stylus');
var path = require('path');

var pubPath = path.join(__dirname, 'public');
var app = express();

app.use(express.static(pubPath));
app.use(stylus.middleware(pubPath));

app.listen(process.argv[2]);