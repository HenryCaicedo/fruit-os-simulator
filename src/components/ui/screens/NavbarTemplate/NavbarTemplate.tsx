import React from "react";
import Navbar from "./Navbar/Navbar";
import './NavbarTemplate.css';
import StatusBarBackground from "../../StatusBar/StatusBarBackground";

interface NavbarTemplateProps {
  title: string;
  children?: React.ReactNode;
}

export default function NavbarTemplate(props: NavbarTemplateProps) {
  return (
    <div className="navbar-template">
      <StatusBarBackground color="#345789c3" />
      <Navbar>{props.title}</Navbar>
      <div className="screen-container">
        {props.children}
      </div>
    </div>
  );
}
