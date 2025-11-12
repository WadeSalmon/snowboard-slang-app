# 🏂 Snowboard Slang Converter

A fun web app that converts regular English into snowboard slang using speech recognition or text input.

## Features

- 🎤 **Speech Recognition**: Speak and convert to snowboard slang
- ⌨️ **Text Input**: Type directly for instant conversion
- 🎨 **Modern UI**: Beautiful gradient design with Tailwind CSS
- ⚡ **Fast**: Built with Vite and React

## Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

## Quick Start

### Option 1: Use the start script (Recommended)

```bash
./start.sh
```

### Option 2: Manual setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown (usually `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run test:run` - Run tests once

## How to Use

1. **Speech Input**: Click the microphone button and speak clearly
2. **Text Input**: Type directly in the text box for instant conversion
3. The app will convert common words and phrases into snowboard slang

## Examples

- "hello friend" → "Yo Bro"
- "thank you" → "Props"
- "that was awesome" → "that was Gnarly"
- "ski lift" → "Chair"

## Browser Support

- Chrome (recommended)
- Edge
- Safari
- Firefox (with limited speech recognition support)

## Deployment

### Deploy to Vercel

The easiest way to deploy this app is using [Vercel](https://vercel.com):

#### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

#### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure the build settings
6. Click "Deploy"

The project is already configured with `vercel.json` for optimal deployment.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Web Speech API

