import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <div>
      <NavLink to={ROUTES.LANDING}>     Home| </NavLink>
      <NavLink to={ROUTES.RESERVAR}>Reservar</NavLink>
    
      <SignOutButton />

  </div>
);
const NavigationNonAuth = () => (
  <div>
      <NavLink to={ROUTES.LANDING}>      Home| </NavLink>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
  </div>
);
export default Navigation;
