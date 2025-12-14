# 🎓 Plateforme Éducative Intelligente (LMS + IA)

![Status](https://img.shields.io/badge/Status-Completed-success)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)
![AI Powered](https://img.shields.io/badge/AI-Gemini%20Integrated-purple)

Une plateforme d'apprentissage moderne propulsée par l'Intelligence Artificielle, conçue pour révolutionner l'expérience éducative grâce à des recommandations personnalisées, un assistant virtuel et des outils d'analyse pour les administrateurs.

---

## 📸 Démonstration


![Démo de l'application](img/demo.gif)

[📹 Voir la vidéo de démonstration complémentaire](https://drive.google.com/file/d/1A3j0bLfYcTBsRuHPqJUxNfQ5zps1P8S4/view?usp=sharing)

---

## ✨ Fonctionnalités Principales

### Fonctionnalités IA (Powered by Google Gemini)
- **Dashboard Admin Intelligent** : Analyse globale de la plateforme, tendances, et recommandations stratégiques générées automatiquement.
- **Recommandations de Cours** : Suggestions personnalisées pour chaque étudiant basées sur son historique et ses préférences.
- **Chatbot Assistant** : Assistant virtuel capable de répondre aux questions sur les cours en contexte.
- **Générateur de Quiz** : Création automatique de quiz interactifs à partir du contenu des cours.
- **Générateur de Bio** : Rédaction automatique de biographies professionnelles pour les profils utilisateurs.

### 📚 Gestion des Cours (LMS)
- Catalogue de cours avec recherche et filtrage.
- Inscription aux cours.
- Système d'avis et de notation.
- Pages de détails riches avec contenu multimédia.

### Utilisateurs & Sécurité
- Authentification complète (Inscription/Connexion) via JWT.
- Rôles utilisateurs : Étudiant et **Administrateur**.
- Profils utilisateurs éditables avec historique.

---

## 🛠️ Stack Technique

**Frontend :**
- React.js (Vite)
- React Router DOM
- Axios
- CSS (Design System moderne et épuré)

**Backend :**
- Node.js & Express
- MongoDB & Mongoose
- Authentication JWT & bcrypt
- **Google Gemini API** (Intégration IA)

---

## 🚀 Installation et Démarrage

### Prérequis
- Node.js installé.
- Compte MongoDB Atlas (ou MongoDB local).
- Clé API Google Gemini.

### 1. Cloner le projet
```bash
git clone https://github.com/votre-username/votre-repo.git
cd votre-repo
```

### 2. Configuration Backend
```bash
cd backend
npm install
```
Créez un fichier `.env` dans le dossier `backend` :
```env
PORT=5000
MONGO_URI=votre_lien_mongodb
JWT_SECRET=votre_secret_jwt
GEMINI_API_KEY=votre_cle_api_gemini
```
Lancez le serveur :
```bash
npm run dev
```

### 3. Configuration Frontend
Ouvrez un nouveau terminal :
```bash
cd frontend
npm install
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

---

## � Guide d'Utilisation

### Créer un Compte Administrateur
Pour accéder au **Dashboard Admin** et aux fonctionnalités de gestion, inscrivez-vous avec une adresse email contenant le mot **"admin"**.
- **Exemple** : `superadmin@plateforme.com`
- Le système détectera le mot-clé et vous attribuera automatiquement le rôle `admin`.

### Tester les Fonctionnalités IA
1.  **Dashboard** : Connectez-vous en admin et cliquez sur "Dashboard" dans la barre de navigation.
2.  **Bio** : Allez dans "Profil" > "Éditer" > "Générer avec IA".
3.  **Quiz** : Allez sur un cours > "Quiz IA" > Configurez la difficulté et générez.
4.  **Recommandations** : Cliquez sur "Cours Recommandés" dans la barre de navigation.

---

## 📂 Structure du Projet

```
/
├── backend/
│   ├── controllers/   # Logique métier (IA, Auth, Cours)
│   ├── models/        # Schémas de base de données (MongoDB)
│   ├── routes/        # Définition des API Endpoints
│   └── middleware/    # Auth & Protection des routes
│
├── frontend/
│   ├── src/
│   │   ├── components/ # Composants réutilisables (Navbar, Cards...)
│   │   ├── context/    # Gestion de l'état global (AuthContext)
│   │   ├── pages/      # Vues principales (Dashboard, Cours, Profil...)
│   │   └── api/        # Configuration Axios
```

---

*Développé avec ❤️ pour le projet React TP10.*
