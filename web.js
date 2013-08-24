var express = require('express');
var fs = require('fs');
var app = express();
var text = fs.readFileSync("index.html", "utf-8");

app.use(express.logger());

bar = fs.readFileSync(index.html);

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
