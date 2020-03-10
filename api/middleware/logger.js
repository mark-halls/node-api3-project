const logger = (req, res, next) => {
  console.log(`${req.method} on ${req.originalUrl} at ${new Date(Date.now())}`);
  next();
};

module.exports = logger;
