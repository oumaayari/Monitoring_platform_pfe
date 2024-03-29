// admin.routes.js - Routes pour les administrateurs (réutilisation partielle de user.routes.js)

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin_controller');

// Route pour l'inscription des administrateurs
router.post('/signup', adminController.signUpAdmin);

// Route pour la connexion des administrateurs
router.post('/login', adminController.loginAdmin);

module.exports = router;
