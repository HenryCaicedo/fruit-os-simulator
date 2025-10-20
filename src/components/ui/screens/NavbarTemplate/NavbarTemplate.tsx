import React from "react";
import Navbar from "./Navbar/Navbar";
import './NavbarTemplate.css';
import StatusBarBackground from "../../StatusBar/StatusBarBackground";
import { AppTheme as AppTheme } from "../../../../models/AppTheme";

interface NavbarTemplateProps {
  appTheme?: AppTheme;
  title: string;
  children?: React.ReactNode;
  rounded?: boolean;
  hideNavbar?: boolean;
}

export default function NavbarTemplate({ appTheme = 'standard', title, children, rounded=false, hideNavbar=false }: NavbarTemplateProps) {
  const StatusBarColor = appTheme == "music" ? "black" : "#345789c3";

  return (
    <div className="navbar-template">
      <StatusBarBackground color={StatusBarColor} />
      {!hideNavbar && <Navbar appTheme={appTheme}>{title}</Navbar>}
      <div className="screen-container">
        {children}
      </div>
    </div>
  );
}
