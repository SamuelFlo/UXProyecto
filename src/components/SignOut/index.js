import React from 'react';
import { withFirebase } from '../Firebase';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const SignOutButton = ({ firebase }) => (
//  <button type="button" onClick={firebase.doSignOut}>
  <NavLink to={ROUTES.LANDING} onClick={firebase.doSignOut}>     | SignOut </NavLink>
//  </button>
);
export default withFirebase(SignOutButton);
