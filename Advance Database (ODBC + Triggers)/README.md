# 🚀 Smart Inventory & Billing System

A full-stack **Inventory Management Web Application** built using **PHP, PostgreSQL, ODBC, SQL Functions, and Triggers**.
This system automates stock handling, billing, and logging using powerful database-level logic.

---

## 📑 Table of Contents

* [📌 Overview](#-overview)
* [✨ Features](#-features)
* [🛠️ Tech Stack](#️-tech-stack)
* [🗄️ Database Design](#️-database-design)
* [⚡ SQL Functions](#-sql-functions)
* [🔁 Triggers](#-triggers)
* [🔌 ODBC Integration](#-odbc-integration)
* [💻 Project Structure](#-project-structure)
* [🚀 Setup Instructions](#-setup-instructions)
* [📸 Screenshots](#-screenshots)
* [🎯 Future Enhancements](#-future-enhancements)
* [👨‍💻 Author](#-author)

---

## 📌 Overview

The **Smart Inventory & Billing System** is designed to manage products, track sales, and automate stock updates.
It leverages **database triggers and functions** to reduce manual backend logic and ensure data consistency.

---

## ✨ Features

* ➕ Add new products
* 📦 View available inventory
* 💰 Sell products with automatic billing
* 🔄 Auto-update stock using triggers
* 🚫 Prevent invalid transactions (e.g., insufficient stock)
* 📝 Maintain logs of all sales
* 📊 View complete sales history

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS
* **Backend:** PHP
* **Database:** PostgreSQL
* **Connectivity:** ODBC
* **Database Logic:** SQL Functions & Triggers

---

## 🗄️ Database Design

### Tables:

* **products**

  * id, name, price, stock

* **sales**

  * id, product_id, quantity, total_price, created_at

* **logs**

  * id, message, created_at

---

## ⚡ SQL Functions

Used to encapsulate reusable logic inside the database.

Example:

* Calculate total price of a sale

---

## 🔁 Triggers

Automated database actions:

* ✅ **Before Insert Trigger**

  * Prevents selling more than available stock

* 🔻 **After Insert Trigger**

  * Automatically reduces product stock

* 📝 **Logging Trigger**

  * Records every transaction in logs table

---

## 🔌 ODBC Integration

The application connects PHP with PostgreSQL using **ODBC (Open Database Connectivity)**.

* DSN configured in Windows ODBC settings
* Used `odbc_connect()` in PHP for database interaction

---

## 💻 Project Structure

```
inventory/
│
├── db.php
├── index.php
├── add_product.php
├── sell_product.php
├── view_products.php
├── view_sales.php
├── style.css
└── README.md
```

---

## 🚀 Setup Instructions

### 1️⃣ Install Dependencies

* Install PostgreSQL
* Install XAMPP (Apache + PHP)
* Install psqlODBC driver

---

### 2️⃣ Database Setup

```sql
CREATE DATABASE inventory_db;
```

Run SQL scripts to create tables, functions, and triggers.

---

### 3️⃣ Configure ODBC

* Open **ODBC Data Sources (64-bit)**
* Create System DSN:

  * Name: `inventory_pg`
  * Server: `localhost`
  * Database: `inventory_db`

---

### 4️⃣ Run Project

* Place project in:

```
C:\xampp\htdocs\inventory
```

* Start Apache
* Open browser:

```
http://localhost/inventory
```

---

## 📸 Screenshots

> Add screenshots here for better presentation

---

## 🎯 Future Enhancements

* 🔐 User authentication system
* 📊 Dashboard with analytics charts
* 🔍 Search & filtering
* 📱 Responsive UI
* 📦 Export reports (PDF/CSV)

---

## 👨‍💻 Author

**Nakul Arora**

* 💼 Aspiring Developer
* 🚀 Passionate about Backend & Systems

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it!

---
