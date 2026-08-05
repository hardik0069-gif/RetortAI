import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="flex h-[calc(100vh-64px)] items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          RetortAI
        </h1>
      </main>
    </div>
  );
}

export default Home;