# 🐳 Dockerized PHP + PostgreSQL CRUD App

A simple full-stack CRUD application built using:

* **Frontend:** HTML, CSS
* **Backend:** PHP
* **Database:** PostgreSQL
* **Containerization:** Docker & Docker Compose

This project demonstrates how to run a complete multi-container application **without installing PHP or PostgreSQL locally**.

---

## 🚀 Features

* ➕ Add user (Name, Phone, Email)
* 📋 View all entries
* ❌ Delete entries
* 🐳 Fully Dockerized (multi-container setup)

---

## 📁 Project Structure

```
docker-php-postgres-app/
│
├── app/
│   ├── index.php
│   ├── db.php
│   ├── actions.php
│   └── style.css
│
├── init.sql
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🐳 Docker Architecture

This project uses **2 containers**:

* **web** → PHP + Apache
* **db** → PostgreSQL

They communicate via Docker network using service name:

```
PHP → host=db → PostgreSQL
```

---

## ⚙️ Prerequisites

* Install **Docker Desktop**
* WSL (recommended for Windows users)

---

## ▶️ Run the Project

Clone the repo:

```bash
git clone https://github.com/nakul60/entrata-training-roadmap.git
cd docker-basics
```

Start containers:

```bash
docker-compose up --build
```

---

## 🌐 Access Application

Open in browser:

```
http://localhost:8000
```

---

## 🗄️ Database Details

* DB Name: `mydb`
* User: `postgres`
* Password: `postgres`

Tables are automatically created using:

```
init.sql
```

---

## 📦 Docker Hub (Optional)

You can pull the pre-built image from Docker Hub:

### 🔽 Pull Image

```bash
docker pull nakul75/my-docker-app-web
```

### ▶️ Run Container

```bash
docker run -p 8000:80 nakul75/my-docker-app-web
```

---

## 🚀 Push to Docker Hub

### 1. Login

```bash
docker login
```

### 2. Build Image

```bash
docker build -t  nakul75/my-docker-app-web .
```

### 3. Push Image

```bash
docker push nakul75/my-docker-app-web
```

---

## 💡 Key Concepts Learned

* Docker images & containers
* Multi-container apps using Docker Compose
* Container networking
* Volumes for persistent storage
* Service-to-service communication

---

## ⚠️ Improvements (Future Work)

* ✏️ Add UPDATE functionality
* 🔐 Use prepared statements (security)
* ⚙️ Add `.env` for environment variables
* 📊 Add Adminer (DB UI)
* 🚀 Use Nginx instead of Apache

---

## 👨‍💻 Author

**Nakul Arora**

---

## ⭐ Contribute

Feel free to fork, improve, and raise PRs!

---
