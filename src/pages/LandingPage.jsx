import Layout from "../components/Layout.jsx";

export default function LandingPage() {
  return (
    <Layout>
      {/* HERO */}
      <main className="flex flex-col h-full w-full px-4">
        
        {/* TEXT SECTION - Centered in available space */}
        <div className="flex-1 flex flex-col justify-center items-center gap-6 md:gap-8 text-center">
          <h1 className="font-primary text-3xl sm:text-4xl lg:text-6xl leading-tight text-[#C9955D]">
            udendørs escape rooms i
            <br />
            hele 17 danske byer
          </h1>

          <p className="italic text-sm md:text-lg text-[#d1b27c]/80 font-secondary tracking-wider">
            Find dit næste eventyr her...
          </p>
        </div>

        {/* NAVIGATION CARDS - Pushed to bottom */}
        <section className="w-full grid justify-center pb-6 md:pb-12 lg:pb-16">
          <div 
            className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-5 md:gap-8 lg:gap-12"
          >
            {[
              { title: "Escape games", image: "/icons/escape-games.svg", href: "/escape-games" },
              { title: "Priser", image: "/icons/priser.svg", href: "/priser" },
              { title: "Sådan spiller du", image: "/icons/regler.svg", href: "/sadan-spiller-du" },
              { title: "Booking", image: "/icons/booking.svg", href: "/booking" },
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="
                  w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]
                  border border-[#d1b27c]/40 rounded-[10px]
                  grid grid-cols-1 justify-items-center content-center
                  text-center
                  no-underline
                  hover:bg-[#d1b27c]/10 transition-colors
                "
              >
                {/* Billede */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] mb-2 object-contain opacity-90"
                />
                
                {/* Tekst */}
                <span className="font-secondary text-[#d1b27c] text-[12px] md:text-[14px] lg:text-[16px] uppercase tracking-widest leading-tight px-2">
                  {card.title}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
