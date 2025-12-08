export default function LandingPage() {
  return (
    <div className="landing-bg text-[#d1b27c] font-secondary">
      {/* mørk overlay */}
      <div className="w-full h-full min-h-screen bg-black/50 flex flex-col">
        {/* HEADER */}
        <header className="w-full">
          <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
            <span className="font-primary tracking-wide text-sm">
              CityEscape
            </span>

            <button className="md:hidden text-xl bg-black/60 rounded-full px-3 py-2">
              ☰
            </button>

            <nav className="hidden md:flex gap-8 text-xs tracking-[0.25em] uppercase font-secondary">
              <a>Escape rooms</a>
              <a>Priser</a>
              <a>Booking</a>
              <a>General info</a>
              <a>Sådan spiller du</a>
              <a>Kontakt</a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-primary text-3xl sm:text-4xl lg:text-5xl leading-tight">
              udendørs escape rooms i
              <br />
              hele 17 danske byer
            </h1>

            <p className="italic text-sm text-[#d1b27c]/80 font-secondary">
              Find dit næste eventyr her...
            </p>
          </div>
        </main>

        {/* NAVIGATION CARDS */}
        <section className="pb-12">
          <div className="mx-auto max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Escape games", "Priser", "Sådan spiller du", "Booking"].map(
              (title) => (
                <div
                  key={title}
                  className="border border-[#d1b27c]/40 bg-black/40
                             py-4 text-center uppercase tracking-[0.2em] text-xs font-secondary"
                >
                  {title}
                </div>
              )
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="font-secondary text-[10px] tracking-[0.2em] text-center pb-4 text-[#d1b27c]/70">
          CITY ESCAPE APS · CVR 41 34 23 74 · INFO@CITYESCAPE.DK · +45 71 96 16 87
        </footer>
      </div>
    </div>
  );
}
