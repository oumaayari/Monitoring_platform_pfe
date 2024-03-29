const Topic = require('../models/Topic');

// Service pour gérer les opérations liées aux topics

// Créer un nouveau topic
async function createTopic(title, description, assignedTo, deadline) {
  try {
    const newTopic = new Topic({
      title,
      description,
      assignedTo,
      deadline,
      status: 'assigned' // Le statut initial est "assigned"
    });
    const savedTopic = await newTopic.save();
    return savedTopic;
  } catch (error) {
    throw Error('Error creating topic: ' + error.message);
  }
}

// Obtenir tous les topics
async function getAllTopics() {
  try {
    const topics = await Topic.find();
    return topics;
  } catch (error) {
    throw Error('Error fetching topics: ' + error.message);
  }
}

// Obtenir un topic par son ID
async function getTopicById(topicId) {
  try {
    const topic = await Topic.findById(topicId);
    return topic;
  } catch (error) {
    throw Error('Error fetching topic: ' + error.message);
  }
}

// Mettre à jour un topic
async function updateTopic(topicId, updates) {
  try {
    const updatedTopic = await Topic.findByIdAndUpdate(topicId, updates, { new: true });
    return updatedTopic;
  } catch (error) {
    throw Error('Error updating topic: ' + error.message);
  }
}

// Supprimer un topic
async function deleteTopic(topicId) {
  try {
    const deletedTopic = await Topic.findByIdAndDelete(topicId);
    return deletedTopic;
  } catch (error) {
    throw Error('Error deleting topic: ' + error.message);
  }
}

module.exports = {
  createTopic,
  getAllTopics,
  getTopicById,
  updateTopic,
  deleteTopic
};
