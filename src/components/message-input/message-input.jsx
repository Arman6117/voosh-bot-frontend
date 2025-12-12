import React, { useState } from "react";

import "./message-input.scss";
import { getSessionId } from "../../services/api";
const MessageInput = ({ onSend, loading }) => {
  const [text, setText] = useState("");
  const sessionId = getSessionId();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !loading) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="input-area">
      <form className="input-capsule" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask a question about the news..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !text.trim()} className="send-btn">
          {loading ? (
             <i className="fa-solid fa-spinner fa-spin"></i>
          ) : (
             <i className="fa-solid fa-paper-plane"></i>
          )}
        </button>
      </form>
      <div className="session-tag">
        <span className="dot"></span>
        <span>Session ID: {sessionId.slice(0, 8)}...</span>
      </div>
    </div>
  );
};

export default MessageInput;