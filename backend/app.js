const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const AuthService = require('./services/authentication_service');

const userRoutes = require('./routes/user_route');
const profileRoutes = require('./routes/profile_route');
const assignmentRoutes = require('./routes/assignment_route');
const activityRoutes = require('./routes/activity_route');
const missionRoutes = require('./routes/mission_route');
const submissionRoutes = require('./routes/submission_route');
const topicRoutes = require('./routes/topic_route');


const app = express();

mongoose.connect('mongodb://localhost:27017/monitoring-platform', {
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
app.use(cookieParser());

// Middleware d'authentification
app.use(AuthService.verifyToken);

// Routes
app.use('/users', userRoutes);
app.use('/profiles', profileRoutes);
app.use('/assignments', assignmentRoutes);
app.use('/activities', activityRoutes);
app.use('/missions', missionRoutes);
app.use('/submissions', submissionRoutes);
app.use('/topics', topicRoutes);


// Port du serveur
const PORT = process.env.PORT || 3003;

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

