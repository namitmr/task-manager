var express = require('express');
var router = express.Router();
var conf = require('config');
var request = require('request');
var querystring = require('querystring');
var url = require('url');
var sprintf = require("sprintf-js").sprintf;
var fs = require('fs');
var filename = 'target.json';
var httpProxy = require("http-proxy");
var http = require('http');

router.get('/', function(req, res, next) {
  res.render('index');
});

 module.exports = router;