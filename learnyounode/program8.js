var http = require('http');
var dataset = [];
var charnum = 0;

function setData(data) { 
  dataset.push(data);
  charnum += data.length;
};

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', setData);
  response.on('error', console.error);
  response.on('end', function(){
    console.log(charnum);
    console.log(dataset.join(''));});
});