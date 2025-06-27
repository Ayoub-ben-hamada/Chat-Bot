import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await axios.post('http://localhost:5000/chat', { message: input });
      const botMessage = { sender: "bot", text: response.data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { sender: "bot", text: "Erreur de connexion à Ollama." };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return (
    <div className="chat-container">
      <h1>🤖 Chat avec LLaMA3 (local)</h1>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender}>{msg.sender === "user" ? "👤" : "🤖"} {msg.text}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tape ton message..."
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App;
