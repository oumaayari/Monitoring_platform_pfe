const Topic = require('../models/Topic');

// Contrôleur pour la gestion des sujets
const createTopic = async (req, res) => {
  try {
    const { title, description, assignedTo, deadline } = req.body;
    const newTopic = new Topic({ title, description, assignedTo, deadline });
    await newTopic.save();
    res.status(201).json({ message: 'Topic created successfully', topic: newTopic });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTopic = async (req, res) => {
  try {
    const { title, description, assignedTo, deadline, status } = req.body;
    const updatedTopic = await Topic.findByIdAndUpdate(
      req.params.id,
      { title, description, assignedTo, deadline, status },
      { new: true }
    );
    res.status(200).json({ message: 'Topic updated successfully', topic: updatedTopic });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTopic = async (req, res) => {
  try {
    await Topic.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Topic deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTopic,
  getTopics,
  getTopicById,
  updateTopic,
  deleteTopic,
};
