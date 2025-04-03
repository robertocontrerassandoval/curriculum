import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'undefined');

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="left">
          <NavLink className={setActiveClass} to="/">RC</NavLink>
        </div>

        {/* Icono de la hamburguesa */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menú de navegación */}
        <div className={`right ${menuOpen ? 'show' : ''}`}>
          <NavLink className={setActiveClass} to="/sobre-mi">Sobre Mi</NavLink>
          <NavLink className={setActiveClass} to="/curriculum">Curriculum</NavLink>
          <NavLink className={setActiveClass} to="/contacto">Contacto</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
