import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';


const ReservarPage = () => (
  <div>
    <Reserva />
  </div>
);
const INITIAL_STATE = {
  celular: '',
  hora: '',
  cancha:''
};
class Reservar extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { celular, hora,cancha } = this.state;
    this.props.firebase
      .then(authUser => {
        return this.props.firebase
          .reservar(authUser.user.uid)
          .set({
            celular,
            hora,
            cancha,
          });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
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


            <div class="input-group">
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Seleccionar cancha
                <span class="caret"></span></button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Don Futbol</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Futeca</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Los amigos</a></li>
                  <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Soccer City</a></li>
                </ul>
              </div>
              <input
                name="cancha"
                value={cancha}
                onChange={this.onChange}
                type="text"
                placeholder="Cancha"
              />
            </div>

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
