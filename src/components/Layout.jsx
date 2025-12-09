import { useState } from "react";
import Logo from "./logo.jsx";

export default function Layout({ children, disableScroll = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "escape games", href: "/escape-games" },
    { title: "priser", href: "/priser" },
    { title: "booking", href: "/booking" },
    { title: "generel info", href: "/generel-info" },
    { title: "sådan spiller du", href: "/sadan-spiller-du" },
    { title: "kontakt os", href: "/kontakt-os" },
  ];

  // Hvis menuen er åben, låser vi altid scroll
  const shouldLockScroll = disableScroll || isMenuOpen;

  return (
    <div
      className={`
     ${isMenuOpen ? "menu-bg" : "landing-bg"}
     text-[#d1b27c] font-secondary
     w-full
     ${shouldLockScroll ? "h-[100dvh] overflow-hidden" : "min-h-screen overflow-x-hidden"}
      `}
    >
      <div 
        className={`
          w-full bg-black/50 flex flex-col
          ${shouldLockScroll ? "h-full overflow-hidden" : "min-h-screen"}
        `}
      >
        {/* HEADER */}
        <header className="w-full relative z-20">
          <div
            className="
              mx-auto max-w-7xl px-6 pt-6 pb-4
              grid grid-cols-3 items-center
              md:flex md:justify-between
            "
          >
            {/* burgermenu – mobil venstre */}
            <button
              className="md:hidden text-[50px] bg-transparent justify-self-start border-none text-[#d1b27c]"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Luk navigation" : "Åbn navigation"}
              aria-expanded={isMenuOpen}
            >
              ☰
            </button>

            {/* LOGO – midten på mobil, venstre på desktop */}
            <a
              href="/"
              className="
                justify-self-center
                md:justify-self-start
                flex flex-col items-center md:items-start gap-2
                no-underline text-[#C9955D]
              "
            >
              <Logo height={60} />
              <span className="font-primary tracking-wide text-[20px]">
                cityescape
              </span>
            </a>

            {/* tom spacer på mobil for at holde logo centreret */}
            <div className="md:hidden" />

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex gap-8 text-xs tracking-[0.25em] uppercase font-secondary">
              {navLinks.map((link) => (
                <a key={link.title} href={link.href} className="no-underline text-[#C9955D]">
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* === MOBIL: FULLSCREEN MENU-SIDE === */}
        {isMenuOpen && (
          <nav
            className="md:hidden flex-1 flex flex-col items-center justify-start px-6 text-center w-full"
            style={{ paddingTop: "50px" }}
          >
            <div
              className="flex flex-col w-full font-primary text-[25px]"
              style={{ gap: "50px" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-[#C9955D] no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </nav>
        )}

        {/* === CONTENT (skjules på mobil, når menu er åben) === */}
        {!isMenuOpen && (
          <>
            {children}
            
            {/* FOOTER */}
            <div style={{ height: "20px" }}></div>
            <footer className="font-secondary text-[10px] text-center pb-8 text-[#C9955D]/70">
              CITY ESCAPE APS · CVR 41 34 23 74 · INFO@CITYESCAPE.DK · +45 71 96 16 87
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
