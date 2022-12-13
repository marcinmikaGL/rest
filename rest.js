  GNU nano 6.2                                                  /home/kupka2000/rest.js                                                            
var express = require('express');  
var app = express();  
var port = 2001; 
const path = require('path');
app.use(express.static('public'));  
  
    
app.get('/', function (req, res) {  
  
   console.dir(req.query);  
   res.sendFile(path.join(__dirname, '/index.html'));
  // res.end(JSON.stringify(req.query));  
});  
var server = app.listen(port, function () {  
  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Nasluch at http://%s:%s", host, port)  
  
}); 
