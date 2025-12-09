import Layout from "../components/Layout.jsx";

export default function Priser() {
  return (
    <Layout disableScroll={true} bgClass="subpage-bg">
      <main className="flex flex-col items-center justify-start pt-8 text-center px-4 gap-10">
        <h1 className="font-primary text-3xl text-[#C9955D]">Priser</h1>
        <p className="text-[#C9955D]">Se vores priser her...</p>
      </main>
    </Layout>
  );
}
