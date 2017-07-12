var express = require("express");
var app = express();

//Creating Router() object
var router = express.Router();
// Provide all routes here, this is for Home page.
router.get("/",function(req,res){
  res.end('server2b<br>Home page<br>Access to HTMLs in different language, for example: http://localhost:8000/hello/chinese');
});

router.get("/hello/:language",function(req,res){
  res.sendFile("C:/Users/Win7-Wei/Desktop/travaux pratiques/SD203 TP4/"+"hello_"+req.params.language+".html");
});
// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.
app.use("/",router);
// app.use(express.static("C:/Users/Win7-Wei/Desktop/travaux pratiques/SD203 TP4"));
// Listen to this Port
app.listen(8000,function(){
  console.log('Server running at http://localhost:8000/');
});
