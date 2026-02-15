# AI Resume Builder

A full-stack application to build professional resumes using AI.

## 🚀 Tech Stack
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **AI**: Google Gemini API

## 🛠️ Setup & Run Locally

### 1. Backend (Server)
```bash
cd server
npm install
npm start
```
*Creates server at `http://localhost:3000`*

### 2. Frontend (Client)
```bash
cd client
npm install
npm run dev
```
*Starts client at `http://localhost:5173`*

## 🌍 Environment Variables
Create `.env` files in both folders:

**Server (`server/.env`)**:
```bash
PORT=3000
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_gemini_key
```

**Client (`client/.env`)**:
```bash
VITE_BASE_URL=http://localhost:3000
```

## ☁️ Deployment
- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render
