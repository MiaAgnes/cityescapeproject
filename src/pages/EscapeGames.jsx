import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";
import { games } from "../data/games.js";

export default function EscapeGames() {
  return (
    <Layout bgClass="subpage-bg"> 
      <main className="flex flex-col items-center justify-start pt-8 pb-24 text-center px-4 gap-10">
        <h1 className="font-primary text-3xl text-[#C9955D]">vores escape games</h1>

        <section className="flex flex-col items-center gap-12">
          {games.map((game, index) => (
            <div key={game.id} className="flex flex-col items-center gap-4">
              <img 
                src={game.icon} 
                alt="" 
                style={{ 
                  width: "100px", 
                  marginTop: index === 0 ? "0" : "20px" 
                }} 
              />
              <div className="flex flex-col items-center">
                <h2 className="text-[#C9955D] font-primary text-xl" style={{ marginBottom: "0", lineHeight: "1" }}>
                  {game.title}
                </h2>
                <p className="text-[#fff] px-[15px]" style={{ marginTop: "4px" }}>
                  {game.shortDescription}
                </p>
              </div>
              <a href={`/escape-games/${game.id}`}>
                <Button size="large" className="-mt-[5px]">Læs mere</Button>
              </a>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
