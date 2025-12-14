import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";

export default function SadanSpillerDu() {
  const sections = [
    {
      title: "ankomst & briefing",
      text: "Når I møder op ved startpunktet, bliver I taget imod af vores game host, som kort introducerer missionen og udleverer kufferten med gadgets. Herefter vælger I én som game master, der styrer missionen fra sin egen telefon, mens resten af holdet følger med som team players på deres egne mobiler."
    },
    {
      title: "vælg spiltillstand",
      text: "Inden I går i gang, vælger I mellem standard mode, light mode til familier eller en lettere rute, der giver en kortere og mindre fysisk krævende tur gennem byen. Missionen tilpasser sig automatisk jeres valg."
    },
    {
      title: "start missionen",
      text: "Når Game Master aktiverer spillet, åbner historien sig lag for lag. Videoer, billeder og spor viser jer vejen videre, mens Team Players kan følge handlingen uden at låse opgaverne op."
    },
    {
      title: "følg sporene gennem byen",
      text: "I bevæger jer fra sted til sted, bruger kuffertens gadgets, undersøger omgivelserne og arbejder sammen om at forstå de spor, der gemmer sig i gaderne. Kun når Game Master løser en opgave, åbner næste del af missionen."
    },
    {
      title: "afslut missionen",
      text: "Når mysteriet er løst, vender I tilbage til startpunktet for at aflevere kufferten og få jeres tid og resultat. Måske inspiration til endnu en mission."
    }
  ];

  return (
    <Layout bgClass="landing-bg">
      <main className="grid place-items-center pt-4 px-6 w-full pb-6">
        <div className="w-full max-w-lg min-[700px]:max-w-7xl grid grid-cols-1 justify-items-center gap-4 min-[700px]:gap-10 text-center">
          
          <h1 className="font-primary text-3xl text-[#C9955D]">sådan spiller du</h1>

          {sections.map((section, index) => (
            <div key={index} className="w-full grid justify-items-center">
              <div className="h-px bg-[#C9955D] w-full opacity-50 mb-4 min-[700px]:mb-8"></div>
              
              <h2 className="font-primary text-xl text-[#C9955D] mb-2 min-[700px]:mb-4">
                {section.title}
              </h2>
              
              <p className="text-white font-secondary text-sm sm:text-base leading-relaxed max-w-3xl text-center">
                {section.text}
              </p>
            </div>
          ))}

          <div className="h-px bg-[#C9955D] w-full opacity-50 mt-2"></div>

          <div className="grid gap-4 justify-items-center text-white font-secondary text-sm sm:text-base leading-relaxed max-w-3xl">
            <p>
              Hvis der er noget, du stadig undrer dig over, hjælper vi dig gerne. Skriv til os, så guider vi dig, før din mission overhovedet begynder.
            </p>
            <p>
              Ingen spørgsmål er for små, når et mysterium skal løses.
            </p>
            
            <a href="/kontakt-os" className="no-underline mt-2">
              <Button size="large">KONTAKT</Button>
            </a>
          </div>

        </div>
      </main>
    </Layout>
  );
}
