import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={About} />
        {/* <Route path="/portfolio" component={Portfolio} /> */}
        <Route path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
