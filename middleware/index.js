module.exports = (req, res, next) => {
  const authorization = req.header('Authorization');

  if (!authorization) {
    return res.status(401).json({ message: 'Access Denied' });
  }
  next();
};
