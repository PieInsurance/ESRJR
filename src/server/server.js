var express = require('express');
var app = express();
var cors = require('cors');
var port = 4002;
var request = require('request');
var url ='https://pie-requestbin.herokuapp.com/149ndv51';

request(url, function (error, response, body) {
  if (!error) {
    console.log(body, "body");
  }
});
app.use(cors());

app.listen(port, function() {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port ' + port);
});
