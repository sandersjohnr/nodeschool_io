var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req,res) {
  var bkwds = req.body.str.split('').reverse().join('');
  res.send(bkwds);
});


app.listen(process.argv[2]);


