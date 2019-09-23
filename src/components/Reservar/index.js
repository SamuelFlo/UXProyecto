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
  hora: null,
  cancha: null

};
class Reservar extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

  }
  onSubmit = event => {
      event.preventDefault();

    const { celular, hora, cancha } = this.state;
    this.props.firebase
          .reservar(this.props.firebase.auth.currentUser.uid)
          .set({
            celular,
            hora,
            cancha
          }).then(x => {

            this.props.history.push(ROUTES.LANDING);
          });

  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
      celular,
      hora,
      cancha
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
            <div>
            <label>Seleccionar Hora</label>
            <select name="hora" onChange={this.onChange}>
              <option value={hora}>1:00</option>
              <option value={hora}>2:00</option>
              <option value={hora}>3:00 </option>
              <option value={hora}>4:00 </option>
            </select>
            </div>
        </div>
        <div>
        <label>Seleccionar Cancha</label>
        <select name="cancha" onChange={this.onChange}>
          <option value={cancha}>Don Futbol </option>
          <option value={cancha}>Soccer City </option>
          <option value={cancha}>Los Amigos </option>
          <option value={cancha}>Futeca </option>
        </select>
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