import { useState, useEffect } from "react";
import Logo from "./logo.jsx";

export default function Layout({
  children,
  bgClass = "landing-bg",
  compactFooter = false,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lås scroll på body når menuen er åben
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { title: "escape games", href: "/escape-games" },
    { title: "priser", href: "/priser" },
    { title: "booking", href: "/booking" },
    { title: "generel info", href: "/generel-info" },
    { title: "sådan spiller du", href: "/sadan-spiller-du" },
    { title: "kontakt os", href: "/kontakt-os" },
  ];

  return (
    <>
      {/* Fixed Background */}
      <div 
        className={`fixed inset-0 -z-20 ${isMenuOpen ? "menu-bg" : bgClass}`} 
      />
      
      {/* Fixed Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/50" />

      <div
        className={`
          text-[#d1b27c] font-secondary w-full
          min-h-screen
          overflow-x-hidden
        `}
      >
        {/* Content Container */}
        <div className="w-full min-h-screen grid grid-rows-[auto_1fr]">
        {/* HEADER */}
        <header className="w-full relative z-50">
          <div
            className="
              mx-auto max-w-7xl px-4 pt-2 pb-4
              grid grid-cols-3 items-center
              md:grid md:grid-cols-[auto_1fr] md:gap-4
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
                grid grid-cols-1 justify-items-center md:justify-items-start gap-2
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
            <nav className="hidden md:grid md:grid-flow-col md:justify-self-end gap-8 text-xs tracking-[0.25em] uppercase font-secondary">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="no-underline text-[#C9955D]"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* === MOBIL: FULLSCREEN MENU-SIDE === */}
        {isMenuOpen && (
          <nav
            className="md:hidden fixed inset-0 z-40 grid grid-cols-1 justify-items-center content-center px-6 text-center w-full h-[100dvh]"
          >
            <div
              className="grid grid-cols-1 w-full font-primary text-[25px]"
              style={{ gap: "40px" }}
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

        {/* === CONTENT + FOOTER (når menu er lukket) === */}
        {!isMenuOpen && (
          <div className={`w-full grid ${compactFooter ? "grid-rows-[auto_auto]" : "grid-rows-[1fr_auto]"}`}>
            {/* content */}
            <div className="w-full">
              {children}
            </div>

            {/* FOOTER – følger bare efter content */}
            <div className="grid grid-cols-1 justify-items-center w-full">
              <div className="h-5 md:h-8" />
              <footer className="font-secondary text-[10px] text-center pb-8 text-[#C9955D]/70 w-full">
              CITY ESCAPE APS · CVR 41 34 23 74 · INFO@CITYESCAPE.DK · +45 71 96 16 87
            </footer>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
}
