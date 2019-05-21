import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./container/login";
import { Button } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;
