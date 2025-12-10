import Layout from "../components/Layout.jsx";

export default function GeneralInfo() {
  return (
    <Layout>
      <main className="grid place-items-center pt-8 px-4 w-full">
        <div className="w-full max-w-lg grid grid-cols-1 justify-items-center gap-10 text-center">
          <h1 className="font-primary text-3xl text-[#C9955D]">Generel Info</h1>
          <p className="text-[#C9955D]">Information om City Escape...</p>
        </div>
      </main>
    </Layout>
  );
}
