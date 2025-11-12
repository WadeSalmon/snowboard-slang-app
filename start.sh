#!/bin/bash

# Script to start the Snowboard Slang Converter development server

echo "🏂 Starting Snowboard Slang Converter..."

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    echo ""
    echo "Please install Node.js first:"
    echo "  - Download from: https://nodejs.org/"
    echo "  - Or use Homebrew: brew install node"
    echo ""
    echo "If Node.js is installed via nvm, try:"
    echo "  source ~/.nvm/nvm.sh"
    exit 1
fi

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not found"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed"
    echo ""
fi

# Start the development server
echo "🚀 Starting development server..."
echo "   The app will be available at http://localhost:5173"
echo "   Press Ctrl+C to stop the server"
echo ""
npm run dev

