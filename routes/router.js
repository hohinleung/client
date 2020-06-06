var express = require('express');
var router = express.Router();
var path = require('path')
var bodyParser = require('body-parser');

router.get('/', function (res, req, next) {
  req.sendFile(path.join(__dirname, '../View/index.html'))
})

router.get('/LoginMain', function (res, req, next) {
  req.sendFile(path.join(__dirname, '../View/LoginMain.html'))
})

router.get('/Addcomment', function (res, req, next) {
  req.sendFile(path.join(__dirname, '../View/Addcomment.html'))
})

router.get('/Addanonymous', function (res, req, next) {
  req.sendFile(path.join(__dirname, '../View/Addanonymous.html'))
})

router.get('/ViewAnonymous', function (res, req, next) {
  req.sendFile(path.join(__dirname, '../View/ViewAnonymous.html'))
})

  module.exports = router;
