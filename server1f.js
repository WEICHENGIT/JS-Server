var http = require('http');
var express = require('express');

var app = express();
app.get("/",function(req,res){
  res.end('server1f<br>Home page<br>Redirect to home page via http://localhost:8000/redirect');
});
app.get('/redirect', function(req, res) {
    res.redirect('/');
});
app.listen(8000,function(){
  console.log('Server running at http://localhost:8000/');
});
