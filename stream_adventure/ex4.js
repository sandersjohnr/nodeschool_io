var through = require('through2');
var stream = through(write, end);

function write(buffer, encoding, next) {
  var data = buffer.toString().toUpperCase().split('\\n');

  console.log(data);
  next();
  //this.push(buffer.toString().toUpper());
};

function end(done) {
  done();
};

process.stdin.pipe(stream).pipe(process.stdout);