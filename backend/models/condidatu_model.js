const mongoose = require('mongoose');

const candidatureSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Autres champs du formulaire
  accepte: { type: Boolean, default: false }, // État initial : en attente
});

const Candidature = mongoose.model('Candidature', candidatureSchema);

module.exports = Candidature;
