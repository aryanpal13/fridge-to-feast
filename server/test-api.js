import dotenv from 'dotenv';
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

console.log('🔍 Checking API Key Configuration...\n');

// Check if API key exists
if (!API_KEY) {
  console.log('❌ GEMINI_API_KEY not found in .env file');
  console.log('   Create a .env file with: GEMINI_API_KEY=your_key_here');
  process.exit(1);
}

// Check API key format
console.log('API Key found:', API_KEY.substring(0, 10) + '...' + API_KEY.slice(-4));
console.log('Length:', API_KEY.length);

if (!API_KEY.startsWith('AIza')) {
  console.log('⚠️  Warning: API key should start with "AIza"');
}

if (API_KEY.length < 35 || API_KEY.length > 45) {
  console.log('⚠️  Warning: API key length seems unusual (should be ~39 chars)');
}

console.log('\n🧪 Testing API key with direct HTTP request...\n');

// Corrected the URL here 👇
const testUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

try {
  const response = await fetch(testUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: 'Say hello'
        }]
      }]
    })
  });

  console.log('Response status:', response.status);
  const data = await response.json();

  if (response.ok) {
    console.log('✅ API Key is VALID!');
    console.log('Response:', JSON.stringify(data, null, 2));
  } else {
    console.log('❌ API Key test failed');
    console.log('Error:', JSON.stringify(data, null, 2));

    if (data.error) {
      console.log('\n💡 Suggestions:');
      if (data.error.message?.includes('API key not valid')) {
        console.log('   1. Get a new API key from: https://aistudio.google.com/app/apikey');
        console.log('   2. Make sure you copied the entire key');
        console.log('   3. Check if the key has been disabled');
      }
      if (data.error.message?.includes('quota')) {
        console.log('   1. You may have exceeded the free quota');
        console.log('   2. Check your usage at: https://aistudio.google.com/');
      }
      if (data.error.message?.includes('not found')) {
        console.log('   1. Double-check the model name in the URL.');
        console.log('   2. Ensure you are using the correct API endpoint version (e.g., v1beta).');
      }
    }
  }
} catch (error) {
  console.log('❌ Network error:', error.message);
  console.log('\n💡 Check:');
  console.log('   1. Your internet connection');
  console.log('   2. Firewall settings');
  console.log('   3. Proxy configuration');
}