const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/activity_controller');

router.post('/', ActivityController.createActivity);
router.get('/:id', ActivityController.getActivityById);

module.exports = router;
