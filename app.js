var express = require("express");
var path = require('path');
var fs = require('fs');
var request = require('request');
var querystring = require('querystring');
var url = require('url');
var conf = require('config');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var url = require('url');
var sprintf = require("sprintf-js").sprintf;
var httpProxy = require("http-proxy");
var http = require('http');
var fs = require('fs');
var filename = 'target.json';
var mysql = require('mysql');
var Pool = require('generic-pool').Pool;
var expressValidator = require('express-validator');
var Sequelize = require('sequelize');

global.appRoot = path.resolve(__dirname);

var PORT = conf.get('port');
var username = conf.get('mysql_username');
var password = conf.get('mysql_password');
var app = express();

var sequelize = new Sequelize('tasks', username, password, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

global.sequelize = sequelize;
console.log(sprintf("using env: [%s]", app.get('env')));
app.set('view engine', 'html');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());


var indexPage = require('./routes/index_page');
app.use(indexPage);

// var task_update = require('./routes/task_update');
// app.use(task_update);




app.listen(PORT) ;
console.log(sprintf('Listening on port %s...', PORT));
