# Blog app Application with CI/CD Pipeline

## Project Overview
This project is part of my Devops internship to solve the problem of **time-consuming conventional deployment** by automating the deployment process **Jenkins**, **Docker**, and **vercel**.

## Tech Stack
- **Frontend**: React.js
- **CI/CD**: Jenkins + Github
- **Containerization**: Docker
- **Deployment**: Vercel


## Features
- Blog listing and creation (basic UI)
- Auto deployment with Github + Vercel
- CI/CD with Jenkins pipeline
- Dockerized build process

## Docker commands
```bash
docker build -t blog-app .
docker run -p 3000:3000 react-blog
```

---

## 📄 2. Final Report Format (For Submission)

### Title:  
**Automating Blog App Deployment Using CI/CD**

### Objective:  
Reduce deployment time for React-based web applications by using Jenkins, Docker, and Vercel.

### Tools & Technologies:
- **React** for frontend
- **Docker** for containerization
- **Jenkins** for automation
- **Vercel** for deployment
- **GitHub** for version control

### Workflow:
1. Code pushed to GitHub
2. Jenkins pulls the code
3. Jenkins runs tests and Docker builds
4. Vercel auto-deploys on every push

### Outcome:
Achieved consistent, automated deployment. Reduced deployment time from manual ~10 mins to <1 min using automation.

### Challenges:
- AWS free tier exhausted
- Switched to Vercel for lightweight deployment

### Screenshots (add):
- Jenkins pipeline output
- Docker build logs
- Vercel deployment success
- Running blog app UI

---

## 🧩 3. Diagram of CI/CD Flow (Text Format)

    +-------------+
    |  Developer  |
    +-------------+
          |
          v
    +-------------+
    |   Docker    |  ← Create Dockerfile, build & test locally
    +-------------+
          |
          v
    +-------------+
    |   GitHub    |  ← Push Dockerized React App
    +-------------+
          |
          v
    +-------------+
    |   Jenkins   |  ← Pull repo, run tests, optionally rebuild Docker image
    +-------------+
          |
          v
    +-------------+
    |   Vercel    |  ← Auto-deploy via GitHub push
    +-------------+
