var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var aboutRouter = require('./app_server/routes/about');
var bookingRouter = require('./app_server/routes/booking');
var contactRouter = require('./app_server/routes/contact');
var indexRouter = require('./app_server/routes/index');
var loginRouter = require('./app_server/routes/login');
var newsRouter = require('./app_server/routes/news');
var rateUsRouter = require('./app_server/routes/rateUs');
var signUpRouter = require('./app_server/routes/signUp');
var travelRouter = require('./app_server/routes/travel');
var usersRouter = require('./app_server/routes/users');

var handlebars = require('hbs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));

handlebars.registerPartials(__dirname + '/app_server/views/partials');

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/about', aboutRouter);
app.use('/booking', bookingRouter);
app.use('/contact', contactRouter);
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/news', newsRouter);
app.use('/rateUs', rateUsRouter);
app.use('/signUp', signUpRouter);
app.use('/travel', travelRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
