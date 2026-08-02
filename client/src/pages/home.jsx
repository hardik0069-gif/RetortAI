import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="flex h-[80vh] items-center justify-center">
        <h1 className="text-5xl font-bold">
          Welcome to RetortAI 🚀
        </h1>
      </main>
    </div>
  );
}

export default Home;