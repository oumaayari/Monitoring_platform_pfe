const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const userRoutes = require('./routes/user_route');
const profileRoutes = require('./routes/profile_route');
const assignmentRoutes = require('./routes/assignment_route');
const activityRoutes = require('./routes/activity_route');
const missionRoutes = require('./routes/mission_route');
const submissionRoutes = require('./routes/submission_route');
const AuthService = require('./services/authentication_service');

const app = express();


mongoose.connect('mongodb://localhost:27017/monitoring_platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users',AuthService, userRoutes);
app.use('/profiles', profileRoutes);
app.use('/assignments', assignmentRoutes);
app.use('/activities', activityRoutes);
app.use('/missions', missionRoutes);
app.use('/submissions', submissionRoutes);


// Port du serveur
const PORT = process.env.PORT || 3000;

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
