module.exports = (req, _, next) => {
  console.info(`${new Date()}: ${req.method} - ${req.path}`);
  next();
};
