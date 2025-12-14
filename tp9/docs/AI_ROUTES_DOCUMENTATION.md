# 📚 Documentation des Routes IA

Ce document décrit toutes les routes IA disponibles dans l'API backend.

## 🔐 Routes Protégées (Authentification requise)

### 1. Analyser les Reviews d'un Cours
```
POST /api/ai/analyze-reviews/:courseId
```

**Description:** Génère un rapport d'analyse IA des reviews d'un cours spécifique.

**Paramètres URL:**
- `courseId` (string): ID du cours à analyser

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Réponse succès (200):**
```json
{
  "success": true,
  "data": {
    "courseTitle": "Nom du cours",
    "reviewCount": 5,
    "analysis": "## Sentiment Général\nPositif..."
  }
}
```

---

### 2. Générer une Description de Cours
```
POST /api/ai/generate-description
```

**Description:** Génère une description attractive pour un cours.

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Body:**
```json
{
  "title": "Titre du cours",
  "instructor": "Nom de l'instructeur",
  "keywords": ["mot-clé1", "mot-clé2"]
}
```

**Réponse succès (200):**
```json
{
  "success": true,
  "data": {
    "description": "Description générée..."
  }
}
```

---

### 3. Générer une Bio Professionnelle
```
POST /api/ai/generate-bio
```

**Description:** Génère une bio professionnelle personnalisée pour un utilisateur.

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Body:**
```json
{
  "interests": "développement web, machine learning",
  "experience": "3 ans en développement",
  "goals": "devenir expert full-stack"
}
```

**Réponse succès (200):**
```json
{
  "success": true,
  "data": {
    "bio": "Bio générée à la première personne..."
  }
}
```

---

### 4. Dashboard Admin - Insights Plateforme
```
GET /api/ai/platform-insights
```

**Description:** Génère un rapport complet d'insights IA sur l'ensemble de la plateforme.

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Réponse succès (200):**
```json
{
  "success": true,
  "data": {
    "stats": {
      "totalCourses": 10,
      "totalUsers": 50,
      "totalReviews": 100,
      "averageRating": "4.25"
    },
    "insights": "## 📊 Santé Générale de la Plateforme...",
    "generatedAt": "2024-12-09T14:30:00.000Z"
  }
}
```

---

### 5. Générer un Quiz à partir d'un Cours
```
POST /api/ai/generate-quiz/:courseId
```

**Description:** Génère un quiz à choix multiples basé sur le contenu d'un cours.

**Paramètres URL:**
- `courseId` (string): ID du cours

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Body:**
```json
{
  "numberOfQuestions": 5,
  "difficulty": "moyen"
}
```

**Valeurs possibles pour difficulty:** `facile`, `moyen`, `difficile`

**Réponse succès (200):**
```json
{
  "success": true,
  "data": {
    "quizTitle": "Quiz: Introduction à React",
    "courseTitle": "React pour débutants",
    "difficulty": "moyen",
    "questions": [
      {
        "id": 1,
        "question": "Qu'est-ce que React ?",
        "options": ["Une base de données", "Une librairie JavaScript", "Un langage de programmation", "Un système d'exploitation"],
        "correctAnswer": 1,
        "explanation": "React est une librairie JavaScript pour créer des interfaces utilisateur."
      }
    ]
  }
}
```

---

### 6. Suggestions de Cours Personnalisés
```
GET /api/ai/personalized-courses/:userId
```

**Description:** Génère des suggestions de cours personnalisés basées sur le profil et les inscriptions de l'utilisateur.

**Paramètres URL:**
- `userId` (string): ID de l'utilisateur

**Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```

**Réponse succès (200):**
```json
{
  "success": true,
  "data": {
    "userName": "john_doe",
    "recommendations": [
      {
        "courseIndex": 1,
        "courseTitle": "Node.js Avancé",
        "courseId": "abc123",
        "instructor": "Jane Smith",
        "description": "Apprenez Node.js en profondeur...",
        "matchScore": 95,
        "reason": "Ce cours complète parfaitement vos connaissances en JavaScript",
        "benefits": ["Maîtrise du backend", "Création d'APIs REST"]
      }
    ],
    "generalAdvice": "Continuez sur votre lancée en explorant le développement full-stack!"
  }
}
```

---

## 🌐 Routes Publiques (Pas d'authentification requise)

### 7. Suggestions de Cours Similaires
```
POST /api/ai/similar-courses/:courseId
```

**Description:** Trouve et explique les cours similaires à un cours donné.

**Paramètres URL:**
- `courseId` (string): ID du cours de référence

**Réponse succès (200):**
```json
{
  "success": true,
  "data": {
    "referenceCourse": "React pour débutants",
    "suggestions": "1. JavaScript ES6+ - Les fondamentaux de JS...",
    "availableCourses": [
      { "id": "def456", "title": "JavaScript ES6+" }
    ]
  }
}
```

---

### 8. Chatbot IA
```
POST /api/ai/chatbot
```

**Description:** Répond aux questions des utilisateurs sur les cours et la plateforme.

**Body:**
```json
{
  "question": "Quels cours recommandez-vous pour un débutant ?",
  "courseId": "abc123"
}
```

**Note:** Le `courseId` est optionnel. S'il est fourni, le chatbot répondra dans le contexte de ce cours spécifique.

**Réponse succès (200):**
```json
{
  "success": true,
  "data": {
    "question": "Quels cours recommandez-vous pour un débutant ?",
    "response": "👋 Excellente question ! Pour commencer, je vous recommande...",
    "courseId": null
  }
}
```

---

## 🔧 Configuration

### Variables d'environnement requises
```env
GEMINI_API_KEY=votre_clé_api_gemini
```

### Modèle utilisé
- **Gemini 2.5 Flash** - Modèle optimisé pour les réponses rapides et de qualité.

---

## ⚠️ Codes d'erreur courants

| Code | Message | Description |
|------|---------|-------------|
| 400 | "Titre et instructeur requis" | Paramètres manquants |
| 400 | "Question requise" | Question non fournie au chatbot |
| 401 | "Non autorisé" | Token d'authentification manquant ou invalide |
| 404 | "Cours non trouvé" | ID de cours invalide |
| 404 | "Utilisateur non trouvé" | ID d'utilisateur invalide |
| 500 | "Erreur lors de l'analyse" | Erreur côté serveur ou API Gemini |

---

## 📊 Limites de l'API

- **Rate limiting:** Dépend des limites de l'API Gemini
- **Taille des requêtes:** Les descriptions et contenus sont tronqués si nécessaire
- **Temps de réponse:** Entre 2-10 secondes selon la complexité de la requête
