var _ = require('lodash');

var worker = function(list) {
  _.forEach(list, function(item) {
    if (item.population > 1.0) {
      item.size = 'big';
    } else if (item.population > 0.5) {
      item.size = 'med';
    } else {
      item.size = 'small';
    }
  });

  return list;
};

// var test =
//   { Hamburg:    { population: 1.698 },
//         Strasbourg: { population: 0.272 },
//         Rome:       { population: 2.753 },
//         Dublin:     { population: 0.528 } };

module.exports = worker;
