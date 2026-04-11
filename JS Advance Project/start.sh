#!/bin/bash
# Quick Start Script for Smart Registration + Tracker App

echo "=================================================="
echo "🔐 Smart Registration + Tracker App"
echo "Quick Start Setup"
echo "=================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "📥 Please download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "=================================================="
echo "🚀 Starting server..."
echo "=================================================="
echo ""
echo "✨ Server will run on: http://localhost:3000"
echo "📱 Open a browser and navigate to: http://localhost:3000"
echo ""
echo "💡 Tips:"
echo "  - Use DevTools (F12) to inspect requests"
echo "  - Check Console tab for debug messages"
echo "  - Monitor Network tab for AJAX calls"
echo "  - View Application tab for Cookies & LocalStorage"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=================================================="
echo ""

npm start
