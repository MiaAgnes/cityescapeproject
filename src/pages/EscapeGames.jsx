import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";
import { games } from "../data/games.js";

export default function EscapeGames() {
  return (
    <Layout bgClass="subpage-bg"> 
      <main className="grid place-items-center pt-8 pb-24 px-4 w-full">
        <div className="w-full max-w-lg grid grid-cols-1 justify-items-center gap-10 text-center">
          <h1 className="font-primary text-3xl text-[#C9955D]">vores escape games</h1>

          <section className="grid grid-cols-1 gap-12 w-full justify-items-center">
            {games.map((game, index) => (
              <div key={game.id} className="grid grid-cols-1 justify-items-center gap-4 w-full">
                <img 
                  src={game.icon} 
                  alt="" 
                  style={{ 
                    width: "100px", 
                    marginTop: index === 0 ? "0" : "20px" 
                  }} 
                />
                <div className="grid grid-cols-1 justify-items-center">
                  <h2 className="text-[#C9955D] font-primary text-xl" style={{ marginBottom: "0", lineHeight: "1" }}>
                    {game.title}
                  </h2>
                  <p className="text-[#fff] px-[15px]" style={{ marginTop: "4px" }}>
                    {game.shortDescription}
                  </p>
                </div>
                <a 
                  href={game.externalLink || `/escape-games/${game.id}`} 
                  className="no-underline"
                  target={game.externalLink ? "_blank" : undefined}
                  rel={game.externalLink ? "noopener noreferrer" : undefined}
                >
                  <Button size="normal" className="-mt-[5px]">Læs mere</Button>
                </a>
              </div>
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
