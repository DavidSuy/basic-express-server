'use strict';

const logger = (req, res, next) => {
  const { url, method } = req;
  console.log(`method: ${method}, path: ${url}`);
  next();
};

module.exports = logger;
