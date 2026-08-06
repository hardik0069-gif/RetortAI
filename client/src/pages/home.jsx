import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;