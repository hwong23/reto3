var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var triangulacionRouter = require('./routes/ubicacion');
var msjRouter = require('./routes/mensaje');
var secretoRouter = require('./routes/secreto');
var topsecretRouter = require('./routes/topsecret');
var ayudaRouter = require('./routes/ayuda');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ubicacion', triangulacionRouter);
app.use('/mensaje', msjRouter);
app.use('/secreto', secretoRouter);
app.use('/topsecret', topsecretRouter);
app.use('/ayuda', ayudaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  // 'SyntaxError: Unexpected token n in JSON at position 0'
  err.message;
  next(err);
});


module.exports = app;
