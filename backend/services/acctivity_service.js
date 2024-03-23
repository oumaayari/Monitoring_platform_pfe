const Activity = require('../models/Activity');

async function createActivity(activityData) {
  try {
    const activity = new Activity(activityData);
    await activity.save();
    return activity;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getActivityById(activityId) {
  try {
    const activity = await Activity.findById(activityId);
    return activity;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createActivity,
  getActivityById,
};
