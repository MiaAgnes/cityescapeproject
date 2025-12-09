import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";

export default function EscapeGames() {
  return (
    <Layout> 
      <main className="flex flex-col items-center justify-start pt-8 text-center px-4 gap-10">
        <h1 className="font-primary text-3xl text-[#C9955D]">vores escape games</h1>

        <section className="flex flex-col items-center gap-4">
        <img src="/icons/operation-mindfall.svg" alt="" style={{ width: "100px" }} />
        <h2 className="text-[#C9955D] font-primary text-xl">operation mindfall</h2>
        <p className="text-[#fff]">Stop en global trussel, find skjulte spor i byen og hack jer ind før tiden løber ud. Et højintenst spion-eventyr.</p>
        <Button size="large">Læs mere</Button>

        <img src="/icons/black-out.svg" alt="" style={{ width: "100px" }} />
        <h2 className="text-[#C9955D] font-primary text-xl">black out</h2>
        <p className="text-[#fff]">Strømmen er gået over hele byen. Find årsagen, genstart systemerne og afslør hvem der står bag, før kaos bryder løs.</p>
        <Button size="large">Læs mere</Button>

         <img src="/icons/hunt-a-killer.svg" alt="" style={{ width: "100px" }} />
        <h2 className="text-[#C9955D] font-primary text-xl">hunt a killer</h2>
        <p className="text-[#fff]">En morder er på fri fod. Jagt spor rundtom i byen, følg de kryptiske beskeder og opklar sagen inden det næste angreb.</p>
        <Button size="large">Læs mere</Button>

        <img src="/icons/den-magiske-portal.svg" alt="" style={{ width: "100px" }} />
        <h2 className="text-[#C9955D] font-primary text-xl">den magiske portal</h2>
        <p className="text-[#fff]">Magiske væsner er sluppet fri i jeres verden. Løs gåder, find krystaller og luk portalen, før det er for sent.</p>
        <Button size="large">Læs mere</Button>

        <img src="/icons/red-julen.svg" alt="" style={{ width: "100px" }} />
        <h2 className="text-[#C9955D] font-primary text-xl">red julen</h2>
        <p className="text-[#fff]">En kuldekatastrofe har stoppet julemandens værksted. Følg spor, løs gåder og genfind julemagien på denne julemission</p>
        <Button size="large">Læs mere</Button>

        <img src="/icons/save-the-wedding-women.svg" alt="" style={{ width: "100px" }} />
        <h2 className="text-[#C9955D] font-primary text-xl">save the wedding</h2>
        <p className="text-[#fff]">Brudgommen er kidnappet! Følg spor gennem byen og jagt kidnapperen i en sjov og udfordrende polterabend-mission. Min. 5 deltagere.</p>
        <Button size="large">Læs mere</Button>

        <img src="/icons/save-the-wedding-men.svg" alt="" style={{ width: "100px" }} />
        <h2 className="text-[#C9955D] font-primary text-xl">save the wedding</h2>
        <p className="text-[#fff]">En kuldekatastrofe har stoppet julemandens værksted. Følg spor, løs gåder og genfind julemagien på denne julemission</p>
        <Button size="large">Læs mere</Button>

        <img src="/icons/bornefodselsdag.svg" alt="" style={{ width: "100px" }} />
        <h2 className="text-[#C9955D] font-primary text-xl">børnefødselsdag</h2>
        <p className="text-[#fff]">Et magisk familievenligt escape game til fødselsdage. Løs gåder, find krystaller og luk portalen! Fra 12–14 år. Min. 5 deltagere.</p>
        <Button size="large">Læs mere</Button>

        <img src="/icons/mordministeriet.svg" alt="" style={{ width: "100px" }} />
        <h2 className="text-[#C9955D] font-primary text-xl">bestil et mord</h2>
        <p className="text-[#fff]">Et spændende mordmysterium for virksomheder. I gennemgår spor og beviser, finder motiver og afslører morderen, før tiden løber ud. Perfekt til teambuilding og firmaevents.</p>
        <Button size="large">Læs mere</Button>
        </section>
      </main>
    </Layout>
  );
}
