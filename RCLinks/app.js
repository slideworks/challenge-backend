var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var RateLimit = require('express-rate-limit');
var ResponseStructure = require('./util/ResponseStructure');
var msg = require('./util/message');
var index = require('./routes/index');
var app = express();

var BlockedController = require('./controllers/blocked/blocked.controller');
var cBlocked = new BlockedController();

//Rate limit
app.enable('trust proxy');

var limiter = new RateLimit({
    windowMs: 5 * 60 * 1000,
    max: 20,
    delayMs: 0,
    onLimitReached: cBlocked.blockIP
});

app.use(limiter);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json('error');
});

module.exports = app;
