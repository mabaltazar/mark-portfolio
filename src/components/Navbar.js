function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 bg-opacity-80 backdrop-blur z-50 shadow">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-emerald-400">Mark</span>
        <ul className="flex space-x-6 text-slate-200 font-medium">
          <li>
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
