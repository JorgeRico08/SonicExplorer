var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const sesion = require('express-session');
const db = require("./config/DBConnection");

db.connect();

var indexRouter = require('./routes/index');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(
    sesion({
      secret: 'secreto',
      resave: false,
      saveUninitialized: false,
    })
  );
  

module.exports = app;
