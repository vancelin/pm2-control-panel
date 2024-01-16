const cookieParser = require('cookie-parser');
var express = require('express');
let password = '';

module.exports = function (app) {
  app.use(cookieParser());
  app.use(express.urlencoded({extended: true}));
  // Front end routes
  app.get('/index', function (req, res) {
    if (req.cookies.password == password) {
      res.render('index');
    } else {
      res.redirect('login');
    }
  });

  app.post('/login', function (req, res) {
    if (req.body.password == password) {
      res.cookie('password', req.body.password);
      res.redirect('/index');
    } else {
      res.redirect('login');
    }
  });

  app.get('/login', function (req, res) {
    res.render('login');
  });
};
