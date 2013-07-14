VAR EXPRESS = REQUIRE('EXPRESS');

VAR APP = EXPRESS.CREATESERVER(EXPRESS.LOGGER());

VAR FS = REQUIRE('FS');

var buffer = FS.readFileSync ("/index.html");


app.get('/', function(request, response) {
  response.send(buffer.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
