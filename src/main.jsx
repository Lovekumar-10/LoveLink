// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { AuthProvider } from "./context/AuthContext";
// import { DummyUserProvider } from "./context/DummyUserContext";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <AuthProvider>
//       <DummyUserProvider>
//         <App />
//       </DummyUserProvider>
//     </AuthProvider>
//   </StrictMode>,
// );



// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { DummyUserProvider } from "./context/DummyUserContext";
import { ChatProvider } from "./context/ChatContext"; // Optional for Firebase

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DummyUserProvider>
        <ChatProvider>
          <App />
        </ChatProvider>
      </DummyUserProvider>
    </AuthProvider>
  </StrictMode>
);
