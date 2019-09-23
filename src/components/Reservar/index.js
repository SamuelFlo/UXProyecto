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
const value= {}
const INITIAL_STATE = {
  celular: ''
};
class Reservar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "Don Futbol"};
    this.state={value: "1:00"};
    this.state = { ...INITIAL_STATE };
  this.handleChange= this.handleChange.bind(this);

  this.handleSubmit= this.handleSubmit.bind(this);

  
  }

  


  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
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
              <option value="1:00">1:00</option>
              <option value="2:00">2:00</option>
              <option value="3:00">3:00 </option>
              <option value="4:00">4:00 </option>
            </select>
            </div>
        </div>
        <div>
        <label>Seleccionar Cancha</label>
        <select name="cancha" onChange={this.onChange}>
          <option value="Don Futbol">Don Futbol </option>
          <option value="Soccer City">Soccer City </option>
          <option value="Los Amigos">Los Amigos </option>
          <option value="Futeca">Futeca </option>
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
