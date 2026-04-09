# 💻 PHP Feature Flag Rules Engine

A clean, testable PHP application that demonstrates a **feature flag / rollout rules engine** with a simple web interface, unit tests, along with a test coverage report.

This project is designed to showcase **real-world backend logic**, **proper project structure**, and **professional PHP testing practices**.

---

## 🚀 Overview

Feature flags are widely used in modern systems to:
- Enable or disable features dynamically
- Roll out functionality incrementally
- Control access based on roles and environments

This project implements a **deterministic feature flag evaluator** that decides whether a feature should be enabled for a given user based on:
- User role
- Environment
- Rollout percentage

A lightweight frontend is included to interactively test the logic.

---

## 📂 Project Structure
```
php-coverage-demo/
│
├── public/                 # Web entry point
│   ├── index.php
│   ├── styles.css
│   └── app.js
│
├── src/                    # Core business logic
│   └── FeatureFlagService.php
│
├── tests/                  # PHPUnit test cases
│   └── FeatureFlagServiceTest.php
│
├── composer.json
├── composer.lock
└── phpunit.xml
```
---

## 🧠 Core Logic

The `FeatureFlagService` evaluates whether a feature is enabled using a deterministic approach, ensuring consistent results for a given user.

### Key characteristics:
- Fully unit-testable
- No global state
- Clear separation of concerns
- Production-ready decision logic
- used GitHUB Actions for generating test coverage report

---

## 🖥️ Running the Application

Start the built-in PHP development server from the project root:

```bash
php -S 0.0.0.0:8000 -t public
