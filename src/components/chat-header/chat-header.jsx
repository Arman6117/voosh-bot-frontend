import React, { useState } from "react";
import { resetSession, refreshNews } from "../../services/api";
import "./chat-header.scss";

const ChatHeader = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refreshNews();
      alert("✅ News Knowledge Base Updated!");
    } catch (error) {
      alert("❌ Update Failed");
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <header className="chat-header">
      <div className="brand-section">
        <div className="logo-box">
          <i className="fa-solid fa-robot"></i>
        </div>
        <div className="meta">
          <h1>Voosh Agent</h1>
          <div className="status">
            <span className="dot"></span>
            <span>RAG Active</span>
          </div>
        </div>
      </div>

      <div className="actions">
        <button 
          className="icon-btn refresh" 
          onClick={handleRefresh} 
          disabled={isRefreshing}
          title="Sync latest news"
        >
          <i className={`fa-solid fa-sync ${isRefreshing ? "fa-spin" : ""}`}></i>
          <span className="label">{isRefreshing ? "Syncing..." : "Sync"}</span>
        </button>
        
        <button 
          className="icon-btn reset" 
          onClick={resetSession} 
          title="Clear session"
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;