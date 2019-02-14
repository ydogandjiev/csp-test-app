var express = require('express');
var csp = require('helmet-csp');
var serveStatic = require('serve-static');

var app = express();
app.use(csp({
  directives: {
    blockAllMixedContent: true,
    frameSrc: [
      "https:",
      "mailto:",
      "sip:",
      "tel:"
    ]
  }
}));
app.use(serveStatic(__dirname + '/public'));

var port = process.env.port || 3000;
app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);
});
