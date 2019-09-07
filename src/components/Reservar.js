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
            <div class="dropdown">
              <button onclick="myFunction()" class="dropbtn">Canchas</button>
              <div id="myDropdown" class="dropdown-content">
                <a href="#">Don Futbol</a>
                <a href="#">Futeca</a>
                <a href="#">Los Amigos</a>
                <a href="#">Soccer City</a>
              </div>
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

/* ESTO ES PARA QUE EL DROPDOWN DE LAS CANCHAS FUNCIONE PERO NO DA! */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}