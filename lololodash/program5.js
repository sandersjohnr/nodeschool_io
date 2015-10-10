/*
#### Example

    var users = [
      { 'user': 'barney',  'age': 36 },
      { 'user': 'fred',    'age': 40 },
      { 'user': 'pebbles', 'age': 1 }
    ];

    var youngest = _.chain(users)
      .sortBy('age')
      .map(function(chr) {
        return chr.user + ' is ' + chr.age;
      })
      .first()
      .value();

    // → 'pebbles is 1'

-------------------------------------------------------------------------------

## Your Mission

We have a list of words that we want to modify.

    ['Test', 'Hello', 'World', 'Node', 'JavaScript']

We want to modify each word so that they are all appended with the word Chained,
converted to uppercase, and sorted by alphabetical order. The result should look like this:

    ['HELLOCHAINED', 'JAVASCRIPTCHAINED', 'NODECHAINED', 'TESTCHAINED', 'WORLDCHAINED']
*/

var _ = require('lodash');

var chainer = function(list) {
  var result = _.chain(list)
    .map(function(item) {
      return item.toUpperCase() + "CHAINED";
    })
    .sort()
    .value()

  return result;
};



module.exports = chainer;
