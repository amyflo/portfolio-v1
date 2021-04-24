import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./About";
import Play from "./Play";
import Resume from "./Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Lenovo from "./Lenovo";
import CensusAcademy from "./CensusAcademy";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/website" component={App} />
        <Route exact path="/#" component={App} />
        <Route exact path="/play" component={Play} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/about" component={About} />
        <Route path="/lenovo" component={Lenovo} />
        <Route path="/censusacademy" component={CensusAcademy} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
