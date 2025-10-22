import React from "react";
import Navbar from "./Navbar/Navbar";
import './NavbarTemplate.css';
import StatusBarBackground from "../../StatusBar/StatusBarBackground";
import { AppTheme as AppTheme } from "../../../../models/AppTheme";

import { NavbarButtonModel } from "./Navbar/Navbar";

interface NavbarTemplateProps {
  appTheme?: AppTheme;
  title: string;
  children?: React.ReactNode;
  rounded?: boolean;
  hideNavbar?: boolean;
  leftButton?: NavbarButtonModel;
  rightButton?: NavbarButtonModel;
  onButtonClick?: (buttonTitle: string) => void;
}

export default function NavbarTemplate({ appTheme = 'standard', title, children, hideNavbar=false, onButtonClick, leftButton, rightButton }: NavbarTemplateProps) {
  const StatusBarColor = appTheme == "music" ? "black" : "#345789c3";

  return (
    <div className="navbar-template">
      <StatusBarBackground color={StatusBarColor} />
      {!hideNavbar && <Navbar appTheme={appTheme} leftButton={leftButton} rightButton={rightButton} onButtonClick={onButtonClick}>{title}</Navbar>}
      <div className="screen-container">
        {children}
      </div>
    </div>
  );
}
