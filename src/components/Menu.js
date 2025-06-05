import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/sumadora">Sumadora</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/traductor">Traductor</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/tabla">Tabla</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/experiencia">Experiencia</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
