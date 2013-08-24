var express = require('express');
var app = express();
var bar = new Buffer(100);
app.use(express.logger());

bar = fs.readFileSync(index.html);

app.get('/', function(request, response) {
  response.send(bar.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
