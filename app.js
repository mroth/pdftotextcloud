var express = require('express');
var app = express();
var pdftotext = require('pdftotextjs');
var requestlib = require('request');
var fs = require('fs');

app.use(require('connect-requestid'));
app.get('/', function(request, response) {
  response.send("Use format /pdftotext/:uri -- <a href='/pdftotext/http%3A%2F%2Fbootandshoeservice.com%2Fwp-content%2Fuploads%2F2013%2F04%2FDinner4-30.pdf'>example</a>");
});

app.get('/pdftotext/:uri', function(request, response) {
  var request_uri = request.params.uri;
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
