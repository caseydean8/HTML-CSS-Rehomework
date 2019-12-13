import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <div style={headerContainer}>
        <div style={casey}>
          <h1 style={ {color: "#ECF0F1", borderBottom: 'none'} }>Casey Carroll</h1>
        </div>
        <div className="header-links">
          <Link to="/">About</Link> | <Link to="/portfolio">Portfolio</Link> | <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  background: "#ECF0F1",
  borderBottom: "2px solid",
  borderColor: "#33CCCC"
};

const headerContainer = {
  maxWidth: "960px",
  margin: "0 auto",
  position: "relative",
  color: "#2C3E50"
};

const casey = {
  background: '#2C3E50',
  width: '240px',
  padding: '1px 20px',
  borderRadius: '5px'
}

// const linkStyle = {
//   position: "absolute",
//   top: "0px",
//   right: "-15px",
//   padding: "33px 15px",
//   color: "#33CCCC"
// };

export default Header;
