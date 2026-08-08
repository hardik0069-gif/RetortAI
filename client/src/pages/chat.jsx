import ModeSelector from "../components/chat/ModeSelector";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

function Chat() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-8">

        <h1 className="text-3xl font-black">
          RetortAI Chat
        </h1>

        <p className="mt-2 text-slate-400">
          Select a personality and start chatting.
        </p>

        <ModeSelector />

        <div className="mt-8 flex-1">
          <ChatMessages />
        </div>

        <ChatInput />

      </div>
    </div>
  );
}

export default Chat;