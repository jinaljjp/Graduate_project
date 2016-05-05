var express = require('express')
, http = require('http');
var app = express();
fs = require('fs');

app.get('/localStorage', function(req, res) {

console.log(req.body);
res.send(req.body);
res.json(req.body);
res.send("ok");
});

    

fs.readFile('./MyToDo.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
    console.log("ToDo App is listening on port 8000");
});
