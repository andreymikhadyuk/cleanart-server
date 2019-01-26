const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');
const appConfig = require('config').get('app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

require('./routes')(app);

server.listen(appConfig.port, () => {
  console.log(`App started on port ${appConfig.port}`);
});
