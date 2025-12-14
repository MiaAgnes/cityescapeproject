import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";

export default function Priser() {
  const prices = [
    { label: "2 Personer", price: "269 DKK pr. person" },
    { label: "3 Personer", price: "249 DKK pr. person" },
    { label: "4 Personer", price: "219 DKK pr. person" },
    { label: "5 Personer", price: "199 DKK pr. person" },
    { label: "6+ Personer", price: "199 DKK pr. person" },
  ];

  return (
    <Layout bgClass="subpage-bg" compactFooter={true}>
      <main className="flex flex-col items-center justify-start w-full min-h-screen pt-20 pb-12 px-6 box-border">
        <div className="w-full max-w-lg md:max-w-5xl flex flex-col items-center gap-8 md:grid md:grid-cols-1 md:gap-12 text-center">
          
          <h1 className="font-primary text-2xl md:text-5xl text-[#C9955D]">priser pr. hold</h1>

          {/* Price List */}
          <div className="w-full max-w-4xl grid gap-2 md:gap-6 font-secondary text-white text-sm sm:text-base md:text-2xl mx-auto">
            {prices.map((item, index) => (
              <div key={index} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8">
                <span className="text-left whitespace-nowrap">{item.label}</span>
                <div className="h-px bg-[#C9955D] w-full opacity-50"></div>
                <span className="text-right whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-white italic font-secondary text-xs sm:text-base md:text-xl max-w-md md:max-w-2xl leading-relaxed px-4 mx-auto">
            Vi anbefaler maks. 6 deltagere pr. hold for den bedste oplevelse og tydelig kommunikation under missionen.
          </p>

          {/* Button */}
          <div className="w-full flex justify-center mt-4">
            <a href="/escape-games" className="no-underline">
              <Button size="large">FIND GAME</Button>
            </a>
          </div>

        </div>
      </main>
    </Layout>
  );
}
