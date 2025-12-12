import React, { useState, useEffect } from "react";

import { sendMessage, fetchHistory } from "./services/api.js"; 
import "./App.scss";
import ChatHeader from "./components/chat-header/chat-header.jsx";
import MessageList from "./components/message-list/message-list.jsx";
import MessageInput from "./components/message-input/message-input.jsx";

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadChats = async () => {
      const history = await fetchHistory();
      
      if (history.length > 0) {
        setMessages(history);
      } else {
        setMessages([{
          role: "assistant",
          content: "Hello! I am your Voosh News Agent. I've analyzed the latest tech headlines. What would you like to know?",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }
    };
    loadChats();
  }, []);

  const handleSend = async (text) => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMsg = { role: "user", content: text, time: currentTime };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const data = await sendMessage(text);
      setMessages((prev) => [
        ...prev,
        { 
          role: "assistant", 
          content: data.reply, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { 
          role: "assistant", 
          content: "⚠️ Error: The server is unreachable.",
          time: currentTime
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="glass-card">
        <ChatHeader />
        <MessageList messages={messages} loading={loading} />
        <MessageInput onSend={handleSend} loading={loading} />
      </div>
    </div>
  );
}

export default App;