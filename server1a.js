var http = require('http');

http.createServer(function (request, response) {
    // send http header
    // HTTP state value: 200 : OK
    // content type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    // send response data "Hello World"
    response.end('server1a: Hello World\n');
}).listen(8000);

console.log('Server running at http://localhost:8000/');
