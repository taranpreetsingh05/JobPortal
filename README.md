# Job Portal

A full-stack job portal application supporting two roles — job seekers and recruiters/admins — with resume uploads, job posting, and application tracking.

**Live demo:** (https://job-portal-six-chi-59.vercel.app/)

## Features

- JWT-based authentication with httpOnly cookies, role-based access (jobseeker / recruiter)
- Job seekers can browse, filter, and apply to jobs, and track application status
- Recruiters can create companies, post jobs, and view/manage applicants
- Resume and profile photo uploads via Cloudinary
- Admin dashboard for managing job postings and applicants

## Tech Stack

**Frontend:** React, Redux Toolkit, React Router, Tailwind CSS, shadcn/ui, Vite
**Backend:** Node.js, Express, MongoDB (Mongoose), JWT, bcrypt, Multer, Cloudinary
**Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

## Architecture

```
JobPortal/
├── frontend/          # React + Vite SPA
│   └── src/
│       ├── components/    # UI components (auth, admin, shared)
│       ├── hooks/         # Custom data-fetching hooks
│       ├── redux/         # Redux Toolkit slices
│       └── utils/         # API endpoints, helpers
└── backend/           # Express REST API
    ├── controllers/    # Route handlers
    ├── models/         # Mongoose schemas
    ├── routes/         # API route definitions
    ├── middlewares/     # Auth middleware, file upload (Multer)
    └── utils/          # DB connection, Cloudinary, datauri helpers
```

## Running Locally

### Backend
```bash
cd backend
npm install
npm run dev
```

Create a `.env` file in `backend/` with:
```
MONGO_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FRONTEND_SERVER=http://localhost:5173
PORT=8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file in `frontend/` with:
```
VITE_API_BASE_URL=http://localhost:8000
```

## API Overview

| Route | Description |
|---|---|
| `/user` | Register, login, logout, profile update |
| `/company` | Create and manage companies |
| `/job` | Post, browse, and filter jobs |
| `/application` | Apply to jobs, track and manage applications |
