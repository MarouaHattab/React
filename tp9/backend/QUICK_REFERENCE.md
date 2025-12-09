# 🚀 Quick Reference - Testing API with Postman

## 📦 Files Created

1. **POSTMAN_GUIDE.md** - Complete guide with all endpoints and AI features
2. **POSTMAN_TEST_DATA.json** - All test data in structured JSON format
3. **MERN_TP9_COMPLETE.postman_collection.json** - Ready-to-import Postman collection

## 🏃 Quick Start

### Step 1: Import into Postman

1. Open Postman
2. Click **Import** button
3. Import file: `MERN_TP9_COMPLETE.postman_collection.json`
4. Create environment "MERN TP9 - Dev" with these variables:
   - `base_url` = `http://localhost:3000/api`
   - `jwt_token` = (leave empty)
   - `user_id` = (leave empty)  
   - `courseId` = (leave empty)

### Step 2: Start Your Backend

```bash
# Navigate to backend folder
cd backend

# Start server
npm start
```

Server should run on: `http://localhost:3000`

### Step 3: Test Authentication

1. **Register** → Automatically saves token
2. **Login** → Automatically saves token
3. All other requests use the saved token

---

## 📋 All API Endpoints Summary

### 🔓 Public Routes (No Token Required)

```
GET    /api/courses                      # List all courses
GET    /api/courses/:id                  # Get course details
GET    /api/courses/:id/reviews          # Get course reviews
GET    /api/courses/:id/students         # Get enrolled students
POST   /api/ai/similar-courses/:id       # Get similar courses (AI)
```

### 🔐 Protected Routes (Token Required)

**Authentication:**
```
POST   /api/auth/register                # Create account
POST   /api/auth/login                   # Login
```

**Courses:**
```
POST   /api/courses                      # Create course
POST   /api/courses/:id/enroll           # Enroll in course
```

**Reviews:**
```
POST   /api/courses/:id/reviews          # Add review
GET    /api/users/:userId/reviews        # Get my reviews
```

**Profile:**
```
GET    /api/users                        # List all users
GET    /api/users/:id                    # Get user by ID
GET    /api/users/:userId/courses        # Get my courses
POST   /api/users/:userId/profile        # Create profile
GET    /api/users/:userId/profile        # Get profile
PUT    /api/users/:userId/profile        # Update profile
```

**AI Features 🤖:**
```
POST   /api/ai/analyze-reviews/:id       # Analyze course reviews (AI)
POST   /api/ai/generate-description      # Generate course description (AI)
POST   /api/ai/generate-bio              # Generate professional bio (AI)
GET    /api/ai/platform-insights         # Get platform insights (AI)
```

---

## 🎯 Quick Test Scenarios

### Scenario 1: Complete User Journey

```javascript
// 1. Register
POST /api/auth/register
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

// 2. Browse courses
GET /api/courses

// 3. Enroll in a course
POST /api/courses/{courseId}/enroll

// 4. Add review
POST /api/courses/{courseId}/reviews
{
  "rating": 5,
  "comment": "Great course!"
}

// 5. Create profile
POST /api/users/{userId}/profile
{
  "bio": "Passionate developer",
  "website": "https://mysite.com"
}
```

### Scenario 2: AI Features Testing

```javascript
// 1. Create course with AI description
POST /api/ai/generate-description
{
  "title": "Python for Data Science",
  "instructor": "Dr. Smith",
  "keywords": ["Python", "ML", "Pandas"]
}

// 2. Use generated description to create course
POST /api/courses
{
  "title": "Python for Data Science",
  "description": "<use AI generated description>",
  "instructor": "Dr. Smith"
}

// 3. Add multiple reviews to the course
POST /api/courses/{courseId}/reviews (x5)

// 4. Analyze reviews with AI
POST /api/ai/analyze-reviews/{courseId}

// 5. Find similar courses
POST /api/ai/similar-courses/{courseId}

// 6. Generate bio for instructor
POST /api/ai/generate-bio
{
  "interests": "Data Science, AI",
  "experience": "10 years teaching",
  "goals": "Inspire next generation"
}

// 7. Get platform insights
GET /api/ai/platform-insights
```

---

## 📊 Sample JSON Bodies

### Create Multiple Courses (Copy & Paste)

**Course 1:**
```json
{"title":"Introduction à React","description":"Apprenez les bases de React","instructor":"John Doe"}
```

**Course 2:**
```json
{"title":"Node.js Avancé","description":"Maîtrisez Node.js et Express","instructor":"Jane Smith"}
```

**Course 3:**
```json
{"title":"MongoDB pour Débutants","description":"Bases de données NoSQL","instructor":"Bob Johnson"}
```

**Course 4:**
```json
{"title":"TypeScript Essentiel","description":"JavaScript avec types statiques","instructor":"Alice Brown"}
```

**Course 5:**
```json
{"title":"Python pour Data Science","description":"Analyse de données avec Python","instructor":"Dr. Marie"}
```

### Add Multiple Reviews (Copy & Paste)

**Review 1 (Positive):**
```json
{"rating":5,"comment":"Excellent cours! Très bien expliqué."}
```

**Review 2 (Good):**
```json
{"rating":4,"comment":"Bon cours mais pourrait avoir plus d'exercices."}
```

**Review 3 (Positive):**
```json
{"rating":5,"comment":"Le meilleur cours que j'ai suivi!"}
```

**Review 4 (Neutral):**
```json
{"rating":3,"comment":"Correct, mais manque de profondeur."}
```

**Review 5 (Good):**
```json
{"rating":4,"comment":"Très bien structuré et pédagogique."}
```

### AI: Generate Description (Various Topics)

**Data Science:**
```json
{"title":"Python pour Data Science","instructor":"Dr. Marie Laurent","keywords":["Python","Machine Learning","Pandas","NumPy"]}
```

**UI/UX:**
```json
{"title":"UI/UX Design Moderne","instructor":"Sophie Martin","keywords":["Figma","Design System","Prototypage"]}
```

**DevOps:**
```json
{"title":"DevOps avec CI/CD","instructor":"Thomas Dubois","keywords":["Docker","Kubernetes","Jenkins","Automation"]}
```

### AI: Generate Bio (Various Profiles)

**Developer:**
```json
{"interests":"Full-stack development, React, Node.js","experience":"5 ans d'expérience","goals":"Devenir architecte solutions"}
```

**Designer:**
```json
{"interests":"UI/UX, Design Systems, Accessibilité","experience":"3 ans designer produit","goals":"Créer des expériences mémorables"}
```

**Data Scientist:**
```json
{"interests":"Machine Learning, Data Viz, Python","experience":"2 ans analyse de données","goals":"Résoudre des problèmes complexes avec l'IA"}
```

---

## ⚡ Postman Pro Tips

### Auto-Save Token

In **Login** request → Tests tab:
```javascript
if (pm.response.code === 200) {
    const response = pm.response.json();
    pm.environment.set("jwt_token", response.token);
    pm.environment.set("user_id", response.user.id);
}
```

### Auto-Save Course ID

In **Create Course** request → Tests tab:
```javascript
if (pm.response.code === 201) {
    const response = pm.response.json();
    pm.environment.set("courseId", response._id);
}
```

### Use Environment Variables

Instead of hardcoding, use:
- `{{base_url}}/courses`
- `{{jwt_token}}` in Authorization header
- `{{user_id}}` in URL path
- `{{courseId}}` in URL path

---

## 🔍 Testing Checklist

### Basic Features
- [ ] Register new user
- [ ] Login and get token
- [ ] Create 10+ courses
- [ ] Enroll in courses
- [ ] Add reviews to courses
- [ ] Create/update profile
- [ ] Get my courses
- [ ] Get my reviews

### AI Features Testing
- [ ] Generate course descriptions (test 3-5 different topics)
- [ ] Analyze reviews (ensure course has 3+ reviews first)
- [ ] Get similar course suggestions
- [ ] Generate professional bios (test different profiles)
- [ ] Get platform insights (ensure you have data first)

### Error Handling
- [ ] Test without token (should get 401)
- [ ] Test with invalid IDs (should get 404)
- [ ] Test AI features without GEMINI_API_KEY (should get 500)
- [ ] Test analyze-reviews on course with no reviews (should get 400)

---

## 🚨 Common Issues & Solutions

### 401 Unauthorized
- **Problem:** Token missing or expired
- **Solution:** Re-login to get fresh token

### 404 Not Found
- **Problem:** Invalid course/user ID
- **Solution:** Use GET /api/courses to get valid IDs

### 500 Server Error (AI Routes)
- **Problem:** GEMINI_API_KEY not configured
- **Solution:** Add to `.env` file: `GEMINI_API_KEY=your_key_here`

### 400 Bad Request - "Aucune review disponible"
- **Problem:** Trying to analyze course with no reviews
- **Solution:** Add at least 1 review first

### Connection Refused
- **Problem:** Backend not running
- **Solution:** Run `npm start` in backend folder

---

## 📚 All Test Data Available

See `POSTMAN_TEST_DATA.json` for:
- ✅ 5 sample users
- ✅ 15 sample courses
- ✅ 10 sample reviews (varied ratings)
- ✅ 5 sample profiles
- ✅ 8 AI description prompts
- ✅ 8 AI bio prompts
- ✅ 4 complete test scenarios

---

## 🎯 Expected Response Times

- **Standard API calls:** < 100ms
- **AI features:** 2-5 seconds (Gemini API call)
- **Platform insights:** 3-7 seconds (analyzing all data)

---

## 📖 Full Documentation

For complete detailed guide, see: **POSTMAN_GUIDE.md**

---

**Happy Testing! 🎉**
