import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import React from "react";
import Home from "./components/Home/Home";
import Generic from "./components/Generic/Generic";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/generic" render={() => <Generic />} />
          <Route path="/contacto" render={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
