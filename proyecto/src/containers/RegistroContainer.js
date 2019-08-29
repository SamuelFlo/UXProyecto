import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Login, { Registro } from "../components/login/registro";

class RegistroContainer extends Component {
    render() {
        return(
            <div>
                <Registro/>
            </div>
        );
    }
}

export default RegistroContainer;