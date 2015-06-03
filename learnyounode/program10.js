// Program10.js
var net = require('net');
var server = net.createServer(function (socket) {
  console.log('server created')
});
server.listen(8000, 
  function() {
    console.log("server be listnin")
  });
