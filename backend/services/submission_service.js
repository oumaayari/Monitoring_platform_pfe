const Submission = require('../models/Submission');

async function createSubmission(submissionData) {
  try {
    const submission = new Submission(submissionData);
    await submission.save();
    return submission;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getSubmissionById(submissionId) {
  try {
    const submission = await Submission.findById(submissionId);
    return submission;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createSubmission,
  getSubmissionById,
};
