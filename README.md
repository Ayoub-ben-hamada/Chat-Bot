# 🤖 AI Chatbot Frontend — React + Netlify

This is the **frontend** of my AI chatbot project, built with **React** and deployed on **Netlify**.  
It provides a clean and responsive UI for chatting with local LLMs powered by Ollama via a Flask backend.

---

### ✨ Features

- Clean, mobile-friendly interface
- Chat with LLMs like `llama3` or `phi3`
- Sends messages to a Flask backend, which communicates with Ollama
- Easy to modify and extend

---

### ⚙️ How It Works

1. The user sends a message through the React interface.
2. The message is sent to a Flask API endpoint.
3. Flask forwards it to Ollama (running locally).
4. Ollama returns a generated response.
5. The frontend displays the response in real-time.

---

### 🚀 Live Demo

🔗 [Live Chatbot App (Netlify)](https://chatbot-react25.netlify.app/)  
🔗 [Backend API (Flask Repo)](https://github.com/Ayoub-ben-hamada/chatbot-backend)

---

### 🛠️ Local Setup

```bash
git clone https://github.com/your-username/your-frontend-repo.git
cd frontend-folder
npm install
npm start
```
