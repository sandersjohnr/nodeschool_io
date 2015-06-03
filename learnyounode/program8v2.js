var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response){
  response.setEncoding('utf8');
  response.pipe(bl(function (err, data) {
    if (err) 
      return console.error(err);
    console.log(data.toString().length)
    console.log(data.toString())
  }));
});

/*
var http = require('http');
var dataset = [];

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) { dataset.push(data); });
  response.on('error', console.error);
  response.on('end', function(){
    console.log(dataset.join('').length);
    console.log(dataset.join(''));
  });
});
*/

