// admin.controller.js - Contrôleur pour les administrateurs (réutilisation partielle de user.controller.js)

const adminService = require('../services/admin_service');

// Fonction de gestion de l'inscription (signup) des administrateurs
async function signUpAdmin(req, res) {
  try {
    const adminData = req.body;
    const newAdmin = await adminService.createAdmin(adminData);
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Fonction de gestion de la connexion (login) des administrateurs
async function loginAdmin(req, res) {
  try {
    const { email, password } = req.body;
    const token = await adminService.loginAdmin(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}

module.exports = {
  signUpAdmin,
  loginAdmin,
};
