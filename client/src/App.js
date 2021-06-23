import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home/Home";
import Generic from "./components/Generic/Generic";
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/generic" render={() => <Generic />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
