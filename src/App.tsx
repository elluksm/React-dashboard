import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Chart } from "./views/Chart/Chart";
import "./App.sass";

function App() {
  return (
    <div className="app-container">
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
