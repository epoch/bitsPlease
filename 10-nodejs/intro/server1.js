var http = require('http');

//   callback signature (request, response)
var app = function(request, response) {

  response.write('hello world');
  response.end();
}

//                                callback
var server = http.createServer( app );
server.listen(9000);

