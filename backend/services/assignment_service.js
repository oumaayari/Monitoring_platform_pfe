const Assignment = require('../models/Assignment');

async function createAssignment(assignmentData) {
  try {
    const assignment = new Assignment(assignmentData);
    await assignment.save();
    return assignment;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAssignmentById(assignmentId) {
  try {
    const assignment = await Assignment.findById(assignmentId);
    return assignment;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createAssignment,
  getAssignmentById,
};
