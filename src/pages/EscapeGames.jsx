import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";
import { games } from "../data/games.js";

export default function EscapeGames() {
  return (
    <Layout bgClass="subpage-bg"> 
      <main className="grid place-items-center pt-12 pb-24 w-full">
        <div className="w-full px-4 md:px-6 lg:px-16 grid grid-cols-1 justify-items-center gap-16">
          <h1 className="font-primary text-3xl md:text-5xl text-[#C9955D] text-center">
            vores escape rooms
          </h1>

          <section className="grid grid-cols-1 gap-16 w-full">
            {games.map((game) => (
              <div 
                key={game.id} 
                className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 w-full"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <img 
                    src={game.icon} 
                    alt="" 
                    className="w-24 h-24 md:w-28 md:h-28 object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="grow text-center md:text-left grid gap-2">
                  <h2 className="text-[#C9955D] font-primary text-2xl md:text-3xl leading-none">
                    {game.title}
                  </h2>
                  <p className="text-white font-secondary text-sm md:text-base leading-relaxed max-w-2xl">
                    {game.shortDescription}
                  </p>
                </div>

                {/* Button */}
                <div className="shrink-0 mt-2 md:mt-0 self-center">
                  <a 
                    href={game.externalLink || `/escape-games/${game.id}`} 
                    className="no-underline block"
                    target={game.externalLink ? "_blank" : undefined}
                    rel={game.externalLink ? "noopener noreferrer" : undefined}
                  >
                    <Button size="normal">LÆS MERE</Button>
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
