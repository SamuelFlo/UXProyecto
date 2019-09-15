import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import * as ROUTES from '../constants/routes';
import { NavLink } from 'react-router-dom';
import NotificationAlert from 'react-notification-alert';
import "react-notification-alert/dist/animate.css";

var options = {};
options = {
  place: 'tl',
  message: (
      <div>
         <div>
              <b>Promociones</b> 
          </div>
          <div>
             
          </div>
          <div>
              Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for every web developer.
          </div>
          <div>
              Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for every web developer.
          </div>

      </div>
  ),
  type: "danger",
  icon: "now-ui-icons ui-1_bell-53",
  autoDismiss: 7
}

class Cards extends Component {
  
  myFunc(){
    this.refs.notify.notificationAlert(options);
}

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
              <NotificationAlert ref="notify" />
              <button onClick={() => this.myFunc()}>Promociones</button>
              
              
      
              
              
            </span>
          </div>
        </a>
    );
  }
}

export default Cards;
