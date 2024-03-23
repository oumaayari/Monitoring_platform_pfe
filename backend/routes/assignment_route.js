const express = require('express');
const router = express.Router();
const AssignmentController = require('../controllers/assignment.controller');

router.post('/create', AssignmentController.createAssignment);
router.get('/:id', AssignmentController.getAssignmentsForIntern);

module.exports = router;
