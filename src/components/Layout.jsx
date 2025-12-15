import { useState, useEffect } from "react";
import Logo from "./logo.jsx";

export default function Layout({
  children,
  bgClass = "landing-bg",
  compactFooter = false,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { title: "escape games", href: "/cityescapeproject/escape-games" },
    { title: "priser", href: "/cityescapeproject/priser" },
    { title: "booking", href: "/cityescapeproject/booking" },
    { title: "generel info", href: "/cityescapeproject/generel-info" },
    { title: "sådan spiller du", href: "/cityescapeproject/sadan-spiller-du" },
    { title: "kontakt os", href: "/cityescapeproject/kontakt-os" },
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
              w-full px-4 min-[700px]:px-6 lg:px-10 xl:px-16 pt-2 pb-4
              grid grid-cols-3 items-center
              min-[700px]:flex min-[700px]:justify-between min-[700px]:items-center
            "
          >
            {/* burgermenu – mobil venstre */}
            <button
              className="min-[700px]:hidden text-[50px] bg-transparent justify-self-start border-none text-[#d1b27c]"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Luk navigation" : "Åbn navigation"}
              aria-expanded={isMenuOpen}
            >
              ☰
            </button>

            {/* LOGO SECTION */}
            <div className="justify-self-center min-[700px]:justify-self-start flex items-center min-[700px]:gap-4 lg:gap-6 xl:gap-8">
              <a
                href="/cityescapeproject/"
                className="
                  flex flex-col min-[700px]:flex-row items-center gap-2 min-[700px]:gap-2 min-[750px]:gap-4
                  no-underline text-[#C9955D]
                "
              >
                <Logo className="h-[60px] min-[700px]:h-[50px] min-[750px]:h-[60px]" />
                <span className="font-primary tracking-wide text-[20px] min-[700px]:text-[16px] lg:text-[20px] xl:text-[24px]">
                  cityescape
                </span>
              </a>
            </div>

            {/* tom spacer på mobil for at holde logo centreret */}
            <div className="min-[700px]:hidden" />

            {/* DESKTOP NAV */}
            <nav className="hidden min-[700px]:flex items-center min-[700px]:gap-2 lg:gap-6 xl:gap-10 min-[700px]:text-[10px] lg:text-[12px] xl:text-[14px] min-[700px]:tracking-widest lg:tracking-widest uppercase font-secondary whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="no-underline text-[#C9955D] hover:text-white transition-colors"
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
            className="md:hidden fixed inset-0 z-40 grid grid-cols-1 justify-items-center content-center px-6 text-center w-full h-dvh pt-[100px]"
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

        {!isMenuOpen && (
          <div className={`w-full grid ${compactFooter ? "grid-rows-[auto_auto]" : "grid-rows-[1fr_auto]"}`}>
            <div className="w-full">
              {children}
            </div>

            {/* FOOTER – følger efter content */}
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
