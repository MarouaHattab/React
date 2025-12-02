const User = require('../models/User');

// @desc    Récupérer tous les utilisateurs
// @route   GET /api/users
// @access  Private (JWT required)
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate('courses', 'title description');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Récupérer un utilisateur
// @route   GET /api/users/:id
// @access  Private (JWT required)
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('courses', 'title description instructor');

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Récupérer les cours d'un utilisateur
// @route   GET /api/users/:userId/courses
// @access  Private (JWT required)
const getUserCourses = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('courses');

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    res.status(200).json(user.courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  getUserCourses,
};
