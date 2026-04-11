# 📝 Advanced PHP REST API

A simple PHP REST API project with clean architecture, PSR-4 autoloading, and MVC pattern.

---

## ✨ Features

- 🏗️ **MVC Architecture** - Clean separation of concerns
- 🔄 **PSR-4 Autoloading** - Automatic class loading with Composer
- 🛣️ **URL Routing System** - Dynamic route handling
- 📝 **Post Management API** - Create, read, and search posts
- 🔍 **Advanced Search** - Regex-based post search

---

## 📋 Project Structure

```
Advance-PHP-Project/
├── public/
│   ├── index.php          # Application entry point
│   ├── .htaccess          # Apache URL rewriting
│   └── styles.css         # Styling
├── src/
│   ├── Core/Router.php    # URL routing
│   ├── Controllers/       # Business logic
│   └── Models/            # Data models
└── composer.json          # Dependencies
```

---

## 🚀 Quick Start

### Prerequisites
- PHP 7.4+
- Apache with mod_rewrite
- Composer

### Setup

1. **Install dependencies**
   ```bash
   composer install
   ```

2. **Enable Apache mod_rewrite**
   - Edit `httpd.conf` and uncomment `LoadModule rewrite_module`
   - Set `AllowOverride All`
   - Restart Apache

3. **Start server**
   ```bash
   cd public
   php -S localhost:8000
   ```

4. **Access application**
   ```
   http://localhost/Advance-PHP-Project/public/
   ```

---

## 📚 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/api/posts` | Get all posts |
| GET | `/api/search?q=query` | Search posts |

### Examples

**Get all posts:**
```
http://localhost/Advance-PHP-Project/public/api/posts
```

**Search posts:**
```
http://localhost/Advance-PHP-Project/public/api/search?q=PHP
```

---

## 🔧 Configuration

### Add New Routes

Edit `src/Core/Router.php`:

```php
elseif ($uri === '/your-route') {
    // Your logic here
}
```

### Add New Controller

1. Create file in `src/Controllers/`
2. Define class with PSR-4 namespace
3. Add methods to handle requests

---

## 📦 Requirements

- **PHP** - 7.4 or higher
- **Composer** - Dependency manager
- **Apache** - Web server

---

## 🌟 Author: Nakul Arora
