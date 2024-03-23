const jwt = require('jsonwebtoken');
const config = require('../config/auth_config');


function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    console.log('Token is missing');
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      console.log('Invalid token:', err.message);
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
}

module.exports = {
  verifyToken,
};
