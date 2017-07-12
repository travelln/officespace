var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//connect to mongodb
mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/chirp-test");

//if(process.env.DEV_ENV){
//mongoose.connect('mongodb://localhost:27017/chirp-test');
//}
//else{
//	mongoose.connect('mongodb://sunny:AvrTUlS5XyCF7gw4TlZTx748r8BzhZCIKiwGEwX231G19bP34bgd9pGR3aMfPL78cWTt9ACawTUa9pe53rwZbA==@sunny.documents.azure.com:10255/?ssl=true&replicaSet=globaldb');
//}
//mongoose.connect("mongodb://sunny:AvrTUlS5XyCF7gw4TlZTx748r8BzhZCIKiwGEwX231G19bP34bgd9pGR3aMfPL78cWTt9ACawTUa9pe53rwZbA==@sunny.documents.azure.com:10255/?ssl=true");
mongoose.connect('mongodb://travelln:dbuser@ds133290.mlab.com:33290/chirpuser');

// Setting Bitnami application password to '7qg65jlBOPT7'
require('./models/models.js');
var api = require('./routes/api');
//We will uncomment this after implementing authenticate
var authenticate = require('./routes/authenticate')(passport);
var index = require('./routes/index');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(session({
  secret: 'keyboard cat'
}));
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());
//console.log("HELLO1");
//// Initialize Passport
var initPassport = require('./passport-init');
initPassport(passport);


//directs to the home page
app.use('/' , index);
app.use('/auth', authenticate);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
