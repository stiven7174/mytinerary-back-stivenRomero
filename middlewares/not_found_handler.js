const notFoundHandler = (req, res, next) => {
  res.status(404).send('Route not found');
};

module.exports = notFoundHandler;
