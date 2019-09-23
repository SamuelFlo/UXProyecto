import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import './App.scss';
import HomePage from '../../containers/HomePageContainer';
/*import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';*/
import SignInPage from '../../Log.js';
import ReservarPage from '../Reservar';
import AdminPage from '../Admin';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
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
class App extends Component {
  constructor(props){
    super(props)
    setInterval(()=>{this.myFunc()},1000*5);
  }

  myFunc(){
    this.refs.notify.notificationAlert(options);
}
  render() {
    return (
      <Router>
        <div>
          <Navigation />
            <NotificationAlert ref="notify" />
          <hr />
          <Route exact path={ROUTES.LANDING} component={HomePage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
          <Route path={ROUTES.RESERVAR} component={ReservarPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>

    );
    }
}





export default withAuthentication(App);
