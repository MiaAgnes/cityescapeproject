import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";

export default function GeneralInfo() {
  const cities = [
    "Aalborg", "Aarhus", "Esbjerg", "Fredericia",
    "Herning", "København", "Viborg", "Randers",
    "Horsens", "Sønderborg", "Vejle", "Silkeborg",
    "Kolding", "Helsingør", "Næstved", "Roskilde",
    "Odense"
  ];

  const sections = [
    {
      title: "hvordan foregår en mission?",
      text: "I møder op ved startpunktet, hvor I får udleveret en kuffert med gadgets. Herfra følger I spor og gåder gennem byen. Ruten er typisk 2–2,5 km og tager ca. 2 timer, afhængigt af tempo og teamwork."
    },
    {
      title: "hold og deltagere",
      text: "Et hold fungerer bedst med 2–6 personer. Er I flere, kan I dele jer i flere grupper og dyste mod hinanden."
    },
    {
      title: "hvad skal i have med?",
      text: "Medbring en fuldt opladet telefon (gerne med powerbank), behagelige sko og tøj efter vejret. En lille notesbog kan også være nyttig, men er helt frivillig."
    },
    {
      title: "betaling",
      text: "Betaling foregår via MobilePay for private hold, mens firmaer kan betale med faktura."
    },
    {
      title: "aflysning og ombooking",
      text: "I kan ombooke frem til missionens start. Øvrige afbestillingsregler afhænger af arrangementstype og kan ses i jeres bookingbekræftelse."
    },
    {
      title: "oplevelsen for alle",
      text: "Missionerne foregår udendørs i almindeligt bymiljø, hvor enkelte ruter kan have trapper, bakker eller ujævnt terræn. Nogle byer tilbyder alternative ruter med kortere afstand eller færre stigninger, så alle kan være med. Flere steder findes der også en lettere udgave af missionen, velegnet til yngre deltagere og familier."
    }
  ];

  return (
    <Layout bgClass="landing-bg">
      <main className="grid place-items-center pt-4 px-6 w-full pb-6">
        <div className="w-full max-w-lg min-[700px]:max-w-7xl grid grid-cols-1 justify-items-center gap-4 min-[700px]:gap-10 text-center">
          
          {/* Cities Section */}
          <div className="grid gap-2 justify-items-center w-full">
            <h1 className="font-primary text-2xl sm:text-3xl text-[#C9955D]">
              hvor kan cityescape spilles?
            </h1>
            <p className="text-white font-secondary text-sm sm:text-base leading-relaxed max-w-3xl">
              CityEscape kan spilles i 17 danske byer, hvor hver mission er skræddersyet til byens gader, stemning og skjulte kroge.
            </p>
            <p className="text-[#C9955D] font-secondary text-sm sm:text-base italic mt-[15px]">
              Her opererer vi i øjeblikket:
            </p>
            
            <div className="grid grid-cols-2 min-[700px]:grid-cols-4 gap-x-8 gap-y-2 text-left text-[#C9955D] font-secondary text-sm sm:text-base mt-4 w-full max-w-5xl mx-auto">
              {cities.map((city) => (
                <div key={city} className="flex items-center justify-center">
                  <img src="/logo-uden-bg.svg" alt="" className="w-4 h-4 mr-1" />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            <p className="text-[#C9955D] font-secondary text-xs sm:text-sm italic mt-2 opacity-80">
              Flere byer tilføjes løbende, efterhånden som nye missioner udvikles.
            </p>
          </div>

          {/* Info Sections */}
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

          <div className="h-px bg-[#C9955D] w-full opacity-50"></div>

          {/* Footer / Contact Section */}
          <div className="grid gap-4 justify-items-center text-white font-secondary text-sm sm:text-base leading-relaxed max-w-3xl">
            <p>
              Sidder du stadig med et spørgsmål?
              <br />
              Hvis der er noget, du er i tvivl om, stort eller småt, så er du altid velkommen til at skrive til os.
            </p>
            <p>
              Vi hjælper dig gerne videre, så jeres mission kan starte uden usikkerheder.
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
