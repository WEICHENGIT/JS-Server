var fs = require("fs");
var http = require('http');
var url = require('url');
// asynchronous read
// fs.readFile("C:/Users/Win7-Wei/Desktop/travaux pratiques/SD203 TP4/text1b.txt", function (err, data) {

http.createServer(function (request, response) {
    var params = url.parse(request.url, true).path;
    fs.readFile("C:/Users/Win7-Wei/Desktop/travaux pratiques/SD203 TP4/"+ params, function (err, data) {
         if (err) {
           response.statusCode = 404;
           response.statusMessage = 'Not found';
           response.end();
         }
         else if(params.split('.')[1]=="txt"){
        response.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
        response.end("server1b\n"+data);
        }
        else if(params.split('.')[1]=="PNG"||params.split('.')[1]=="png"){
       response.writeHead(200, {'Content-Type': 'image/png'});
       response.end(data);
       }
         else if(params.split('.')[1]=="jpeg"||params.split('.')[1]=="jpg"){
        response.writeHead(200, {'Content-Type': 'image/jpeg'});
        response.end(data);
        }
         else if(params.split('.')[1]=="html"){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data,'utf-8');
        }
        else if(params.split('.')[1]=="js"){
       response.writeHead(200, {'Content-Type': 'application/x-javascript; charset=utf8'});
       response.end(data);
       }
       else if(params.split('.')[1]=="css"){
      response.writeHead(200, {'Content-Type': 'text/css; charset=utf8'});
      response.end(data,'utf-8');
      }
        else if(params.split('.')[1]=="mp3"){
       response.writeHead(200, {'Content-Type': 'audio/mp3'});
       response.end(data);
       }
       else if(params.split('.')[1]=="mp4"){
      response.writeHead(200, {'Content-Type': 'video/mpeg4'});
      response.end(data);
      }
       else {
         response.statusCode=404;
         response.statusMessage="Can't read";
         response.end();
       }
 });
   }).listen(http://perso.telecom-paristech.fr/~cwei/TP4/);


console.log('Server running at http://localhost:8000/');
