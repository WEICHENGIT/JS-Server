var http = require('http');
var querystring = require('querystring');
var fs = require("fs");
var url = require('url');

fs.readFile("server1c.html", function (err, postHTML) {
  var history="";
  http.createServer(function (request, response) {
    var params = url.parse(request.url, true).query;
    var body = "";
    request.on('data', function (chunk) {
      body += chunk;
    });
    request.on('end', function () {
      body = querystring.parse(body);
      response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
      //test of XSS vulnerabilities:
      //in this case vulnerability is more severe than previous one,
      //because every time we update the user list, the vulnerabilities will occur once.
      //For example, by inserting js codes <script>alert('coucou');</script>,
      //every time we refresh the user list, the page will alert a pop-up window.
      response.write(postHTML);
      if(params.name){
        response.write("Bonjour, " + params.name);
      }
      else if(body.name) {
        history=history+", "+body.name;
        response.write("Bonjour "+body.name+", les utilisateurs suivants ont déjà visités cette page: " + history);
      }
      response.end();
    });
  }).listen(8000);
});
