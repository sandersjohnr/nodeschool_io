var _ = require('lodash');

function commentSort(list) {
  var commentNums = [];
  var userSort = _.groupBy(list, 'username');
  _.forEach(userSort, function(commentList, user) {
    commentNums.push({
      username: user,
      comment_count: _.size(commentList)
    })

  });

  return _.sortBy(commentNums, 'comment_count').reverse();

}
var test =
[ { "username": "tim",
"comment": "when you have new workshoppers?" },
{ "username": "cat_lover",
"comment": "wtf? where are all the cats gone?" },
{ "username": "max",
"comment": "where have you been on friday? we missed you!" },
{ "username": "max",
"comment": "Do dont anwer anymore - why?" },
{ "username": "cat_lover",
"comment": "MORE cats!!!" },
{ "username": "max",
"comment": "i really love your site" }];
console.log(commentSort(test));
module.exports = commentSort;
