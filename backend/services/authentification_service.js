const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Fonction pour générer un JWT
exports.generateToken = (userId) => {
  const token = jwt.sign({ userId }, 'secretKey', { expiresIn: '1h' });
  return token;
};

// Fonction pour vérifier les identifiants
exports.verifyCredentials = async (providedPassword, storedPassword) => {
  try {
    const isValid = await bcrypt.compare(providedPassword, storedPassword);
    return isValid;
  } catch (error) {
    console.error(error);
    return false;
  }
};
