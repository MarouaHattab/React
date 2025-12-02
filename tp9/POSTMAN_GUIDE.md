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

## ✅ Checklist

- [ ] Backend démarré sur port 3000
- [ ] MongoDB connecté
- [ ] Compte créé via `/auth/register`
- [ ] Token JWT obtenu
- [ ] Token ajouté dans headers pour routes protégées
- [ ] Au moins 10 cours créés (pour tester la pagination)
- [ ] Inscription à quelques cours
- [ ] Reviews ajoutées
- [ ] Profil créé et modifié

---

**🎉 Vous êtes prêt à tester toute l'API avec Postman!**
