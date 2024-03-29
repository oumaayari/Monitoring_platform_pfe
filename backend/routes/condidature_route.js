const express = require('express');
const router = express.Router();
const CandidatureController = require('../controllers/condidature_controller');

router.get('/candidatures/en-attente', CandidatureController.getCandidaturesEnAttente);
router.put('/candidatures/:id/accepter', CandidatureController.accepterCandidature);
router.put('/candidatures/:id/refuser', CandidatureController.refuserCandidature);

module.exports = router;
