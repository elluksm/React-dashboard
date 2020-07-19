import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import { Home } from "./views/Home/Home";
import { Chart } from "./views/Chart/Chart";
import "./App.sass";

function App() {
  return (
    <div className="app-container">
      <CookieConsent
        location="top"
        style={{ background: "#ffffff", color: "#5724d9" }}
        buttonStyle={{ background: "#5724d9", color: "#ffffff" }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Router>
        <Switch>
          <Route path="/chart" component={Chart} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
