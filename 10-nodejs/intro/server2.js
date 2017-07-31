var http = require('http');
var url = require('url');
var fs = require('fs');


var app = function(req, res) {
  // todo
  var path = url.parse(req.url).pathname; // '/' or '/about'

  if (path === '/about') {
    fs.readFile('about.html', 'utf-8', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();      
    })
  } else {
    res.writeHead(404);
    res.write('not found');
    res.end();
  }

}
var server = http.createServer( app );
server.listen(9000);

