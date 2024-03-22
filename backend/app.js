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

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'Token is required' });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

// Routes
app.use('/authentification' , AuthService );
app.use('/profiles', AuthService.verifyToken, profileRoutes);
app.use('/assignments', AuthService.verifyToken, assignmentRoutes);
app.use('/activities', AuthService.verifyToken, activityRoutes);
app.use('/missions', AuthService.verifyToken, missionRoutes);
app.use('/submissions', AuthService.verifyToken, submissionRoutes);

// Port du serveur
const PORT = process.env.PORT || 3000;

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
