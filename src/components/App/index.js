import React from 'react';
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
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={HomePage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
      <Route path={ROUTES.RESERVAR} component={ReservarPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
