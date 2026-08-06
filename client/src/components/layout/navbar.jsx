import { Menu } from "lucide-react";
import { APP } from "../../config/app";
import Button from "../ui/Button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <h1 className="text-3xl font-black tracking-tight text-white">
          {APP.name}
        </h1>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 lg:flex">

          <a
            href="#features"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#roadmap"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Roadmap
          </a>

          <a
            href="#about"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>

        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 lg:flex">

          <a
            href={APP.github}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary">
              GitHub
            </Button>
          </a>

          <Button>
            Start Chat
          </Button>

        </div>

        {/* Mobile */}

        <button className="rounded-xl border border-slate-700 p-3 text-slate-300 lg:hidden">
          <Menu size={22} />
        </button>

      </div>
    </header>
  );
}

export default Navbar;