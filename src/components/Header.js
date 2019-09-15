import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

/*NUESTRO LOGO*/
class Header extends Component {

    render() {
      return (
        
        <img class="ui middle aligned medium image" src={ require ("../img/logoS.jpeg")} />
        );
    }
  }

  export default Header;
