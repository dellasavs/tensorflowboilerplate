var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
var classifier = require('../tf.js');

var app = express();

app.get('/tf.js', function(req, res) {
  console.log();
  res.sendFile(path.join(__dirname, '..', 'tf.js'));
});

app.get('/main', function(req,res) {
  classifier.classify(0,0);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

// http.createServer(function (req, res) {
//   fs.readFile('./index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(3000);