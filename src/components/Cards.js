import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import * as ROUTES from '../constants/routes';
import { NavLink } from 'react-router-dom';

class Cards extends Component {
  render() {
    console.log(this.props)
    let {title, price, pictureUrl} = this.props;
    return (
      <a class="teal card">
          <div class="image">
            <img src={(`${pictureUrl}`)} />
          </div>
          <div class="content">
            <div class="header">{title}</div>
            <div class="description">$ {price} USD</div>
          </div>
          <div class="extra content">
            <span class="center floated">
              <div class="ui vertical animated button" tabindex="0">
              
                <NavLink to={ROUTES.RESERVAR}>     Reservar </NavLink>
              </div>
            </span>
          </div>
        </a>
    );
  }
}

export default Cards;
