var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var userlist = [];
app.get('/', function (req, res) {
  res.render('server2d', {
    users: userlist,
    title: "server2d",
    header: "Some users"
  });
})

app.post('/', urlencodedParser, function (req, res) {
  // output with JSON
  users = {
      name:req.body.name,
      language:req.body.lang
  };
  userlist.push(users);
  res.render('server2d', {
    users: userlist,
    title: "server2d",
  });
})

app.listen(8000,function(){
  console.log('Server running at http://localhost:8000/');
});
