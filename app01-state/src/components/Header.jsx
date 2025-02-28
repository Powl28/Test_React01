import React from "react";
import logo from "../images/logo.png";
import "./Header.css";

export default function Header(props) {
  const { title, major } = props;

  return (
    <nav>
      <img src={logo} className="logo" />
      <h3> {major}</h3>
      <a href="/">{title}</a>
    </nav>
  );
}
