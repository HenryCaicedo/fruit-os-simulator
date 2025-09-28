import Section from "./Section";
import ConfigItem from "./ConfigItem";
import "./styles/SettingsApp.css";
import { SettingsSection } from "../../../models/SettingsSection";
import NavbarTemplate from "../../ui/screens/NavbarTemplate/NavbarTemplate";
import settingsMain from "../../../data/settingsMain.json";

export default function SettingsApp() {

  const sections: SettingsSection[] = settingsMain;

  return (
    <NavbarTemplate title="Settings">
      <div className="content">
        {sections.map((section, i) => (
          <Section key={i}>
            {section.map((item, j) => (
              <ConfigItem key={j} isSwitch={item.isSwitch}>
                {item.label}
              </ConfigItem>
            ))}
          </Section>
        ))}
      </div>
    </NavbarTemplate>
  );
}
