const express = require('express');
const router = express.Router();
const MissionController = require('../controllers/mission_controller');

router.post('/', MissionController.createMission);
router.get('/:id', MissionController.getMissionById);

module.exports = router;
