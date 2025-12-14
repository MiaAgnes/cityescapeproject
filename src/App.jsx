import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import EscapeGames from "./pages/EscapeGames.jsx";
import GameDetails from "./pages/GameDetails.jsx";
import Priser from "./pages/Priser.jsx";
import SadanSpillerDu from "./pages/SadanSpillerDu.jsx";
import Booking from "./pages/Booking.jsx";
import GeneralInfo from "./pages/GeneralInfo.jsx";
import KontaktOs from "./pages/KontaktOs.jsx";

function App() {
  const basePath = "/cityescapeproject";

  const getPath = () => {
    const p = window.location.pathname;
    if (p.startsWith(basePath)) {
      return p.substring(basePath.length) || "/";
    }
    return p;
  };

  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onPopState = () => setPath(getPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  let Component;
  
  if (path.startsWith("/escape-games/") && path !== "/escape-games") {
    Component = GameDetails;
  } else {
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
  }

  return <Component />;
}

export default App;
