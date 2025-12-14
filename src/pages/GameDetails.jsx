import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";
import { games } from "../data/games.js";

export default function GameDetails() {
  // Hent slug fra URL direkte
  const path = window.location.pathname.replace(/\/$/, ""); // Fjern evt. trailing slash
  const slug = path.split("/").pop();
  const game = games.find((g) => g.id === slug);

  if (!game)
    return (
      <Layout bgClass="subpage-bg">
        <div className="text-[#C9955D] text-center pt-20 font-primary text-xl">
          Spillet blev ikke fundet
        </div>
      </Layout>
    );

  return (
    <Layout bgClass="subpage-bg">
      <main className="w-full min-h-screen flex flex-col items-center pt-0 pb-8 px-4">
        <div className="-mt-[30px] min-[700px]:-mt-[50px] w-full max-w-4xl flex flex-col items-center text-center min-h-[calc(100vh-100px)] justify-start py-2 min-[700px]:py-8 gap-4 min-[700px]:gap-8">
          
          {/* Top Section: Icon + Title + Description */}
          <div className="flex flex-col items-center gap-2 min-[700px]:gap-4 w-full">
             <img 
               src={game.icon} 
               alt={game.title}
               className="h-16 min-[700px]:h-24 w-auto object-contain" 
             />
             <h1 className="font-primary text-3xl min-[700px]:text-5xl text-[#C9955D]">
               {game.title}
             </h1>
             <p className="text-white font-secondary text-sm min-[700px]:text-lg leading-relaxed max-w-2xl">
               {game.description}
             </p>
          </div>

          {/* Stats - Centered in available space */}
          <div className="flex justify-center gap-6 min-[700px]:gap-16 w-full -mt-5">
             {/* Stat 1 */}
             <div className="flex flex-col items-center gap-1">
               <img src="/icons/varighed.svg" alt="Varighed" className="w-12 h-12 min-[700px]:w-16 min-[700px]:h-16 object-contain" />
               <span className="text-[#C9955D] font-secondary text-sm min-[700px]:text-lg">{game.duration}</span>
             </div>
             {/* Stat 2 */}
             <div className="flex flex-col items-center gap-1">
               <img src="/icons/deltagere.svg" alt="Deltagere" className="w-12 h-12 min-[700px]:w-16 min-[700px]:h-16 object-contain" />
               <span className="text-[#C9955D] font-secondary text-sm min-[700px]:text-lg">{game.participants}</span>
             </div>
             {/* Stat 3 */}
             <div className="flex flex-col items-center gap-1">
               <img src="/icons/svaerhedsgrad.svg" alt="Sværhedsgrad" className="w-12 h-12 min-[700px]:w-16 min-[700px]:h-16 object-contain" />
               <span className="text-[#C9955D] font-secondary text-sm min-[700px]:text-lg">{game.difficulty}</span>
             </div>
          </div>

          {/* Bottom Section: Success Rate + Button */}
          <div className="w-full max-w-xl flex flex-col gap-4 min-[700px]:gap-8 items-center pb-5">
             <div className="w-full flex flex-col gap-1">
                <div className="flex justify-between text-[#C9955D] font-primary text-lg min-[700px]:text-xl">
                  <span>Successrate</span>
                  <span>{game.successRate}%</span>
                </div>
                <div className="w-full h-4 min-[700px]:h-4 border border-[#C9955D] rounded-full p-0.5">
                  <div className="h-full bg-[#C9955D] rounded-full" style={{ width: `${game.successRate}%` }}></div>
                </div>
             </div>
             
             <Button size="large">BOOK</Button>
          </div>

        </div>
      </main>
    </Layout>
  );
}
