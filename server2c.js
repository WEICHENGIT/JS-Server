var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded encoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("C:/Users/Win7-Wei/Desktop/travaux pratiques/SD203 TP4"));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "server2c.html" );
})

app.post('/', urlencodedParser, function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
   //test of XSS vulnerabilities:
   //We use text/plain here to avoid vulnerabilitiy caused by injection of html/js codes.
   //By inserting html/js codes, the plain text will be diplayed on the response page.
   res.end(req.body.name);
})

app.listen(8000,function(){
  console.log('Server running at http://localhost:8000/');
});
