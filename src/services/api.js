import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const getSessionId = () => {
  let sessionId = localStorage.getItem("chat_session_id");
  if (!sessionId) {
    sessionId = "sess_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("chat_session_id", sessionId);
  }
  return sessionId;
};

export const sendMessage = async (message) => {
  const sessionId = getSessionId();
  try {
    const response = await axios.post(`${API_URL}/chat`, {
      message,
      sessionId,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const fetchHistory = async () => {
  const sessionId = getSessionId();
  try {
    const response = await axios.get(`${API_URL}/history/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error("History Error:", error);
    return [];
  }
};

export const refreshNews = async () => {
  try {
    const response = await axios.post(`${API_URL}/refresh-news`);
    return response.data;
  } catch (error) {
    console.error("News Refresh Error:", error);
    throw error;
  }
};

export const resetSession = () => {
  if (confirm("Are you sure you want to clear the chat history?")) {
    localStorage.removeItem("chat_session_id");
    window.location.reload();
  }
};