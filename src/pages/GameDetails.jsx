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
      {/* Main container using Grid instead of Flex */}
      <main className="grid place-items-center px-6 pt-4 pb-10 w-full">
        {/* Content wrapper using Grid for vertical stacking */}
        <div className="w-full max-w-lg grid grid-cols-1 justify-items-center gap-4 text-center">
          {/* Game Icon */}
          <img
            src={game.icon}
            alt={game.title}
            className="w-[80px] sm:w-[100px]"
          />

          {/* Title */}
          <h1 className="font-primary text-2xl sm:text-3xl text-[#C9955D] -mt-2">
            {game.title}
          </h1>

          {/* Description */}
          <p className="text-[#fff] leading-relaxed text-sm sm:text-base">
            {game.description}
          </p>

          {/* Stats Grid - Combined Icons and Text */}
          <div className="w-full grid grid-cols-3 justify-items-center mt-2">
            {/* Icons */}
            <img
              src="/icons/varighed.svg"
              alt="Varighed"
              className="object-contain -mt-0.5"
              style={{ width: '5rem', height: '5rem' }}
            />
            <img
              src="/icons/deltagere.svg"
              alt="Deltagere"
              className="object-contain -mt-0.5"
              style={{ width: '5rem', height: '5rem' }}
            />
            <img
              src="/icons/svaerhedsgrad.svg"
              alt="Sværhedsgrad"
              className="object-contain -mt-0.5"
              style={{ width: '5rem', height: '5rem' }}
            />

            {/* Text */}
            <span className="text-[#C9955D] text-sm sm:text-base font-secondary -mt-0.5">
              {game.duration}
            </span>
            <span className="text-[#C9955D] text-sm sm:text-base font-secondary -mt-0.5">
              {game.participants}
            </span>
            <span className="text-[#C9955D] text-sm sm:text-base font-secondary -mt-0.5">
              {game.difficulty}
            </span>
          </div>

          {/* Success Rate */}
          <div className="w-full mt-2 px-2 grid gap-0">
            <div className="grid grid-cols-2 text-[#C9955D] text-sm sm:text-base font-primary">
              <span className="text-left">successrate</span>
              <span className="text-right">{game.successRate}%</span>
            </div>
            <div className="w-full h-3 border border-[#C9955D]/50 rounded-full p-[2px]">
              <div
                className="h-full bg-[#C9955D] rounded-full"
                style={{ width: `${game.successRate}%` }}
              ></div>
            </div>
          </div>

          {/* Book Button */}
          <div style={{ marginTop: "12px" }}>
            <Button size="large">BOOK</Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
