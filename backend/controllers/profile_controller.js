const Profile = require('../models/Profile');

async function createProfile(req, res) {
  try {
    const { userId, firstName, lastName, age, bio } = req.body;

    const existingProfile = await Profile.findOne({ userId });
    if (existingProfile) {
      return res.status(400).json({ message: 'Profile already exists' });
    }

    const newProfile = new Profile({ userId, firstName, lastName, age, bio });
    await newProfile.save();

    res.status(201).json({ message: 'Profile created successfully', profile: newProfile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getProfile(req, res) {
  try {
    const { userId } = req.params;
    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({ profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createProfile,
  getProfile,
};
