const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mustache = require('mustache-express');
const data = require('./data.js');
let position;

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use('/user-directory', express.static('user-directory'));

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/users/:id', function(req, res){
  position = req.params.id - 1;
  console.log(position);
  res.render('id', data.users[position]);});

app.get('/users', function(req, res){
  res.render('users', data)});

app.listen(port, function(){
  console.log("The app is running on port 3000!")
});
