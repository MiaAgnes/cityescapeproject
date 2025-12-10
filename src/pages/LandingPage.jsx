import Layout from "../components/Layout.jsx";

export default function LandingPage() {
  return (
    <Layout>
      {/* HERO */}
      <main className="grid place-items-center content-start pt-8 text-center px-4 gap-10 w-full">
        <div className="max-w-3xl grid grid-cols-1 gap-6 justify-items-center">
          <h1 className="font-primary text-3xl sm:text-4xl lg:text-5xl leading-tight">
            udendørs escape rooms i
            <br />
            hele 17 danske byer
          </h1>

          <p className="italic text-sm text-[#d1b27c]/80 font-secondary">
            Find dit næste eventyr her...
          </p>
        </div>

        {/* NAVIGATION CARDS */}
        <section className="w-full grid justify-center">
          <div 
            className="grid grid-cols-2 justify-items-center"
            style={{ gap: "20px" }}
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
                style={{ width: "140px", height: "140px", borderRadius: "10px" }}
                className="
                  border border-[#d1b27c]/40
                  grid grid-cols-1 justify-items-center content-center
                  text-center
                  block
                  no-underline
                "
              >
                {/* Billede */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{ width: "100px", height: "100px" }}
                  className="mb-2 object-contain opacity-90"
                />
                
                {/* Tekst */}
                <span className="font-secondary text-[#d1b27c] text-[13.5px] uppercase tracking-widest leading-tight">
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
