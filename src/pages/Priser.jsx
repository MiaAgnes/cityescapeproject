import Layout from "../components/Layout.jsx";

export default function Priser() {
  return (
    <Layout disableScroll={true} bgClass="subpage-bg">
      <main className="grid place-items-center pt-8 px-4 w-full">
        <div className="w-full max-w-lg grid grid-cols-1 justify-items-center gap-10 text-center">
          <h1 className="font-primary text-3xl text-[#C9955D]">Priser</h1>
          <p className="text-[#C9955D]">Se vores priser her...</p>
        </div>
      </main>
    </Layout>
  );
}
