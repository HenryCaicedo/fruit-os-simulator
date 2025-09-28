import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SettingsApp from "./components/apps/Settings/SettingsApp";
import "./App.css";
import AppIcon from "./components/ui/AppIcon/AppIcon";
import StatusBar from "./components/ui/StatusBar/StatusBar";
import HomeScreen from "./components/apps/HomeScreen/HomeScreen";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function AppContent() {
  const location = useLocation();

  return (
    <div className="phone">
      <div className="screen">
        <div className="status-bar-container">
          <StatusBar />
        </div>

        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            classNames="ios6"
            timeout={300}
          >
            <Routes location={location}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/settings" element={<SettingsApp />} />
              <Route path="/app-icon" element={<AppIcon />} />
              <Route path="*" element={<AppIcon />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}