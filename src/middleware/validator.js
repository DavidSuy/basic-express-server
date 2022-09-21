'use strict';

const validator = (req, res, next) => {
  console.log(req.query.name);
  const { name } = req.query;
  name ? next() : next('Please make sure you pass a name in you query');
};

module.exports = validator;
