const Mission = require('../models/Mission');

async function createMission(missionData) {
  try {
    const mission = new Mission(missionData);
    await mission.save();
    return mission;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getMissionById(missionId) {
  try {
    const mission = await Mission.findById(missionId);
    return mission;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createMission,
  getMissionById,
};
