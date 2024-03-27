const express = require('express');
const router = express.Router();
const TopicController = require('../controllers/topic_controller');

// Routes pour la gestion des sujets
router.post('/', TopicController.createTopic);
router.get('/', TopicController.getTopics);
router.get('/:id', TopicController.getTopicById);
router.put('/:id', TopicController.updateTopic);
router.delete('/:id', TopicController.deleteTopic);

module.exports = router;
