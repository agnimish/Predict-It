var express= require('express');
var app = express();
var PORT = 8080;
var path = require('path');
// var start = require('./start');
// // var Router = require('./router');
app.use(express.static('public'));
// // app.use(Router);
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));    
});
app.listen(PORT,function()
{
    console.log("LocalHost://Server Running on: "+ PORT);
});