# Smart Registration & Tracker

A modern registration application with real-time validation, local storage, and a Node.js backend.

## 🚀 Quick Start

```bash
npm install
npm start
```

Open your browser: **http://localhost:3000**

## 📋 Features

- **Form Validation** - Real-time with RegEx patterns
- **Local Storage** - Data persists in browser
- **Cookies** - Automatic cookie management
- **Server Backend** - Node.js with Express
- **Export CSV** - Download all registrations
- **Statistics** - Track metrics and trends
- **Offline Mode** - Works without server connection

## 🎯 Form Fields

| Field | Rules |
|-------|-------|
| Name | 2-30 letters |
| Email | Valid format |
| Phone | 10+ digits |
| Password | 8+ chars, number, special char |
| Age | 18-120 |
| Gender | Select one |
| Newsletter | Optional |

## 🧹 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: Node.js, Express
- **Storage**: LocalStorage, Cookies, JSON file
- **Validation**: RegEx patterns, Math operations

## 📚 Key Concepts

- String, Date, Array, Boolean, Number objects
- RegEx patterns for validation  
- Math functions (min, max, round)
- Array methods (map, filter, find, reduce)
- Fetch API with async/await
- Class-based architecture
- Event listeners & DOM manipulation

## 🔌 API Endpoints

```
POST   /api/register              Submit registration
GET    /api/registrations         Get all
GET    /api/stats                 Statistics
DELETE /api/registrations/:id     Delete one
DELETE /api/registrations         Clear all
GET    /api/export/csv            Download CSV
```

## 📊 Debug Console

View operations in real-time:
- Form submission logs
- Validation results
- Storage operations
- Network requests
- Browser information

## 🛠️ Troubleshooting

**Port already in use:**
```bash
PORT=3001 npm start
```

**Modules not found:**
```bash
npm install
```

**Clear all data:**
- Click "Clear All" button in history
- Or delete `registrations_data.json`

## 📝 File Structure

```
├── index.html              Frontend (HTML)
├── style.css              Styles & animations
├── app.js                 Frontend logic (800+ lines)
├── server.js              Backend (300+ lines)
├── package.json          Dependencies
├── registrations_data.json Data storage (auto-created)
├── start.bat             Windows startup
└── start.sh              Linux/Mac startup
```

## 🎓 Learning Resources

The code demonstrates:
- **Objects**: String, Date, Array, Boolean, Number
- **Validation**: Complex RegEx patterns
- **Async**: Fetch API, Promises, Async/Await
- **Storage**: LocalStorage, Cookies
- **DOM**: Selectors, events, manipulation
- **Classes**: OOP design patterns
- **Array Methods**: Map, filter, reduce, find, every
- **Performance**: Timing, measurement

## 💡 Tips

- Press **F12** to open DevTools
- Check **Console** tab for debug logs
- Monitor **Network** tab during submissions
- View **Application** tab for cookies/storage
- Use **Inspect** to view DOM elements

## ✨ Features Demo

1. **Fill form** → Submit → See in history
2. **Real-time validation** → Invalid data shows errors
3. **Local save** → Refresh page → Data persists
4. **Offline mode** → Disconnect server → Still works
5. **Export CSV** → Click button → File downloads
6. **Statistics** → See metrics update live

## 🚀 Next Steps

- Connect to a real database
- Add user authentication
- Implement password hashing
- Add email verification
- Create admin dashboard
- Add more validation rules

## 🌟 Author:

Nakul Arora - Aspiring Software Engineer...

---

**Ready to code? Start the server and open http://localhost:3000! 🎉**
