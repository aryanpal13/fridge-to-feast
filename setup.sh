#!/bin/bash

# Fridge-to-Feast Setup Script
# This script automates the initial setup process

echo "🍳 Fridge-to-Feast Setup Script"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Node.js is installed
echo -e "${BLUE}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed${NC}"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js ${NODE_VERSION} is installed${NC}"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed${NC}"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo -e "${GREEN}✓ npm ${NPM_VERSION} is installed${NC}"
echo ""

# Install root dependencies
echo -e "${BLUE}Installing root dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Root dependencies installed${NC}"
echo ""

# Install server dependencies
echo -e "${BLUE}Installing server dependencies...${NC}"
cd server
npm install
echo -e "${GREEN}✓ Server dependencies installed${NC}"
echo ""

# Setup server .env file
if [ ! -f .env ]; then
    echo -e "${YELLOW}Setting up server .env file...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✓ .env file created${NC}"
    echo -e "${YELLOW}⚠️  Please edit server/.env and add your Gemini API key${NC}"
else
    echo -e "${GREEN}✓ .env file already exists${NC}"
fi
echo ""

# Install client dependencies
echo -e "${BLUE}Installing client dependencies...${NC}"
cd ../client
npm install
echo -e "${GREEN}✓ Client dependencies installed${NC}"
echo ""

# Setup client .env file (optional)
if [ ! -f .env ]; then
    echo -e "${YELLOW}Setting up client .env file...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✓ Client .env file created${NC}"
else
    echo -e "${GREEN}✓ Client .env file already exists${NC}"
fi
echo ""

# Go back to root
cd ..

# Final instructions
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}✓ Setup Complete!${NC}"
echo -e "${GREEN}================================${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo ""
echo "1. Get your Gemini API key from: https://makersuite.google.com/app/apikey"
echo "2. Edit server/.env and add your API key"
echo "3. Run the app:"
echo ""
echo -e "${YELLOW}   npm run dev${NC}  (runs both frontend and backend)"
echo ""
echo "   OR run separately:"
echo -e "${YELLOW}   npm run dev:server${NC}  (backend on port 5000)"
echo -e "${YELLOW}   npm run dev:client${NC}  (frontend on port 3000)"
echo ""
echo -e "Frontend will be at: ${GREEN}http://localhost:3000${NC}"
echo -e "Backend will be at: ${GREEN}http://localhost:5000${NC}"
echo ""
echo "Happy cooking! 🍳✨"