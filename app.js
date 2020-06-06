var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// include routes
var routes = require('./routes/router');
app.use('/', routes);
app.use(express.static(__dirname + '/View'));

app.use(cors())

// listen on port 3210


  app.listen(3000, function () {
    console.log('Listening on port 3000...');
  });