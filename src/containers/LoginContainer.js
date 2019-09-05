import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Login from "../components/login/login";

class LoginContainer extends Component {
    render() {
        return(
            <div>
                <Login/>
            </div>
        );
    }
}

export default LoginContainer;
