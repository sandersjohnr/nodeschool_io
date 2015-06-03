module.exports = function (commaString) {
  var uniq = require('uniq');
  var uniq_array = uniq(commaString.split(','));
  return uniq_array;
}