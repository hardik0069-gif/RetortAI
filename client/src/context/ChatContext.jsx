/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hello! I'm RetortAI. Choose a mode and start chatting.",
    },
  ]);

  function addMessage(message) {
    setMessages((prev) => [...prev, message]);
  }

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}