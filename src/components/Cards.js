import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import * as ROUTES from '../constants/routes';
import { NavLink } from 'react-router-dom';
import NotificationAlert from 'react-notification-alert';
import "react-notification-alert/dist/animate.css";

var options = {};
options = {
  place: 'tr',
  message: (
      <div>
         <div>
              <b>Promociones</b> 
          </div>
          <div>
             1.Martes y Jueves 25% de descuento en las reservas
          </div>
          <div>
              2.Miercoles botellon con agua gratis por equipo 
          </div>
          <div>
              3. Domingo prestamo de chalecos y balones gratis
          </div>

      </div>
  ),
  type: "info",
  icon: "now-ui-icons ui-1_bell-53",
  autoDismiss: 15
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
