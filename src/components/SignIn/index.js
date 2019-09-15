import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import fire from '../Firebase';
import loginImg from '../../login.svg';
import './style.scss';
import firebase from 'firebase'
import * as ROUTES from '../../constants/routes';
import SingUp from "../SignUp";

import { BrowserRouter,Route,Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


import { GoogleLogin } from 'react-google-login';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


class SignInFormBase extends Component {
 
  


  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.state = { ...INITIAL_STATE };

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
       <div className="base-container" ref={this.props.containerRef}>
       <div className="header">Login</div>
       <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Email</label>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <div className="form-group">
              <label htmlFor="password">Password</label>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        </div>

          </div>
        </div>
        {this.state.isSignedIn ? (
          <BrowserRouter>


          </BrowserRouter>
        ):(
            <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}/>

        )}
        <div className="footer">
        <button disabled={isInvalid} type="submit" className="btn">
          Login
        </button>
        </div>
        {error && <p>{error.message}</p>}
        
        
        
        </div>
      </form>
      
    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };
