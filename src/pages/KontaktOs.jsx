import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";

export default function KontaktOs() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date(),
      });
      setStatus({ loading: false, success: true, error: null });
      setFormData({ email: "", message: "" });
    } catch (err) {
      console.error("Error adding document: ", err);
      setStatus({ loading: false, success: false, error: "Der skete en fejl. Prøv igen senere." });
    }
  };

  return (
    <Layout bgClass="subpage-bg">
      <main className="grid place-items-center pt-8 px-6 w-full pb-12">
        <div className="w-full max-w-lg min-[700px]:max-w-7xl grid grid-cols-1 justify-items-center gap-8 text-center">
          
          {!status.success && (
            <div className="grid gap-4 justify-items-center w-full max-w-5xl">
              <h1 className="font-primary text-3xl text-[#C9955D]">kontakt os</h1>
              
              <p className="text-white font-secondary text-sm sm:text-base leading-relaxed">
                Har du spørgsmål til et arrangement, eller vil du vide mere om vores spil? Udfyld formularen herunder, så vender vi tilbage hurtigst muligt.
              </p>
            </div>
          )}

          {status.success ? (
            <div className="border border-[#d1b27c]/40 p-6 rounded-[10px] text-white font-secondary">
              <h3 className="font-primary text-xl mb-2 text-[#C9955D]">tak for din besked!</h3>
              <p>Vi har modtaget din henvendelse og vender tilbage snarest.</p>
              <button 
                onClick={() => setStatus({ ...status, success: false })}
                className="mt-4 text-[#C9955D] underline cursor-pointer"
              >
                Send en ny besked
              </button>
            </div>
          ) : (
            <div className="w-full max-w-5xl grid gap-6">
                <h2 className="font-primary text-2xl text-[#C9955D]">skriv dit mysterium her</h2>

                <form onSubmit={handleSubmit} className="w-full grid gap-4 text-left">
                  <div>
                    <label htmlFor="email" className="block text-[#C9955D] font-secondary text-lg mb-2">E-mail*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-[#C9955D] rounded p-3 text-white font-secondary focus:outline-none focus:ring-2 focus:ring-[#C9955D] transition-all placeholder-white"
                      placeholder="Indtast e-mail.."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#C9955D] font-secondary text-lg mb-2">Besked*</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-[#C9955D] rounded p-3 text-white font-secondary focus:outline-none focus:ring-2 focus:ring-[#C9955D] transition-all resize-none placeholder-white"
                      placeholder="Skriv din besked her.."
                    ></textarea>
                  </div>

                  {status.error && (
                    <p className="text-red-400 text-sm text-center">{status.error}</p>
                  )}

                  <div className="justify-self-center mt-4">
                    <button 
                      type="submit" 
                      disabled={status.loading}
                      className="bg-transparent border-none p-0 cursor-pointer"
                    >
                      <Button size="large">
                        {status.loading ? "SENDER..." : "SEND"}
                      </Button>
                    </button>
                  </div>
                </form>
            </div>
          )}

          {!status.success && (
            <>
              <div className="h-px bg-[#C9955D] w-full opacity-50 mt-4"></div>

              <div className="text-white font-secondary text-sm sm:text-base leading-relaxed">
                <p>Du kan også fange os på telefon eller mail:</p>
                <p className="text-[#C9955D] mt-2">+45 71 96 16 87</p>
                <p className="text-[#C9955D]">INFO@CITYESCAPE.DK</p>
              </div>
            </>
          )}

        </div>
      </main>
    </Layout>
  );
}
