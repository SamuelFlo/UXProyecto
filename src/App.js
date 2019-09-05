import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/navbar";
import HomePage from "./containers/HomePageContainer";
import Login from "./Log";
import Reser from "./Reservas.js";
import error from "./components/Error";

import "./App.css";
import "semantic-ui-css/semantic.min.css";
import FisrtLook from "./components/FirstLook";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/reser" component={Reser} exact/>

              <Route component={error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
