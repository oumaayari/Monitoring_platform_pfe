const Assignment = require('../models/Assignment');

async function createAssignment(req, res) {
  try {
    const { internId, topic, missionDescription } = req.body;

    const newAssignment = new Assignment({ internId, topic, missionDescription });
    await newAssignment.save();

    res.status(201).json({ message: 'Assignment created successfully', assignment: newAssignment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAssignmentsForIntern(req, res) {
  try {
    const { internId } = req.params;
    const assignments = await Assignment.find({ internId });

    res.status(200).json({ assignments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createAssignment,
  getAssignmentsForIntern,
};
