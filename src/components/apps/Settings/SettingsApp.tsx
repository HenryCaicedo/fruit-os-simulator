import Navbar from "./Navbar";
import Section from "./Section";
import ConfigItem from "./ConfigItem";

export default function SettingsApp() {

  return (
    <div>
      <Navbar>Settings</Navbar>
      <div>
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
          <ConfigItem>Picure Frame</ConfigItem>
          <ConfigItem>Privacy</ConfigItem>
        </Section>
      </div>

    </div>
  );
}
