var express = require('express');
var app = express();
var pdftotext = require('pdftotextjs');
var requestlib = require('request');
var fs = require('fs');

app.use(require('connect-requestid'));
app.get('/', function(request, response) {
  var request_uri = 'http://samplepdf.com/sample.pdf';
  var id = request.id;
  var filepath = "tmp/" + id + ".pdf";

  console.log(id + ": request for url " + request_uri + " from " + request.ip);

  var ws = fs.createWriteStream(filepath);
  requestlib(request_uri).pipe(ws);
  ws.on('close', function () {
    console.log(id + ": file written to disk at " + filepath);
      pdf = new pdftotext(filepath);

      pdf.getText(function(err, data, cmd) {
        if (err) {
          console.error(err);
        } else {
          console.log(id + ": response sent to client");
          response.send(data);
        }
      });
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
