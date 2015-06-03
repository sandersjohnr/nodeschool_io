var uniq = require('uniq')

var input = prompt('Please enter a string: ');
input = input.split(',');
input = uniq(input);

console.log(input);