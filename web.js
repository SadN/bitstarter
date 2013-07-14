var express = require ('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buffer = FS.readFileSync ("index.html");

var writethis = buffer.toString('utf8', 0 , len); 

app.get('/', function(request, response) {
  response.send(writethis);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
