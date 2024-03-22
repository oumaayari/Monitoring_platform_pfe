const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');
const AuthService = require('../services/authentication_service');
router.post('/register', UserController.signUp);
router.post('/login', UserController.login);

module.exports = router;


