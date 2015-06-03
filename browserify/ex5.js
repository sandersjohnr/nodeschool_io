var url         = require('url');
var querystring = require('querystring');

var addr = prompt();

var query = url.parse(addr).query;
var params = querystring.parse(query);
var resolvedUrl = url.resolve(addr, params.file);
console.log(resolvedUrl);

/*
var parsedUrl = url.parse(prompt());
console.log(url.resolve(parsedUrl.href, 
            querystring.parse(parsedUrl.query).file));

*/