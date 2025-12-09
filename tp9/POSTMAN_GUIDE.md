# 📮 Guide Postman - API MERN TP9

Guide complet pour tester l'API avec Postman.

## 📋 Table des Matières

1. [Configuration Initiale](#configuration-initiale)
2. [Authentification](#authentification)
3. [Ajouter des Cours](#ajouter-des-cours)
4. [Toutes les Routes](#toutes-les-routes)

---

## ⚙️ Configuration Initiale

### URL de Base
```
http://localhost:3000/api
```

### Headers Communs

Pour toutes les requêtes:
- `Content-Type: application/json`

Pour les routes protégées (après connexion):
- `Content-Type: application/json`
- `Authorization: Bearer <VOTRE_TOKEN_JWT>`

---

## 🔐 Authentification

### Étape 1: Créer un Compte

**Requête:**
```
POST http://localhost:3000/api/auth/register
```

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Réponse Attendue (201 Created):**
```json
{
  "message": "Utilisateur créé avec succès",
  "user": {
    "_id": "657abc123def456...",
    "username": "admin",
    "email": "admin@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**⚠️ Important:** Copiez le `token` de la réponse!

---

### Étape 2: Se Connecter

**Requête:**
```
POST http://localhost:3000/api/auth/login
```

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Réponse Attendue (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "657abc123def456...",
    "username": "admin",
    "email": "admin@example.com"
  }
}
```

**⚠️ Important:** Copiez le `token` pour l'utiliser dans les requêtes suivantes!

---

## 📚 Ajouter des Cours

### Créer un Cours (Route Protégée)

**Requête:**
```
POST http://localhost:3000/api/courses
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **Remplacez le token après `Bearer ` par votre token JWT réel!**

**Body (JSON):**
```json
{
  "title": "Introduction à React",
  "description": "Apprenez les bases de React, les composants, le state et les props",
  "instructor": "John Doe"
}
```

**Réponse Attendue (201 Created):**
```json
{
  "_id": "657def789abc012...",
  "title": "Introduction à React",
  "description": "Apprenez les bases de React, les composants, le state et les props",
  "instructor": "John Doe",
  "students": [],
  "__v": 0
}
```

---

### Exemples de Cours à Créer

#### Cours 1: Node.js
```json
{
  "title": "Node.js Avancé",
  "description": "Maîtrisez Node.js et Express pour créer des APIs robustes",
  "instructor": "Jane Smith"
}
```

#### Cours 2: MongoDB
```json
{
  "title": "MongoDB pour Débutants",
  "description": "Découvrez MongoDB et les bases de données NoSQL",
  "instructor": "Bob Johnson"
}
```

#### Cours 3: JavaScript
```json
{
  "title": "JavaScript ES6+",
  "description": "Toutes les fonctionnalités modernes de JavaScript",
  "instructor": "Alice Brown"
}
```

#### Cours 4: CSS
```json
{
  "title": "CSS Grid et Flexbox",
  "description": "Maîtrisez les layouts modernes avec CSS",
  "instructor": "Charlie Wilson"
}
```

#### Cours 5: Vue.js
```json
{
  "title": "Vue.js 3 Complet",
  "description": "Framework progressif pour construire des interfaces",
  "instructor": "Diana Prince"
}
```

#### Cours 6: TypeScript
```json
{
  "title": "TypeScript Essentiel",
  "description": "JavaScript avec des types statiques",
  "instructor": "Ethan Hunt"
}
```

#### Cours 7: React Router
```json
{
  "title": "React Router & Navigation",
  "description": "Gérez la navigation dans vos applications React",
  "instructor": "Fiona Gallagher"
}
```

#### Cours 8: Redux
```json
{
  "title": "Redux State Management",
  "description": "Gérez l'état de vos applications complexes",
  "instructor": "George Miller"
}
```

#### Cours 9: Express
```json
{
  "title": "REST API avec Express",
  "description": "Créez des APIs REST professionnelles",
  "instructor": "Hannah Montana"
}
```

#### Cours 10: GraphQL
```json
{
  "title": "GraphQL Moderne",
  "description": "Alternative moderne aux REST APIs",
  "instructor": "Ian Malcolm"
}
```

#### Cours 11: Docker
```json
{
  "title": "Docker pour Développeurs",
  "description": "Containerisez vos applications",
  "instructor": "Julia Roberts"
}
```

#### Cours 12: Testing
```json
{
  "title": "Testing avec Jest",
  "description": "Écrivez des tests unitaires et d'intégration",
  "instructor": "Kevin Hart"
}
```

---

## 📖 Toutes les Routes API

### 🔓 Routes Publiques (Pas besoin de token)

#### 1. Lister tous les cours
```
GET http://localhost:3000/api/courses
```

#### 2. Obtenir les détails d'un cours
```
GET http://localhost:3000/api/courses/657def789abc012...
```
Remplacez l'ID par un vrai ID de cours.

#### 3. Obtenir les reviews d'un cours
```
GET http://localhost:3000/api/courses/657def789abc012.../reviews
```

#### 4. Obtenir les étudiants d'un cours
```
GET http://localhost:3000/api/courses/657def789abc012.../students
```

---

### 🔒 Routes Protégées (Nécessitent le token JWT)

**N'oubliez pas d'ajouter le header:**
```
Authorization: Bearer VOTRE_TOKEN_ICI
```

#### 5. S'inscrire à un cours
```
POST http://localhost:3000/api/courses/657def789abc012.../enroll
```
Pas de body nécessaire.

#### 6. Ajouter une review à un cours
```
POST http://localhost:3000/api/courses/657def789abc012.../reviews
```

**Body:**
```json
{
  "rating": 5,
  "comment": "Excellent cours! Les concepts sont très bien expliqués."
}
```

#### 7. Obtenir mes cours
```
GET http://localhost:3000/api/users/657abc123def456.../courses
```
Remplacez l'ID par votre ID utilisateur (obtenu lors de la connexion).

#### 8. Obtenir mes reviews
```
GET http://localhost:3000/api/users/657abc123def456.../reviews
```

#### 9. Créer mon profil
```
POST http://localhost:3000/api/users/657abc123def456.../profile
```

**Body:**
```json
{
  "bio": "Développeur passionné par les nouvelles technologies",
  "website": "https://monsite.com"
}
```

#### 10. Obtenir mon profil
```
GET http://localhost:3000/api/users/657abc123def456.../profile
```

#### 11. Modifier mon profil
```
PUT http://localhost:3000/api/users/657abc123def456.../profile
```

**Body:**
```json
{
  "bio": "Développeur Full Stack avec 5 ans d'expérience",
  "website": "https://nouveau-site.com"
}
```

#### 12. Lister tous les utilisateurs
```
GET http://localhost:3000/api/users
```

#### 13. Obtenir un utilisateur spécifique
```
GET http://localhost:3000/api/users/657abc123def456...
```

---

## 🎯 Workflow Complet de Test

### 1. Préparation
```bash
# Démarrer MongoDB
mongod

# Démarrer le backend
cd backend
npm start
```

### 2. Créer un compte
```
POST /api/auth/register
```
→ Obtenir le token

### 3. Créer des cours
```
POST /api/courses (x12 fois avec différents cours)
```
Utilisez les exemples ci-dessus.

### 4. Lister les cours
```
GET /api/courses
```
→ Vérifier que tous les cours sont créés

### 5. S'inscrire à un cours
```
POST /api/courses/{id}/enroll
```

### 6. Ajouter une review
```
POST /api/courses/{id}/reviews
```

### 7. Voir mes reviews
```
GET /api/users/{userId}/reviews
```

### 8. Créer/Modifier profil
```
POST /api/users/{userId}/profile
PUT /api/users/{userId}/profile
```

---

## 💡 Conseils Postman

### Sauvegarder le Token

1. **Variables d'environnement:**
   - Créez une variable `jwt_token`
   - Après login, copiez le token manuellement
   - Utilisez `{{jwt_token}}` dans le header Authorization

2. **Tests automatiques:**
   Dans l'onglet "Tests" de la requête login:
   ```javascript
   pm.environment.set("jwt_token", pm.response.json().token);
   pm.environment.set("user_id", pm.response.json().user.id);
   ```

### Collection Postman

Créez une collection avec toutes ces requêtes organisées en dossiers:
```
📁 MERN TP9
  📁 Auth
    - Register
    - Login
  📁 Courses
    - Get All Courses
    - Get Course by ID
    - Create Course
    - Enroll in Course
  📁 Reviews
    - Get Course Reviews
    - Add Review
    - Get My Reviews
  📁 Profile
    - Get Profile
    - Create Profile
    - Update Profile
```

---

## ❌ Erreurs Courantes

### 401 Unauthorized
**Cause:** Token manquant ou invalide
**Solution:** Vérifiez le header `Authorization: Bearer TOKEN`

### 404 Not Found
**Cause:** Route ou ID incorrect
**Solution:** Vérifiez l'URL et les IDs utilisés

### 500 Server Error
**Cause:** Erreur côté serveur (souvent MongoDB)
**Solution:** Vérifiez les logs du backend et que MongoDB fonctionne

### ValidationError
**Cause:** Données manquantes ou incorrectes
**Solution:** Vérifiez que tous les champs requis sont présents

---

## 🤖 AI Features (Powered by Gemini)

### 🔒 1. Analyser les Reviews d'un Cours (Protected)

**Requête:**
```
POST http://localhost:3000/api/ai/analyze-reviews/:courseId
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
```

**Description:** Génère un rapport d'analyse intelligent des reviews d'un cours

**Pas de Body nécessaire**

**Réponse Attendue (200 OK):**
```json
{
  "success": true,
  "data": {
    "courseTitle": "Introduction à React",
    "reviewCount": 5,
    "analysis": "## Sentiment Général\nPositif - Les étudiants apprécient...\n\n## Note Moyenne Calculée\n4.2/5\n\n## Points Forts (Top 3)\n1. Explications claires\n2. Bon rythme\n3. Exemples pratiques\n\n## Points d'Amélioration (Top 3)\n1. Plus d'exercices\n2. Vidéos plus courtes\n3. Ajout de quiz\n\n## Recommandations pour l'Instructeur\n...\n\n## Résumé en une phrase\n..."
  }
}
```

**⚠️ Prérequis:** Le cours doit avoir au moins 1 review

---

### 🔒 2. Générer une Description de Cours (Protected)

**Requête:**
```
POST http://localhost:3000/api/ai/generate-description
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
```

**Body (JSON):**
```json
{
  "title": "Python pour Data Science",
  "instructor": "Dr. Marie Laurent",
  "keywords": ["Python", "Machine Learning", "Pandas", "NumPy", "Visualisation"]
}
```

**Exemple 2 - Cours de Design:**
```json
{
  "title": "UI/UX Design Moderne",
  "instructor": "Sophie Martin",
  "keywords": ["Figma", "Design System", "Prototypage", "User Research"]
}
```

**Exemple 3 - Cours de Développement:**
```json
{
  "title": "Microservices avec Node.js",
  "instructor": "Thomas Dubois",
  "keywords": ["Microservices", "Docker", "Kubernetes", "API Gateway", "Event-Driven"]
}
```

**Réponse Attendue (200 OK):**
```json
{
  "success": true,
  "data": {
    "description": "Plongez dans l'univers passionnant de la Data Science avec Python ! Dans ce cours complet, vous maîtriserez les bibliothèques essentielles comme Pandas et NumPy pour manipuler et analyser des données avec aisance.\n\nVous apprendrez à créer des visualisations percutantes et à construire vos premiers modèles de Machine Learning. Que vous soyez débutant curieux ou professionnel cherchant à élargir ses compétences, ce cours vous donnera les outils pour transformer les données en insights actionables.\n\nRejoignez-nous dès aujourd'hui et commencez votre voyage vers l'expertise en Data Science !"
  }
}
```

---

### 🔓 3. Suggérer des Cours Similaires (Public)

**Requête:**
```
POST http://localhost:3000/api/ai/similar-courses/:courseId
```

**Headers:**
```
Content-Type: application/json
```

**Pas de Body nécessaire**

**Réponse Attendue (200 OK):**
```json
{
  "success": true,
  "data": {
    "referenceCourse": "Introduction à React",
    "suggestions": "1. Cours 7 (React Router & Navigation) - Ce cours approfondit un aspect spécifique de React en enseignant la navigation, ce qui est une suite logique après avoir maîtrisé les bases de React.\n\n2. Cours 8 (Redux State Management) - Redux est un outil essentiel pour gérer l'état dans les applications React complexes, rendant ce cours très pertinent pour ceux qui veulent aller plus loin avec React.\n\n3. Cours 1 (Node.js Avancé) - Node.js et React sont souvent utilisés ensemble dans le développement full-stack moderne, ce qui rend ces technologies complémentaires.",
    "availableCourses": [
      { "id": "657...", "title": "Node.js Avancé" },
      { "id": "658...", "title": "Redux State Management" }
    ]
  }
}
```

---

### 🔒 4. Générer une Bio Professionnelle (Protected)

**Requête:**
```
POST http://localhost:3000/api/ai/generate-bio
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
```

**Body - Exemple 1 (Développeur):**
```json
{
  "interests": "Développement web full-stack, React, Node.js, architecture cloud",
  "experience": "5 ans d'expérience en développement d'applications web",
  "goals": "Devenir architecte solutions et contribuer à des projets open-source"
}
```

**Body - Exemple 2 (Designer):**
```json
{
  "interests": "UI/UX Design, Design Systems, Accessibilité, Motion Design",
  "experience": "3 ans en tant que designer produit dans des startups tech",
  "goals": "Créer des expériences utilisateur inclusives et mémorables"
}
```

**Body - Exemple 3 (Data Scientist):**
```json
{
  "interests": "Machine Learning, Data Visualization, Python, Statistics",
  "experience": "Diplômé en sciences des données, 2 ans d'expérience en analyse de données",
  "goals": "Résoudre des problèmes business complexes avec l'IA"
}
```

**Body - Exemple 4 (Étudiant):**
```json
{
  "interests": "Programmation, jeux vidéo, intelligence artificielle",
  "experience": "Étudiant en informatique passionné par le code"
}
```

**Réponse Attendue (200 OK):**
```json
{
  "success": true,
  "data": {
    "bio": "Je suis un développeur full-stack passionné avec 5 ans d'expérience dans la création d'applications web modernes utilisant React et Node.js. Mon expertise s'étend à l'architecture cloud et je suis toujours à la recherche de nouvelles technologies pour améliorer mes compétences. Mon objectif est de devenir architecte solutions tout en contribuant activement à la communauté open-source. J'aime partager mes connaissances et collaborer sur des projets innovants."
  }
}
```

---

### 🔒 5. Obtenir des Insights sur la Plateforme (Protected - Admin)

**Requête:**
```
GET http://localhost:3000/api/ai/platform-insights
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
```

**Pas de Body nécessaire**

**Réponse Attendue (200 OK):**
```json
{
  "success": true,
  "data": {
    "stats": {
      "totalCourses": 12,
      "totalReviews": 25,
      "averageRating": "4.32"
    },
    "insights": "## Santé Générale de la Plateforme\nLa plateforme est en bonne santé avec une note moyenne de 4.32/5, indiquant une satisfaction élevée des étudiants.\n\n## Tendances Observées\n1. Les cours de développement web (React, Node.js) génèrent le plus d'engagement\n2. Les cours d'introduction obtiennent de meilleures notes que les cours avancés\n3. Les étudiants apprécient particulièrement les exemples pratiques\n\n## Cours Populaires\n- Introduction à React (8 reviews)\n- Node.js Avancé (6 reviews)\n- JavaScript ES6+ (5 reviews)\n\n## Recommandations Stratégiques\n1. Créer plus de contenu intermédiaire pour combler le gap entre débutant et avancé\n2. Standardiser l'inclusion d'exemples pratiques dans tous les cours\n3. Développer une série de cours complémentaires pour créer des parcours d'apprentissage complets"
  }
}
```

---

## 🧪 Workflow Complet de Test AI

### Prérequis
1. Au moins 10-12 cours créés
2. Au moins 3-5 reviews sur différents cours
3. Token JWT valide

### Scénario de Test Complet

#### **Étape 1: Créer des Reviews pour Tester l'Analyse**
```
POST /api/courses/{courseId1}/reviews
Body:
{
  "rating": 5,
  "comment": "Excellent cours! Les explications sont très claires et les exemples pratiques."
}

POST /api/courses/{courseId1}/reviews
Body:
{
  "rating": 4,
  "comment": "Très bon contenu, mais j'aurais aimé plus d'exercices."
}

POST /api/courses/{courseId1}/reviews
Body:
{
  "rating": 5,
  "comment": "Le meilleur cours sur React que j'ai suivi. L'instructeur maîtrise vraiment son sujet."
}
```

#### **Étape 2: Analyser les Reviews**
```
POST /api/ai/analyze-reviews/{courseId1}
```
→ Obtenir un rapport d'analyse complet

#### **Étape 3: Générer une Description**
```
POST /api/ai/generate-description
Body:
{
  "title": "Advanced TypeScript Patterns",
  "instructor": "John Doe",
  "keywords": ["TypeScript", "Design Patterns", "Advanced Types", "Generics"]
}
```

#### **Étape 4: Trouver des Cours Similaires**
```
POST /api/ai/similar-courses/{courseId1}
```

#### **Étape 5: Générer une Bio**
```
POST /api/ai/generate-bio
Body:
{
  "interests": "Full-stack development, AI, Cloud Computing",
  "experience": "4 years as software engineer",
  "goals": "Build scalable applications"
}
```

#### **Étape 6: Consulter les Insights Globaux**
```
GET /api/ai/platform-insights
```

---

## 📦 Collection Postman Complète - Structure Suggérée

```
📁 MERN TP9 - Complete API
  📁 1. Authentication
    - 1.1 Register
    - 1.2 Login
  
  📁 2. Courses
    - 2.1 Get All Courses
    - 2.2 Get Course by ID
    - 2.3 Create Course
    - 2.4 Enroll in Course
    - 2.5 Get Course Students
  
  📁 3. Reviews
    - 3.1 Get Course Reviews
    - 3.2 Add Review to Course
    - 3.3 Get My Reviews
  
  📁 4. User Profile
    - 4.1 Get All Users
    - 4.2 Get User by ID
    - 4.3 Get My Courses
    - 4.4 Create Profile
    - 4.5 Get Profile
    - 4.6 Update Profile
  
  📁 5. AI Features 🤖
    - 5.1 Analyze Course Reviews
    - 5.2 Generate Course Description
    - 5.3 Suggest Similar Courses
    - 5.4 Generate Professional Bio
    - 5.5 Get Platform Insights
```

---

## 🎨 Exemples de Données pour Tests Complets

### Données de Test - Reviews Variées

**Review Positive:**
```json
{
  "rating": 5,
  "comment": "Ce cours a transformé ma compréhension de React. L'instructeur explique les concepts complexes de manière simple et les exercices sont excellents."
}
```

**Review Neutre:**
```json
{
  "rating": 3,
  "comment": "Le contenu est correct mais j'attendais plus d'exemples concrets. Bon pour débuter."
}
```

**Review Constructive:**
```json
{
  "rating": 4,
  "comment": "Très bon cours dans l'ensemble. J'aurais apprécié des quiz à la fin de chaque section et peut-être un projet final plus ambitieux."
}
```

**Review Négative:**
```json
{
  "rating": 2,
  "comment": "Le rythme est trop rapide pour les débutants. Certains concepts mériteraient plus d'explications."
}
```

**Review Enthousiaste:**
```json
{
  "rating": 5,
  "comment": "Incroyable! Non seulement j'ai appris React, mais j'ai aussi compris les meilleures pratiques du développement moderne. Hautement recommandé!"
}
```

### Données de Test - Cours Variés pour AI

**Cours 1: IA et Machine Learning**
```json
{
  "title": "Intelligence Artificielle pour Débutants",
  "description": "Découvrez les fondamentaux de l'IA et du Machine Learning",
  "instructor": "Dr. Alice Chen"
}
```

**Cours 2: Cybersécurité**
```json
{
  "title": "Cybersécurité Essentielles",
  "description": "Protégez vos applications contre les menaces modernes",
  "instructor": "Marc Dupont"
}
```

**Cours 3: DevOps**
```json
{
  "title": "DevOps avec CI/CD",
  "description": "Automatisez vos déploiements et améliorez votre workflow",
  "instructor": "Sarah Johnson"
}
```

---

## ✅ Checklist Complète

**Backend Setup:**
- [ ] Backend démarré sur port 3000
- [ ] MongoDB connecté
- [ ] Variables d'environnement configurées (GEMINI_API_KEY)

**Authentification:**
- [ ] Compte créé via `/auth/register`
- [ ] Token JWT obtenu et sauvegardé
- [ ] Token testé sur route protégée

**Données de Base:**
- [ ] Au moins 12 cours créés (pour tester la pagination et les suggestions)
- [ ] Au moins 5 utilisateurs créés
- [ ] Inscription à plusieurs cours
- [ ] Au moins 10 reviews ajoutées sur différents cours
- [ ] Profils créés et modifiés

**Tests AI Features:**
- [ ] Analyse de reviews testée sur un cours avec plusieurs avis
- [ ] Génération de description testée avec différents keywords
- [ ] Suggestions de cours similaires testées
- [ ] Génération de bio testée avec différents profils
- [ ] Insights plateforme consultés

**Postman Configuration:**
- [ ] Environment variables configurées (jwt_token, user_id, base_url)
- [ ] Collection organisée par fonctionnalités
- [ ] Tests automatiques configurés pour login

---

## 🔧 Configuration Postman - Variables d'Environnement

Créez un environnement `MERN TP9 - Dev` avec:

| Variable | Initial Value | Current Value |
|----------|---------------|---------------|
| `base_url` | `http://localhost:3000/api` | `http://localhost:3000/api` |
| `jwt_token` | `` | (auto-filled after login) |
| `user_id` | `` | (auto-filled after login) |
| `test_course_id` | `` | (manually set) |

### Script de Test Auto pour Login

Dans l'onglet **Tests** de votre requête `POST /api/auth/login`:

```javascript
// Sauvegarder automatiquement le token et user_id
if (pm.response.code === 200) {
    const response = pm.response.json();
    pm.environment.set("jwt_token", response.token);
    pm.environment.set("user_id", response.user.id);
    console.log("✅ Token saved:", response.token);
}
```

Dans l'onglet **Tests** de votre requête `POST /api/auth/register`:

```javascript
// Sauvegarder automatiquement le token et user_id
if (pm.response.code === 201) {
    const response = pm.response.json();
    pm.environment.set("jwt_token", response.token);
    pm.environment.set("user_id", response.user._id);
    console.log("✅ User registered and token saved");
}
```

---

## 🚨 Erreurs Courantes - AI Features

### 400 Bad Request - "Aucune review disponible"
**Cause:** Le cours n'a aucune review  
**Solution:** Ajoutez au moins 1 review au cours avant l'analyse

### 400 Bad Request - "Titre et instructeur requis"
**Cause:** Body incomplet pour generate-description  
**Solution:** Vérifiez que `title` et `instructor` sont présents

### 500 Server Error - AI Features
**Cause:** API Key Gemini manquante ou invalide  
**Solution:** Vérifiez `.env` → `GEMINI_API_KEY=your_key_here`

### 404 Not Found - "Cours non trouvé"
**Cause:** courseId invalide  
**Solution:** Vérifiez que l'ID du cours existe (utilisez GET /api/courses)

---

**🎉 Vous êtes maintenant prêt à tester TOUTE l'API, y compris les fonctionnalités IA avec Postman!**

---

## 📝 Notes Importantes

1. **Gemini API**: Les fonctionnalités IA nécessitent une clé API Gemini valide dans votre `.env`
2. **Performance**: Les requêtes AI peuvent prendre 2-5 secondes (appel à l'API Gemini)
3. **Qualité**: Plus vous avez de reviews/cours, meilleure sera la qualité des insights IA
4. **Rate Limiting**: L'API Gemini peut avoir des limites de taux, espacez vos tests
5. **Langue**: Les réponses IA sont en français par défaut selon les prompts
