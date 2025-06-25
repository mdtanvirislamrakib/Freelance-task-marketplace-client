
# 🚀 TaskHub

A freelance task marketplace platform connecting clients and freelancers.

🔗 **Live Demo**: [https://freelance-task-matketplace.netlify.app/](https://freelance-task-matketplace.netlify.app/)  
🔗 **API Server**: [https://freelance-task-marketplace-server-peach.vercel.app/](https://freelance-task-marketplace-server-peach.vercel.app/)   

🔗 **API Code Repo**: [https://github.com/mdtanvirislamrakib/Freelance-task-marketplace-server](https://github.com/mdtanvirislamrakib/Freelance-task-marketplace-server)

---

## 📌 Project Overview

**TaskHub** is a full-stack web application that allows users to post freelance tasks, bid on them, and manage task-based collaborations. It provides dynamic task listings, real-time bid updates, secure authentication, and an engaging user dashboard — all wrapped in a sleek, responsive interface.

---

## 🔑 Key Features

- **🔐 User Authentication**
  - Firebase Email/Password login
  - Google OAuth support
  - Real-time toast feedback and password validation

- **🛠 Task Management (CRUD)**
  - Add, edit, delete, and view freelance tasks
  - Input fields for category, deadline, budget, and description

- **📂 Task Browsing & Filtering**
  - View public task listings with category filtering
  - Individual task detail page
  - Protected routes for task management

- **📋 My Dashboard**
  - "My Posted Tasks" page to manage user-submitted tasks
  - View, update, and delete tasks
  - See all bids received per task

- **📈 Dynamic Bidding System**
  - Real-time bid counter displayed on each task
  - Authenticated users can place bids

- **🎨 Modern UI/UX**
  - Built with React + Tailwind CSS
  - Animations using GSAP, AOS, Swiper
  - Responsive layout optimized for all devices

- **🌙 Theme Toggle**
  - Light/Dark mode switcher for user preference

- **🔐 Protected Routing**
  - Only authenticated users can access task management routes

---

## 🧰 Tech Stack

### 🖥 Frontend
- React.js
- TailwindCSS
- React Router
- React Hot Toast
- Swiper.js
- GSAP (Animations)
- AOS (Animate on Scroll)
- React Icons / Lucide React
- React Tooltip
- SweetAlert2
- React Loader Spinner
- React Simple Typewriter

### 🌐 Backend
- Firebase Authentication
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)

### 🚀 Deployment
- **Client:** Netlify  
- **Server:** Vercel

---

## 🧪 Run Locally (Instructions)

### Step 1: Clone Repository
```bash
git clone https://github.com/mdtanvirislamrakib/Freelance-task-marketplace-client
```

### Step 2: Frontend Setup
```bash
cd taskhub/client
npm install
npm run dev
```

### Step 3: Backend Setup
```bash
cd ../server
npm install
npm run start
```

### Step 4: Environment Variables

Create `.env` files in both `client` and `server` folders.

**Frontend (.env):**
```
VITE_API_URL=https://your-backend-url.com
VITE_FIREBASE_API_KEY=your_api_key
...other Firebase details...
```

**Backend (.env):**
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

---

## 📫 Contact

**MD. Tanvir Islam Rakib**  
BGIFT Institute of Science & Technology  
📧 Email: mdtanvirislamrakib7@gmail.com

---

> ⭐ If you found this project helpful, please consider giving it a star!
