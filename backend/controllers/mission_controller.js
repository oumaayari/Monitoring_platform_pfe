const Mission = require('../models/Mission');

async function createMission(req, res) {
  try {
    const { name, description, deadline } = req.body;
    const newMission = new Mission({ name, description, deadline });
    const savedMission = await newMission.save();
    res.status(201).json(savedMission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getMissionById(req, res) {
  try {
    const mission = await Mission.findById(req.params.id);
    if (!mission) {
      return res.status(404).json({ message: 'Mission not found' });
    }
    res.json(mission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createMission,
  getMissionById,
};
