import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Layout from "../components/Layout.jsx";
import Button from "../components/Button.jsx";

export default function Booking() {
  const [formData, setFormData] = useState({
    game: "",
    city: "",
    date: "",
    time: "",
    participants: "",
    route: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const [fieldErrors, setFieldErrors] = useState({});

  const games = ["Operation Mindfall", "Black Out", "Hunt A Killer", "Den Magiske Portal", "Red Julen", "Save The Wedding(Kvinder)", "Save The Wedding(Mænd)", "Børnefødselsdag"];
  const cities = ["Aalborg", "Aarhus", "Esbjerg", "Fredericia", "Herning", "Viborg", "Randers", "Horsens", "Sønderborg", "Vejle", "Silkeborg", "Kolding", "Odense", "Næstved", "Roskilde", "Helsingør", "København"]; 
  const routes = ["Standard", "Light (Børnefamilie)", "Let (Kortere)"];

  const generateAvailableSlots = () => {
    const slots = {};
    const today = new Date();
    const daysToGenerate = 30; // Generer datoer for de næste 30 dage

    const timeSlots = {
      weekday: ["14:00", "15:00", "16:30", "17:30"],
      friday: ["12:00", "13:00", "14:00", "15:30", "16:30", "18:00", "19:00"],
      saturday: ["09:00", "10:00", "11:30", "12:30", "14:00", "15:00", "16:30", "17:30", "19:00"],
      sunday: ["10:00", "11:30", "13:00", "14:30", "16:00"],
    };

    for (let i = 0; i < daysToGenerate; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dayName = date.toLocaleDateString('da-DK', { weekday: 'long' });
      const day = date.getDate();
      const month = date.toLocaleDateString('da-DK', { month: 'short' });
      
      const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
      const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).replace('.', '');

      const dateString = `${capitalizedDayName} d. ${day}. ${capitalizedMonth}`;

      const dayOfWeek = date.getDay(); // 0 = Søndag, 6 = Lørdag
      
      let times = [];
      if (dayOfWeek === 5) { // Fredag
          times = timeSlots.friday;
      } else if (dayOfWeek === 6) { // Lørdag
          times = timeSlots.saturday;
      } else if (dayOfWeek === 0) { // Søndag
          times = timeSlots.sunday;
      } else {
          times = timeSlots.weekday;
      }

      slots[dateString] = times;
    }
    return slots;
  };

  const availableSlots = generateAvailableSlots();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e.target.value, time: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    setFieldErrors({});

    const setErrorAndScroll = (errorMessage, fieldId) => {
      setStatus(prev => ({ ...prev, loading: false }));
      setFieldErrors(prev => ({ ...prev, [fieldId]: errorMessage }));
      // Vent en lille smule for at sikre at state er opdateret, og scroll derefter
      setTimeout(() => {
        const element = document.getElementById(fieldId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.focus();
          // Tilføj en midlertidig highlight effekt
          element.style.borderColor = "#ff6b6b";
          setTimeout(() => {
            element.style.borderColor = ""; // Reset border color after 2 seconds
          }, 2000);
        }
      }, 100);
    };

    // Validering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{8}$/; // Antager danske numre (8 cifre)

    if (!formData.game) {
      setErrorAndScroll("Du mangler at vælge et escape game.", "game");
      return;
    }
    if (!formData.city) {
      setErrorAndScroll("Du mangler at vælge en by.", "city");
      return;
    }
    if (!formData.date) {
      setErrorAndScroll("Du mangler at vælge en dato.", "date");
      return;
    }
    if (!formData.time) {
      setErrorAndScroll("Du mangler at vælge et tidspunkt.", "time");
      return;
    }
    if (!formData.participants) {
      setErrorAndScroll("Du mangler at vælge antal deltagere.", "participants");
      return;
    }
    if (!formData.route) {
      setErrorAndScroll("Du mangler at vælge en rute.", "route");
      return;
    }
    if (!formData.name.trim()) {
      setErrorAndScroll("Du mangler at indtaste dit navn.", "name");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setErrorAndScroll("Indtast venligst en gyldig e-mail adresse.", "email");
      return;
    }
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      setErrorAndScroll("Indtast venligst et gyldigt telefonnummer (8 cifre).", "phone");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        ...formData,
        createdAt: new Date(),
        status: "new"
      });
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        game: "", city: "", date: "", time: "", participants: "", route: "",
        name: "", email: "", phone: "", message: ""
      });
    } catch (err) {
      console.error("Error adding booking: ", err);
      setStatus({ loading: false, success: false, error: "Der skete en fejl. Prøv igen senere." });
    }
  };

  const inputClasses = "w-full box-border bg-black border border-[#C9955D] rounded-[10px] p-3 text-white font-secondary focus:outline-none focus:border-[#fff] transition-colors placeholder:text-gray-500 appearance-none";
  const labelClasses = "block text-[#C9955D] font-secondary text-sm mb-1 ml-1";

  return (
    <Layout bgClass="subpage-bg">
      <main className="grid place-items-center pt-8 px-6 w-full pb-12">
        <div className="w-full max-w-lg min-[700px]:max-w-4xl grid grid-cols-1 justify-items-center gap-8 text-center">
          
          {!status.success && (
            <div className="grid gap-2">
              <h1 className="font-primary text-3xl sm:text-4xl text-[#C9955D]">
                book en mystisk oplevelse
              </h1>
            </div>
          )}

          {status.success ? (
            <div className="border border-[#d1b27c]/40 p-6 rounded-[10px] text-white font-secondary">
              <h3 className="font-primary text-xl mb-2 text-[#C9955D]">tak for din booking</h3>
              <p>Vi har modtaget din booking og sender en bekræftelse til din mail snarest.</p>
              <button 
                onClick={() => setStatus({ ...status, success: false })}
                className="mt-4 text-[#C9955D] underline cursor-pointer"
              >
                Lav en ny booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full grid gap-6 text-left" noValidate>
              
              {/* SEKTION 1: INDLED JERES MISSION */}
              <div className="grid gap-8 min-[700px]:grid-cols-2 min-[700px]:gap-x-12 min-[700px]:gap-y-10">
                <h2 className="font-primary text-2xl text-[#C9955D] text-center mt-4 mb-2 min-[700px]:col-span-2 min-[700px]:text-3xl">
                  indled jeres mission
                </h2>

                <div className="relative">
                  <label htmlFor="game" className={labelClasses}>Escape Game*</label>
                  <select
                    id="game"
                    name="game"
                    required
                    value={formData.game}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="" disabled>Vælg escape game</option>
                    {games.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                  {fieldErrors.game && <p className="text-red-400 text-xs absolute left-1 -bottom-5">{fieldErrors.game}</p>}
                </div>

                <div className="relative">
                  <label htmlFor="city" className={labelClasses}>By*</label>
                  <select
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="" disabled>Vælg by</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {fieldErrors.city && <p className="text-red-400 text-xs absolute left-1 -bottom-5">{fieldErrors.city}</p>}
                </div>

                <div className="relative">
                  <label htmlFor="date" className={labelClasses}>Dato*</label>
                  <select
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleDateChange}
                    className={inputClasses}
                  >
                    <option value="" disabled>Vælg dato</option>
                    {Object.keys(availableSlots).map(date => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                  {fieldErrors.date && <p className="text-red-400 text-xs absolute left-1 -bottom-5">{fieldErrors.date}</p>}
                </div>

                <div className="relative">
                  <label htmlFor="time" className={labelClasses}>Tidspunkt*</label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    disabled={!formData.date}
                    className={`${inputClasses} ${!formData.date ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <option value="" disabled>
                      {formData.date ? "Vælg tidspunkt" : "Vælg dato først"}
                    </option>
                    {formData.date && availableSlots[formData.date]?.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {fieldErrors.time && <p className="text-red-400 text-xs absolute left-1 -bottom-5">{fieldErrors.time}</p>}
                </div>

                <div className="relative">
                  <label htmlFor="participants" className={labelClasses}>Antal deltagere*</label>
                  <select
                    id="participants"
                    name="participants"
                    required
                    value={formData.participants}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="" disabled>Vælg antal deltagere</option>
                    {[2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  {fieldErrors.participants && <p className="text-red-400 text-xs absolute left-1 -bottom-5">{fieldErrors.participants}</p>}
                </div>

                <div className="relative">
                  <label htmlFor="route" className={labelClasses}>Rute*</label>
                  <select
                    id="route"
                    name="route"
                    required
                    value={formData.route}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="" disabled>Vælg rute</option>
                    {routes.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {fieldErrors.route && <p className="text-red-400 text-xs absolute left-1 -bottom-5">{fieldErrors.route}</p>}
                </div>

                <h2 className="font-primary text-2xl text-[#C9955D] text-center mt-4 mb-2 min-[700px]:col-span-2 min-[700px]:text-3xl">
                  holdlederens oplysninger
                </h2>

                <div className="relative">
                  <label htmlFor="name" className={labelClasses}>Fulde navn*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Indtast fulde navn.."
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  {fieldErrors.name && <p className="text-red-400 text-xs absolute left-1 -bottom-5">{fieldErrors.name}</p>}
                </div>

                <div className="relative">
                  <label htmlFor="email" className={labelClasses}>E-mail*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Indtast e-mail adresse.."
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  {fieldErrors.email && <p className="text-red-400 text-xs absolute left-1 -bottom-5">{fieldErrors.email}</p>}
                </div>

                <div className="relative">
                  <label htmlFor="phone" className={labelClasses}>Telefonnummer*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Indtast telefonnummer.."
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  {fieldErrors.phone && <p className="text-red-400 text-xs absolute left-1 -bottom-5">{fieldErrors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>Kommentar</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Indtast valgfri kommentar.."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  ></textarea>
                </div>
              </div>

              {status.error && (
                <p className="text-red-400 text-sm text-center">{status.error}</p>
              )}

              <div className="justify-self-center mt-8 mb-8">
                <button 
                  type="submit" 
                  disabled={status.loading}
                  className="bg-transparent border-none p-0 cursor-pointer"
                >
                  <Button size="large">
                    {status.loading ? "BOOKER..." : "BOOK"}
                  </Button>
                </button>
              </div>
            </form>
          )}

        </div>
      </main>
    </Layout>
  );
}
