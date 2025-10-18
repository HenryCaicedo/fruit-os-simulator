import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SettingsApp from "./components/apps/Settings/SettingsApp";
import "./App.css";
import wallpaperImage from "./assets/wallpaper.jpg";
import AppIcon from "./components/ui/AppIcon/AppIcon";
import StatusBar from "./components/ui/StatusBar/StatusBar";
import HomeScreen from "./components/apps/HomeScreen/HomeScreen";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PhoneBody from "./components/PhoneBody";
import PhoneComponent from "./components/apps/Phone/Phone";
import AppInProgress from "./components/apps/AppInProgress/AppInProgress";
import Calculator from "./components/apps/Calculator/Calculator";
import Music from "./components/apps/Music/Music";   
import "./animations/transitions/openingApp.css";
import "./animations/transitions/closingApp.css";

function AppContent() {
  const location = useLocation();

  return (
    <PhoneBody>
      <div className="screen" style={{ backgroundImage: `url(${wallpaperImage})` }}>
        <div className="status-bar-container">
          <StatusBar />
        </div>

        <TransitionGroup component={null}>
            <CSSTransition
            key={location.pathname}
            classNames="openingApp"
            timeout={300}
            >
            <Routes location={location}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/settings" element={<SettingsApp />} />
              <Route path="/app-icon" element={<AppIcon />} />
              <Route path="/phone" element={<PhoneComponent />} />
              <Route path="/contacts" element={<PhoneComponent isContacts={true} />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/music" element={<Music />} />
              <Route path="*" element={<AppInProgress />} />
            </Routes>
            </CSSTransition>
        </TransitionGroup>
      </div>
    </PhoneBody>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}