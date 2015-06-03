var express = require('express');
var crypto = require('crypto');
var app = express();
var bodyparser = require('body-parser');

app.get('/search', function (req, res) {
   res.send(req.query);
});

app.listen(process.argv[2]);
