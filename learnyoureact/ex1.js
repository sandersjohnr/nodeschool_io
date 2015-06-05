var express           = require('express');
var expressReactViews = require('express-react-views');
var nodeJsx           = require('node-jsx');

nodeJsx.install();
var app = express();

app.set('port', (process.argv[2] || 3000));

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views'); 
app.engine('jsx', expressReactViews.createEngine());

// this is the data that becomes data.props
var data = [
    { title: 'Shopping', detail: process.argv[3] },
    { title: 'Hair cut', detail: process.argv[4] }
];

app.use('/', function(req, res) {
  res.render('index', { data: data });
});

app.listen(app.get('port'), function() {
  console.log('And away-ay-yayeee we go!');
});