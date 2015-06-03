var http = require('http');
var bl   = require('bl');
var results = [];
var count = 0;

function httpGet (index) {
  http.get(process.argv[2 + index], function (res) {
    res.setEncoding('utf8');
    res.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);
      data = data.toString();
      results[index] = data;
      count++;
      if (count == 3) {
        for (var i = 0; i < 3; i++)
          console.log(results[i])
      };
    }));
  });

};

for (var i =0; i < 3; i++)
  httpGet(i);


/*
// My version --> converts it to SYNC
//----------------
http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function(err,data) {
    if (err)
      return console.error(err);
    var dataOne = data.toString();

    http.get(process.argv[3], function(response) {
      response.setEncoding('utf8');
      response.pipe(bl(function(err,data){
        if (err)
          return console.error(err);
        var dataTwo = data.toString();

        http.get(process.argv[4], function(response) {
          response.setEncoding('utf8');
          response.pipe(bl(function(err,data){
            if(err)
              return console.error(err);
            var dataThree = data.toString();

            console.log(dataOne);
            console.log(dataTwo);
            console.log(dataThree);
          }))
        })
      }))
    })
  }));
});
*/
