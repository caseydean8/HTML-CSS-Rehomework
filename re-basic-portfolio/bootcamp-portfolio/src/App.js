import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
