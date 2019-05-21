import React, { Component } from "react";
import Axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Validator, { ValidationTypes } from "js-object-validation";
import {
  FormGroup,
  FormLabel,
  Row,
  FormControl,
  Container
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isLoading, errors } = this.props;
    const { email: emailError, password: passwordError } = this.props.errors;
    return (
      <>
        <div className="login_loginContainer__2JMrT">
          <form
            onSubmit={this.props.onLogin}
            noValidate
            className=".login_formSignin__27WMl"
          >
            <Row className="animate auth-box1">
              <Container>
                <div align="center" className="login_login_header__3FYY0 ">
                  <h1 className="left">Log In </h1>
                </div>
                <div className="login_subhead__e1IaE">Admin Login</div>
                <div className="mb-60 input-group">
                  <FormGroup>
                    <FormControl
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className="form-control email"
                      onChange={this.props.onInputChange}
                      className="a"
                    />
                    {emailError ? (
                      <p className="text-danger">{emailError}</p>
                    ) : null}
                  </FormGroup>
                </div>
                <div className="mb-60 input-group">
                  <FormGroup className="a">
                    <FormControl
                      required="true"
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      className="form-control email"
                      onChange={this.props.onInputChange}
                      className="a"
                    />
                    {passwordError ? (
                      <p className="text-danger">{passwordError}</p>
                    ) : null}
                  </FormGroup>
                </div>
                <Button variant="primary" type="submit">
                  <i class="fas fa-sign-in-alt top" />
                  {isLoading ? "Please wait..." : "Sign In"}
                </Button>
                &nbsp; &nbsp;
                <br />
                <br />
                <label>
                  <input name="Remeberme" type="checkbox" id="rememberme" />
                  Remeber Me
                </label>{" "}
                &nbsp; &nbsp;
                <Link to="/forgot-password">
                  <p>Forgot password ?</p>
                </Link>
              </Container>
            </Row>
          </form>
        </div>
      </>
    );
  }
}

export default LoginComponent;
