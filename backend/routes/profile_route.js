const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profile_controller');

router.post('/', ProfileController.createProfile);
router.get('/:id', ProfileController.getProfile);

module.exports = router;
