import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <div style={headerContainer}>
        <div style={casey}>
          <h1>Casey Carroll</h1>
        </div>
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
  margin: "0 auto",
  position: "relative",
  color: "#2C3E50"
};

const casey = {
  background: '#2C3E50',
  width: '200px',
  color: '#ECF0F1',
  padding: '1px 20px',
}

const linkStyle = {
  position: "absolute",
  top: "0px",
  right: "0px",
  paddingTop: "37px"
};

export default Header;
