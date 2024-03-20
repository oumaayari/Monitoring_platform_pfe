const User = require('../models/User');

async function signUp(req, res) {
  try {
    const { username, email, password, role } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, email, password, role });
    await newUser.save();

    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Recherche de l'utilisateur par email
    const user = await User.findOne({ email });

    // Vérification de l'utilisateur et du mot de passe
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

     // Création d'un payload pour le token JWT
     const payload = {
      userId: user._id,
      email: user.email,
      password:user.password,
      role: user.role,
    };

    // Génération du token JWT avec une durée de validité
    const token = jwt.sign(payload, config.secret, { expiresIn: '1h' });


    // Pour simplifier, nous renvoyons simplement un message de succès
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  signUp,
  login,
};

