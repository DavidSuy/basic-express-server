'use strict';

function err404(req, res, next) {
  res.status(404).send('Not Found');
}

module.exports = err404;
