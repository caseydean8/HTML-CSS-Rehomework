import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;