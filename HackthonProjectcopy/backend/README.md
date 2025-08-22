# MediCare Backend Authentication System

## 🚀 Setup Instructions

### 1. MongoDB Setup
Make sure MongoDB is running on your system. If not installed:
- Download from: https://www.mongodb.com/try/download/community
- Or use MongoDB Atlas (cloud service)

### 2. Environment Variables
Create a `.env` file in the backend directory with:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/medicare

# JWT Secret (Change this in production!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Ports
AUTH_PORT=5001
PORT=5000

# Gemini API Key (if you have one)
GEMINI_API_KEY=your-gemini-api-key-here
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Servers

#### Option 1: Start both servers together
```bash
npm run dev
```

#### Option 2: Start servers separately
```bash
# Terminal 1 - Main server (Gemini API)
npm start

# Terminal 2 - Authentication server
npm run auth
```

### 5. Server URLs
- **Main Server (Gemini API)**: http://localhost:5000
- **Authentication Server**: http://localhost:5001
- **Frontend**: http://localhost:5174 (or whatever Vite assigns)

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token
- `GET /api/auth/profile` - Get user profile

### Main API
- `POST /api/gpt` - Gemini AI integration

## 📁 File Structure
```
backend/
├── authServer.js          # Authentication server
├── server1/
│   └── server1.js        # Main server (Gemini API)
├── models/
│   └── User.js           # User model
├── package.json
└── .env                  # Environment variables
```

## 🎯 Features
- ✅ User registration and login
- ✅ Password hashing with bcrypt
- ✅ JWT token authentication
- ✅ MongoDB integration
- ✅ Protected routes
- ✅ Error handling and validation

## 🔒 Security Features
- Passwords are hashed using bcrypt (12 salt rounds)
- JWT tokens for session management
- Input validation and sanitization
- CORS enabled for frontend integration

## 🚨 Important Notes
- Change the JWT_SECRET in production
- Use environment variables for sensitive data
- Ensure MongoDB is running before starting servers
- Frontend must be running on the correct port for CORS
