# Smart Bot - Chat Like a Pirate!

A simple yet engaging chat application where you can converse with a smart bot that speaks like a pirate! This application combines the power of OpenAI's GPT-3.5-turbo with a clean front-end interface to deliver a fun and unique chatting experience.

---

## Features
- **Pirate-Themed Conversations**: The bot responds to user inputs with pirate-like language for a quirky and entertaining experience.
- **Seamless OpenAI API Integration**: Uses OpenAI's GPT-3.5-turbo model to generate creative and contextually accurate responses.
- **Lightweight Backend**: Built using Node.js and Express.js for quick and efficient server-side operations.
- **Interactive Front-End**: A simple and responsive web interface created with HTML and JavaScript for user interactions.
- **JSON API Endpoint**: Backend exposes a POST endpoint (`/chat`) for handling and processing user inputs.
- **Error Handling**: Includes proper error handling on the server to ensure smooth operation.

---

## Installation

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **OpenAI API Key**: Obtain an API key from OpenAI by signing up on their [official website](https://openai.com/).

### Steps to Install
1. Clone the repository to your local system:
   ```bash
   git clone https://github.com/Harshithappu-2003/AI_CHATBOT.git
2. Navigate to the project directory
   cd AI_CHATBOT
3. Install dependencies
   npm install
# Usage

## Interacting with the Chatbot
1. Enter your message in the input field on the webpage.
2. Click the "Send" button.
3. The bot will respond in pirate style in the chatbox below.

---

# Project Structure

## Files and Their Roles
- **`server.js`**: Handles the backend logic, OpenAI API integration, and server setup.
- **`public/index.html`**: The frontend of the application, where users interact with the bot.
- **`.env`**: Stores sensitive information like the OpenAI API key.

---

# API Endpoints

## `/chat`
- **Method**: POST  
- **Description**: Accepts a user message and returns the chatbot's pirate-style response.  
- **Request Body**:
  ```json
  {
    "message": "Your question or statement"
  }



