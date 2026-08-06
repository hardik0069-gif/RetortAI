import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import BackgroundGlow from "../components/ui/BackgroundGlow";

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      <BackgroundGlow />

      <Navbar />

      <Hero />

    </div>
  );
}

export default Home;