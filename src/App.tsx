import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import SettingsApp from "./components/apps/Settings/SettingsApp";
import "./App.css";
import React from "react";
import wallpaperImage from "./assets/wallpaper.jpg";
import AppIcon from "./components/ui/AppIcon/AppIcon";
import StatusBar from "./components/ui/StatusBar/StatusBar";
import HomeScreen from "./components/apps/HomeScreen/HomeScreen";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PhoneBody from "./components/PhoneBody";
import DialerComponent from "./components/apps/Phone/Phone";
import AppInProgress from "./components/apps/AppInProgress/AppInProgress";
import Calculator from "./components/apps/Calculator/Calculator";
import Music from "./components/apps/Music/Music";
import "./animations/transitions/openingApp.css";
import "./animations/transitions/closingApp.css";

// Music app tabs
import PlaylistsTab from "./components/apps/Music/tabs/Playlists/PlaylistsTab";
import ArtistsTab from "./components/apps/Music/tabs/Artists/ArtistsTab";
import SongsTab from "./components/apps/Music/tabs/Songs/SongsTab";
import AlbumsTab from "./components/apps/Music/tabs/Albums/AlbumbsTab";
import MoreTab from "./components/apps/Music/tabs/More/MoreTab";

// Phone app tabs
import FavoritesTab from "./components/apps/Phone/tabs/Favorites/FavoritesTab";
import RecentsTab from "./components/apps/Phone/tabs/Recents/RecentsTab";
import ContactsTab from "./components/apps/Phone/tabs/Contacts/ContactsTab";
import KeypadTab from "./components/apps/Phone/tabs/Keypad/KeypadTab";
import VoicemailTab from "./components/apps/Phone/tabs/Voicemail/VoicemailTab";


function AppContent() {
  const location = useLocation();

  const appSegment = location.pathname.split("/")[1] || "home";

  const isGoingToHome = appSegment === "home";
  const animationClass = isGoingToHome ? "closingApp" : "openingApp";

  return (
    <PhoneBody>
      <div className="screen" style={{ backgroundImage: `url(${wallpaperImage})` }}>
        <div className="status-bar-container">
          <StatusBar />
        </div>

        <TransitionGroup
          component={null}
          childFactory={child => React.cloneElement(child, {
            classNames: animationClass,
            timeout: 300
          })}
        >

          <CSSTransition key={appSegment} classNames={animationClass} timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/settings" element={<SettingsApp />} />
              <Route path="/app-icon" element={<AppIcon />} />

              {/* PHONE */}
              <Route path="/dialer" element={<DialerComponent />}>
                <Route index element={<Navigate to="keypad" replace />} />
                <Route path="favorites" element={<FavoritesTab />} />
                <Route path="recents" element={<RecentsTab />} />
                <Route path="contacts" element={<ContactsTab />} />
                <Route path="keypad" element={<KeypadTab />} />
                <Route path="voicemail" element={<VoicemailTab />} />
              </Route>

              {/* CALCULATOR */}
              <Route path="/calculator" element={<Calculator />} />

              {/* MUSIC */}
              <Route path="/music" element={<Music />}>
                <Route index element={<Navigate to="artists" replace />} />
                <Route path="playlists" element={<PlaylistsTab />} />
                <Route path="artists" element={<ArtistsTab />} />
                <Route path="songs" element={<SongsTab />} />
                <Route path="albums" element={<AlbumsTab />} />
                <Route path="more" element={<MoreTab />} />
              </Route>

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