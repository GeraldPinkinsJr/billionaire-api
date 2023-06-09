var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var billionairesRouter = require('./routes/billionaires');

var app = express();
 
// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// middlewares 

// handling which path the request is using 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/billionaires', billionairesRouter)

module.exports = app;
