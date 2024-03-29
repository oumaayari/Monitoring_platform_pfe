const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');



const userRoutes = require('./routes/user_route');
const adminRoute = require('./routes/admin_route');
const profileRoutes = require('./routes/profile_route');
const assignmentRoutes = require('./routes/assignment_route');
const activityRoutes = require('./routes/activity_route');
const missionRoutes = require('./routes/mission_route');
const submissionRoutes = require('./routes/submission_route');



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

// Middleware pour vérifier le JWT si nécessaire
const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token missing, authorization denied' });
  }
  // Vérification du JWT et ajout des informations de l'utilisateur au req
  try {
    const decoded = jwt.verify(token.split(' ')[1], 'secretKey');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token is not valid' });
  }
};

// Routes
app.use('/user', userRoutes);
app.use('/admin', jwtMiddleware, adminRoute);
app.use('/profiles', jwtMiddleware , profileRoutes);
app.use('/assignments', assignmentRoutes);
app.use('/activities', activityRoutes);
app.use('/missions', missionRoutes);
app.use('/submissions', submissionRoutes);



// Port du serveur
const PORT = process.env.PORT || 3003;

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

