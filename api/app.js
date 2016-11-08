var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1', routes);
app.use('/users', users);

/**
 * TODO favicon을 호출하는 부분을 제거할 것
 * TODO CORS관련 설정 처리할 것
 */


module.exports = app;