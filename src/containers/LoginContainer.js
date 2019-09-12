
import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import SignInPage from "../components/SignIn";

class LoginContainer extends Component {
  render() {
      return(
          <div>
              <SignInPage/>
          </div>
      );
  }
}

export default LoginContainer;
