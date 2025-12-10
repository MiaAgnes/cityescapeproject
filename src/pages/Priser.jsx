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
    <Layout disableScroll={true} bgClass="subpage-bg" compactFooter={true}>
      <main className="grid place-items-center pt-8 px-6 w-full">
        <div className="w-full max-w-lg grid grid-cols-1 justify-items-center gap-8 text-center">
          
          <h1 className="font-secondary text-3xl text-[#C9955D]">Priser pr. hold</h1>

          {/* Price List */}
          <div className="w-full grid gap-4 font-secondary text-white text-sm sm:text-base">
            {prices.map((item, index) => (
              <div key={index} className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <span className="text-left whitespace-nowrap">{item.label}</span>
                <div className="h-[1px] bg-[#C9955D] w-full opacity-50"></div>
                <span className="text-right whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-white italic font-secondary text-sm sm:text-base max-w-md leading-relaxed px-4">
            Vi anbefaler maks. 6 deltagere pr. hold for den bedste oplevelse og tydelig kommunikation under missionen.
          </p>

          {/* Button */}
          <div className="mt-4">
            <a href="/escape-games" className="no-underline">
              <Button size="large">FIND GAME</Button>
            </a>
          </div>

        </div>
      </main>
    </Layout>
  );
}
