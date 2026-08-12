import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { APP } from "../../config/app";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/80 bg-[#050505]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-black tracking-[-0.05em] text-white"
        >
          RETORTAI<span className="text-neutral-600">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/chat"
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition hover:text-white"
          >
            Chat
          </Link>

          <Link
            to="/about"
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition hover:text-white"
          >
            About
          </Link>

          <a
            href={APP.github}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href={APP.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition hover:text-white"
          >
            LinkedIn
          </a>
        </nav>

        <Link
          to="/chat"
          className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition hover:bg-neutral-200 lg:block"
        >
          Start Chat →
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg border border-neutral-800 p-2.5 text-neutral-500 transition hover:border-neutral-600 hover:text-white lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-neutral-900 bg-[#050505] px-6 py-5 lg:hidden">
          <nav className="flex flex-col">
            <Link
              to="/chat"
              onClick={closeMenu}
              className="border-b border-neutral-900 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition hover:text-white"
            >
              Chat
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="border-b border-neutral-900 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition hover:text-white"
            >
              About
            </Link>

            <a
              href={APP.github}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="border-b border-neutral-900 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href={APP.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="border-b border-neutral-900 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition hover:text-white"
            >
              LinkedIn
            </a>

            <Link
              to="/chat"
              onClick={closeMenu}
              className="mt-5 rounded-full bg-white px-5 py-3 text-center text-xs font-bold text-black transition hover:bg-neutral-200"
            >
              Start Chat →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;