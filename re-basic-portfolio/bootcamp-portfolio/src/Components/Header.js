import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <div style={headerContainer}>
        <h1>Casey Carroll</h1>
        <div style={linkStyle}>
          <Link to="/">About</Link> | <Link to="/portfolio">Portfolio</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  background: "#ECF0F1"
};

const headerContainer = {
  width: "960px",
  margin: '0 auto',
  padding: "10px",
  position: "relative",
  textAlign: "left",
  color: "#2C3E50",
};

const linkStyle = {
  position: "absolute",
  top: "0px",
  right: "0px",
  paddingTop: "37px"
};

export default Header;
