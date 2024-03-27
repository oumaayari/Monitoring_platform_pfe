// admin.service.js - Service pour les administrateurs (réutilisation partielle de user.service.js)

const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const config = require('../config/auth_config');

// Fonction de création d'un administrateur
async function createAdmin(adminData) {
  const newAdmin = new Admin(adminData);
  await newAdmin.save();
  return newAdmin;
}

// Fonction de connexion d'un administrateur
async function loginAdmin(email, password) {
  const admin = await Admin.findOne({ email });
  if (!admin || admin.password !== password) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: admin._id }, config.secret, { expiresIn: '1h' });
  return token;
}

module.exports = {
  createAdmin,
  loginAdmin,
};
