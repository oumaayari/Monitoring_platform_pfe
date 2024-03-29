const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schéma pour les données des sujets (topics)
const topicSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'Intern', // Référence au modèle de l'intern
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['assigned', 'in_progress', 'completed'],
    default: 'assigned',
  },
}, { timestamps: true });

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
