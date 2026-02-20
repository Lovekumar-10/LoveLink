
// Realtime Chat
import { createContext, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (chatId, text, senderId) => {
    await addDoc(collection(db, "chats", chatId, "messages"), {
      text,
      senderId,
      type: "text",
      createdAt: serverTimestamp()
    });
  };

  const listenMessages = (chatId) => {
    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("createdAt")
    );

    return onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
  };

  return (
    <ChatContext.Provider value={{ sendMessage, listenMessages, messages }}>
      {children}
    </ChatContext.Provider>
  );
};



