const express = require('express');

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const err404 = require('./error-handlers/404');
const err500 = require('./error-handlers/500');

const app = express();
app.use(express.json());

// Middleware
app.use(logger);

// Routes
app.get('/', (req, res) => res.send('hello'));
app.get('/person', validator, (req, res) => {
  return res.status(200).json({ name: req.query.name });
});
app.use('*', err404);

app.use(err500);

module.exports = app;
