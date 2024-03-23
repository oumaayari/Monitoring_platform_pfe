const Profile = require('../models/Profile');

async function createProfile(profileData) {
  try {
    const profile = new Profile(profileData);
    await profile.save();
    return profile;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getProfile(profileId) {
  try {
    const profile = await Profile.findById(profileId);
    return profile;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createProfile,
  getProfile,
};
