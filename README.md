# TaskHub

[Live Demo](https://freelance-task-matketplace.netlify.app/) | [API Server](https://freelance-task-marketplace-server-peach.vercel.app/)

---

## Project Overview

TaskHub is a full-stack platform designed to connect clients with freelancers for small tasks. It enables users to post freelance jobs, bid on tasks, and manage their projects with ease. The system offers secure authentication, dynamic task browsing, and responsive design to ensure seamless user experience across all devices.

---

## Key Features

- **User Authentication**  
  Secure email/password registration and login with Google OAuth, complete with password strength validation and real-time toast notifications.

- **Task CRUD Operations**  
  Authenticated users can add, update, delete, and view freelance tasks with details like category, deadline, budget, and description.

- **Dynamic Task Browsing**  
  Publicly browse all tasks with filtering and detailed task views. Private routes ensure only authenticated users can manage their own tasks.

- **User Dashboard**  
  "My Posted Tasks" page shows user-specific tasks with options to update, delete, and view bids.

- **Bid Counting & Interaction**  
  Bidding on tasks increases bid count dynamically, shown prominently on the task details page.

- **Responsive & Interactive UI**  
  Built with React and TailwindCSS, including animations using GSAP, AOS, and smooth sliders with Swiper.

- **Dark/Light Theme Toggle**  
  Users can switch between dark and light modes for better accessibility and personalized experience.

- **Robust Routing**  
  Private routes protect sensitive pages, with reload-safe routing to avoid unnecessary redirects.

---

## Technologies Used

- **Frontend:** React, TailwindCSS, React Router, React Hot Toast, Swiper, GSAP, Lucide React, React Icons, React Tooltip  
- **Backend:** Firebase Authentication, MongoDB, Node.js, Express.js  
- **UI Enhancements:** SweetAlert2, React Loader Spinner, React Simple Typewriter  
- **Hosting:** Netlify (Client), Vercel (Server)

---

## Project Structure

├── public # Public assets (images, favicon)
├── src # Source code
│ ├── components # Reusable UI components (Navbar, Footer, TaskCard, etc.)
│ ├── pages # Page components (Home, Login, Signup, AddTask, BrowseTasks, etc.)
│ ├── context # Context API for global state management (Auth, Theme, etc.)
│ ├── hooks # Custom React hooks
│ ├── utils # Utility functions (validation, API calls)
│ ├── assets # Styles, images, icons
│ ├── App.jsx # Main app component with routing
│ └── index.jsx # React DOM render and app entry point
├── tailwind.config.js # TailwindCSS configuration
└── package.json # Frontend dependencies and scripts

/server # Backend API server
├── controllers # Route controllers (task management, auth, bids)
├── models # Mongoose schemas (User, Task, Bids)
├── routes # Express route definitions
├── middleware # Middleware (auth validation, error handling)
├── config # Config files (database connection, environment variables)
├── app.js # Express app setup
└── server.js # Server entry point and listener