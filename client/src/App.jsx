import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatProvider } from "./context/ChatContext";
import About from "./pages/About";
import SharedChat from "./pages/SharedChat";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="/share" element={<SharedChat />} />
        </Routes>
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;