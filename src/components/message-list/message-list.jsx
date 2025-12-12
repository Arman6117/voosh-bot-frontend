import React, { useEffect, useRef } from "react";
import "./message-list.scss";

const MessageList = ({ messages, loading }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="message-list">
      <div className="welcome-placeholder">
        <i className="fa-solid fa-newspaper"></i>
        <p>Voosh RAG System Ready</p>
      </div>

      {messages.map((msg, index) => (
        <div key={index} className={`row ${msg.role}`}>
          <div className="avatar">
            {msg.role === "user" ? (
              <i className="fa-solid fa-user"></i>
            ) : (
              <i className="fa-solid fa-robot"></i>
            )}
          </div>
          <div className="content-group">
            <div className="bubble">
              {msg.content}
            </div>
            {msg.time && <span className="time">{msg.time}</span>}
          </div>
        </div>
      ))}

      {loading && (
        <div className="row assistant">
          <div className="avatar"><i className="fa-solid fa-robot"></i></div>
          <div className="content-group">
            <div className="bubble typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      )}
      
      <div ref={bottomRef} />
    </div>
  );
};;

export default MessageList;