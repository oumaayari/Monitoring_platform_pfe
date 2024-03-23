const Activity = require('../models/Activity');

async function createActivity(req, res) {
  try {
    const { name, description, date } = req.body;
    const newActivity = new Activity({ name, description, date });
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getActivityById(req, res) {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createActivity,
  getActivityById,
};
