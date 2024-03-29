const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');
const AuthService = require('../services/authentification_service');

router.post('/register', UserController.signUp);
router.post('/login', UserController.login);

// Exemple de route protégée nécessitant un token valide
router.get('/protected-route', AuthService.verifyToken, (req, res) => {
    // Route protégée nécessitant un token valide
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;

