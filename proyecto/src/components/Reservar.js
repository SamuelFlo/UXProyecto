import React from "react";

export class Reservar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Reservar</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" name="apellido" placeholder="Apellido" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="celular">Celular</label>
              <input type="text" name="celular" placeholder="Numero de Celular" />
            </div>
            <div className="form-group">
              <label htmlFor="hora">Hora</label>
              <input type="text" name="hora" placeholder="Hora" />
            </div>
            <div className="form-group">
              <label htmlFor="cancha">Cancha</label>
              <input type="text" name="cancha" placeholder="Cancha" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Reservar
          </button>
        </div>
      </div>
    );
  }
}
export default Reservar;
