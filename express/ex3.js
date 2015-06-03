var express = require('express');
var path = require('path');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(process.argv[3]/* || path.join(__dirname, 'public')*/));

app.set('views', /*process.argv[3]*/ path.join(__dirname, 'templates'));
app.set('view engine','jade');

app.get('/home', function (req,res) {
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);


