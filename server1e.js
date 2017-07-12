var http = require('http');
var fs = require("fs");
var options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt')
};//Requires a trusted certificate for HTTPS

http.createServer(options, function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('server1a: Hello World\n');
}).listen(443);//Use a specific port (443)

console.log('Server running at http://localhost:8000/');
