var http = require('http');
var querystring = require('querystring');
var fs = require("fs");
var url = require('url');

fs.readFile("server1c.html", function (err, postHTML) {
  http.createServer(function (request, response) {
    var params = url.parse(request.url, true).query;// parse method is used to analyse the url
    var body = "";
    request.on('data', function (chunk) {
      body += chunk;
    });
    request.on('end', function () {
      body = querystring.parse(body);
      response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
      //test of XSS vulnerabilities:
      //inserting HTML codes will lead to the html page, instead of the source code;
      //inserting JS codes will excute the js codes.
      //both of these two cases will cause severe vulnerabilities.

      if(params.name){ //show the submited data via url
        response.write("server1c"+"<br>"+"Bonjour, " + params.name);
      }
      else if(body.name) { // show the submited data via the form
        response.write("server1c"+"<br>"+"Bonjour, " + body.name);
      } else { // if there is no data, show the form to be copleted
        response.write(postHTML);
      }
      response.end();
    });
  }).listen(8000);
});
