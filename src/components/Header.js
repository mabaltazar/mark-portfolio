function Header() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Hi, I’m Mark 👋
      </h1>
      <p className="text-lg md:text-2xl text-slate-300 max-w-2xl">
        A data analyst who loves SQL, storytelling, and building beautiful web things.
      </p>
    </section>
  );
}

export default Header;
