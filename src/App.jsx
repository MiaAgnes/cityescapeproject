import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import EscapeGames from "./pages/EscapeGames.jsx";
import Priser from "./pages/Priser.jsx";
import SadanSpillerDu from "./pages/SadanSpillerDu.jsx";
import Booking from "./pages/Booking.jsx";
import GeneralInfo from "./pages/GeneralInfo.jsx";
import KontaktOs from "./pages/KontaktOs.jsx";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  let Component;
  switch (path) {
    case "/":
      Component = LandingPage;
      break;
    case "/escape-games":
      Component = EscapeGames;
      break;
    case "/priser":
      Component = Priser;
      break;
    case "/sadan-spiller-du":
      Component = SadanSpillerDu;
      break;
    case "/booking":
      Component = Booking;
      break;
    case "/generel-info":
      Component = GeneralInfo;
      break;
    case "/kontakt-os":
      Component = KontaktOs;
      break;
    default:
      Component = LandingPage;
  }

  return <Component />;
}

export default App;
