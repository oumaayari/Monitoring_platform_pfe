const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

const Mission = mongoose.model('Mission', missionSchema);

module.exports = Mission;
