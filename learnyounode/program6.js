var dirFilter = require('./dir_filter_ext');

function printFiles(err, data) {
  data.forEach(function(filename) {
    console.log(filename);
  });
}

// dirFilter(process.argv[2], process.argv[3], printFiles);


dirFilter(process.argv[2], process.argv[3], function(err, array) {
  if(err)
    return console.error('There was an error:', err);
  array.forEach(function(filename){
    console.log(filename);
  })
});


