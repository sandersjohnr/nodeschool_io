var fs = require('fs');
var path = require('path');

module.exports = function (dirname, extString, callback) {
  fs.readdir(dirname, function(err, data) {
    if (err) 
      return callback(err);
    // data.forEach(function(file) {
    // if (path.extname(file) == "." + extString)
    //   fileArray.push(file);
    // });
    data = data.filter(function(file){
      return path.extname(file) == '.' + extString;
    });
    callback(null, data);
  });
}
