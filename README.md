# **💻 Voosh News Bot \- Frontend**

The client-side interface for the Voosh News Chatbot. Built with React and SCSS, featuring a modern **Glassmorphism UI** that provides a seamless, app-like experience.

## **🚀 Live Demo**

**App URL:** \[INSERT\_YOUR\_VERCEL\_URL\_HERE\] (e.g., https://voosh-frontend.vercel.app)

## **✨ Features**

* **💎 Glassmorphism Design:** A modern UI using translucent backgrounds, backdrop filters, and vibrant gradients implemented with pure SCSS.  
* **⚡ Real-time Chat:** Optimistic UI updates ensure the interface feels instant while waiting for the AI response.  
* **💾 Session Persistence:** Automatically loads chat history from the backend (Redis) on page reload.  
* **🔄 Admin Controls:** Includes a "Refresh News" button that triggers server-side ingestion to update the knowledge base.  
* **📱 Fully Responsive:** Optimized layout for mobile, tablet, and desktop screens.

## **🛠️ Tech Stack**

* **Framework:** React (Vite)  
* **Styling:** SCSS (Sass), CSS Modules architecture  
* **HTTP Client:** Axios  
* **Icons:** FontAwesome (SVG/Inline)

## **📂 Project Structure**

The project follows a component-based architecture for maintainability:

src/  
├── components/      \# UI Building Blocks  
│   ├── ChatHeader   \# Logo, Connection Status, Actions  
│   ├── MessageList  \# Scrollable Chat Area, Bubbles, Typing Indicators  
│   └── MessageInput \# Floating Input Capsule  
├── services/        \# API Integration Layer (Axios)  
├── App.jsx          \# Main Controller & State Management  
└── App.scss         \# Global Styles & Variables

## **🏃‍♂️ Local Setup**

1. **Clone the repo:**  
   git clone \<your-repo-url\>  
   cd voosh-frontend

2. **Install Dependencies:**  
   npm install

3. Configure Backend:  
   Create a .env file in the root:  
   VITE\_API\_URL=http://localhost:3000/api

4. **Run Development Server:**  
   npm run dev  
