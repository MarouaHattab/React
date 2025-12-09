require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const aiRoutes = require('./routes/aiRoutes');

// Connexion à la base de données
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// CORS Configuration
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'API MERN TP5 - Gestion de cours' });
});

// Après les autres routes
app.use('/api/ai', aiRoutes);

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});