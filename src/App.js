import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./container/login";
import ForgotPassword from "./container/forgot-password";
import ResetPassword from "./container/reset-password";
import { Button } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset/:token1" component={ResetPassword} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;
