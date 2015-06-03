var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);
var buff_array = buff.toString().split('\n');
console.log(buff_array.length - 1);