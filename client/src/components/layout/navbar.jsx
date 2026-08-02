import { APP } from "../../constants/theme";

function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-cyan-400">
          {APP.NAME}
        </h1>

        <p className="text-sm text-slate-400">
          {APP.TAGLINE}
        </p>
      </div>
    </nav>
  );
}

export default Navbar;