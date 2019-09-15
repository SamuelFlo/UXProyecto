import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import * as ROUTES from '../../constants/routes';


const ReservarPage = () => (
  <div>
    <Reserva />
  </div>
);
const INITIAL_STATE = {
  celular: '',
  hora: '',
};
class Reservar extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.toggle = this.toggle.bind(this);
    this.state = {
    dropdownOpen: false
  };
  }
  toggle() {
   this.setState(prevState => ({
     dropdownOpen: !prevState.dropdownOpen
   }));
 }
  onSubmit = event => {
    const { celular, hora } = this.state;
    withFirebase.database().ref('users/').set({
    celular: celular,
    hora: hora
  });
    this.props.firebase
      .then(authUser => {

        return this.props.firebase

          .reservar(authUser.reservar.uid)
          .set({
            celular,
            hora,
          });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      //  this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
      });
    event.preventDefault();
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
      celular,
      hora
    } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Reservar</div>
        <div className="content">
          <div className="form">

            <div className="form-group">
              <label htmlFor="celular">Celular</label>
              <input
                name="celular"
                value={celular}
                onChange={this.onChange}
                type="text"
                placeholder="Numero de Celular"
                />
            </div>
            <div className="form-group">
              <label htmlFor="hora">Hora</label>
              <input
                name="hora"
                value={hora}
                onChange={this.onChange}
                type="text"
                placeholder="Hora"
                />
            </div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Seleccionar Canchas
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Canchas</DropdownItem>
          <DropdownItem>Los Amigos</DropdownItem>
          <DropdownItem>Don Futbol</DropdownItem>
          <DropdownItem>Futeca</DropdownItem>
          <DropdownItem>Soccer City</DropdownItem>
        </DropdownMenu>
        </Dropdown>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Reservar
          </button>
        </div>
      </div>
      </div>

      </form>
    );
  }
}

const Reserva = compose(
  withRouter,
  withFirebase,
)(Reservar);
export default ReservarPage;
export { Reserva };
