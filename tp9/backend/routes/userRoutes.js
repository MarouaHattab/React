const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  getUserCourses,
} = require('../controllers/userController');
const {
  createProfile,
  getProfile,
  updateProfile,
} = require('../controllers/profileController');
const { getUserReviews } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

// Routes pour les utilisateurs (toutes protégées par JWT)
router.route('/').get(protect, getUsers);
router.route('/:id').get(protect, getUserById);

// Routes pour les profils (Relation 1-to-1) - protégées par JWT
router.route('/:userId/profile')
  .post(protect, createProfile)
  .get(protect, getProfile)
  .put(protect, updateProfile);

// Route pour récupérer les cours d'un utilisateur - protégée par JWT
router.route('/:userId/courses').get(protect, getUserCourses);

// Route pour récupérer les reviews d'un utilisateur - protégée par JWT
router.route('/:userId/reviews').get(protect, getUserReviews);

module.exports = router;

