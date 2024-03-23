const express = require('express');
const router = express.Router();
const SubmissionController = require('../controllers/submission_controller');

router.post('/', SubmissionController.createSubmission);
router.get('/:id', SubmissionController.getSubmissionById);

module.exports = router;
