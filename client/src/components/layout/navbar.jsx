import { Menu } from "lucide-react";
import { APP } from "../../config/app";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-white">
          {APP.name}
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Roadmap
          </a>

          <a
            href="#"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href={APP.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Menu */}
        <button className="rounded-lg border border-slate-700 p-2 text-slate-300 md:hidden">
          <Menu size={22} />
        </button>

      </div>
    </header>
  );
}

export default Navbar;