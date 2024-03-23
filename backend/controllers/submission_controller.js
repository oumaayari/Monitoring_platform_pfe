const Submission = require('../models/Submission');

async function createSubmission(req, res) {
  try {
    const { intern, mission, documentUrl } = req.body;
    const newSubmission = new Submission({ intern, mission, documentUrl });
    const savedSubmission = await newSubmission.save();
    res.status(201).json(savedSubmission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getSubmissionById(req, res) {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createSubmission,
  getSubmissionById,
};
