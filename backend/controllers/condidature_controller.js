const Candidature = require('../models/candidature.model');

// Obtenir toutes les candidatures en attente
async function getCandidaturesEnAttente(req, res) {
  try {
    const candidatures = await Candidature.find({ accepte: false });
    res.json(candidatures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getCandidaturesEnAttente,
};
// Accepter une candidature
async function accepterCandidature(req, res) {
  try {
    const { id } = req.params;
    const candidature = await Candidature.findByIdAndUpdate(id, { accepte: true });
    res.json({ message: 'Candidature acceptée', candidature });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Refuser une candidature
async function refuserCandidature(req, res) {
  try {
    const { id } = req.params;
    const candidature = await Candidature.findByIdAndUpdate(id, { accepte: false });
    res.json({ message: 'Candidature refusée', candidature });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  accepterCandidature,
  refuserCandidature,
};
