var _ = require('lodash');

function totalOrders(orders) {
  var groupedOrders = _.groupBy(orders, 'article');
  console.log(groupedOrders);

  var reducedQ = _.reduce(groupedOrders['1'], function(result, order) {
    return result.quantity + order.quantity;

  });

  console.log(reducedQ);
}


var test = [ { article: 1, quantity: 4 },
             { article: 2, quantity: 2 },
             { article: 1, quantity: 5 } ];

totalOrders(test);

module.exports = totalOrders;
