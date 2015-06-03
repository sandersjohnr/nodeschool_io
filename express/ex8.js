var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var fs = require('fs');

app.get('/books', function (req, res) {
  fs.readFile(process.argv[3], function (err,data) {
    if (err) return res.send(500);
    try {
      data = JSON.parse(data);
    } catch (err) {
      res.send(500);
    }
    res.json(data);
  });
    
});

app.listen(process.argv[2]);
