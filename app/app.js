const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mustache = require('mustache-express');
const data = require('./data.js');

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use('/user-directory', express.static('user-directory'));

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/users', function(req, res){
  res.render('users', data)});

app.get('/users/:id', function(req, res){
  res.render('Hello there, ' + req.params.name + '!');
});

app.listen(port, function(){
  console.log("The app is running on port 3000!")
});
