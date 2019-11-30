import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <About />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
