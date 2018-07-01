var path = require('path');
var methods = {
    start:function(req,res){
        res.sendFile(path.join(__dirname + '/index.html'));
    }
}
module.exports = methods;