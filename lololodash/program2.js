var _ = require('lodash');

var worker = function(list) {
  return _.sortBy(list, 'quantity').reverse();



};

// var test =    [
//         { id: 22, username: "martin", active: true},
//         { id: 23, username: "max",    active: false},
//         { id: 24, username: "linda",  active: false}
//     ];


// console.log(worker(test));
module.exports = worker;
