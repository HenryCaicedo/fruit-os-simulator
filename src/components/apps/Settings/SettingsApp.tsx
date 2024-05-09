import Navbar from "./Navbar";
import Section from "./Section";
import ConfigItem from "./ConfigItem";
import "./styles/SettingsApp.css";

export default function SettingsApp() {


  const elements = <div>
    <Section>
      <ConfigItem isSwitch>Airplane Mode</ConfigItem>
      <ConfigItem>Wi-Fi</ConfigItem>
      <ConfigItem>Bluetooth</ConfigItem>
      <ConfigItem>Personal Hotspot</ConfigItem>
      <ConfigItem>VPN</ConfigItem>
    </Section>
    <Section>
      <ConfigItem isSwitch>Do Not Disturb</ConfigItem>
      <ConfigItem>Notifications</ConfigItem>
    </Section>
    <Section>
      <ConfigItem isSwitch>General</ConfigItem>
      <ConfigItem>Sounds</ConfigItem>
      <ConfigItem>Brightness & Wallpaper</ConfigItem>
      <ConfigItem>Picture Frame</ConfigItem>
      <ConfigItem>Privacy</ConfigItem>
    </Section>
    <Section>
      <ConfigItem>Cloud</ConfigItem>
      <ConfigItem>Mail, Contacts, Calendars</ConfigItem>
      <ConfigItem>Notes</ConfigItem>
      <ConfigItem>Reminders</ConfigItem>
      <ConfigItem>Messages</ConfigItem>
      <ConfigItem>Videocall</ConfigItem>
      <ConfigItem>Browser</ConfigItem>
    </Section>
    <Section>
      <ConfigItem>App Market</ConfigItem>
      <ConfigItem>Music</ConfigItem>
      <ConfigItem>Video</ConfigItem>
      <ConfigItem>Photos & Camera</ConfigItem>
      <ConfigItem>Books</ConfigItem>
    </Section>
  </div>

  return (
    <div>
      <Navbar>Settings</Navbar>
      <div className='screen-container'>
        <div className="test">
          <div>
            {elements}
          </div>
        </div>
      </div>
    </div>

  );
}
