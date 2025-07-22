import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú
  const menuRef = useRef(null); // Referencia al contenedor del menú
  const hamburgerRef = useRef(null); // Referencia al icono de la hamburguesa

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : '');

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState); // Alterna el estado de visibilidad
  };

  // Función para cerrar el menú si el clic es fuera del menú o de la hamburguesa
  const handleClickOutside = (e) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target) && // Si el clic es fuera del menú
      !hamburgerRef.current.contains(e.target) // Y si el clic es fuera del icono de la hamburguesa
    ) {
      setMenuOpen(false); // Cierra el menú
    }
  };

  // Usa el hook useEffect para escuchar los clics fuera del menú
  useEffect(() => {
    // Agregar el evento de clic cuando el componente se monte
    document.addEventListener('mousedown', handleClickOutside);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="left">
          <NavLink className={setActiveClass} to="/">RC</NavLink>
        </div>
<div className='menu-line'>
        {/* Icono de la hamburguesa */}
        <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
          <span></span>
          <span></span>
          <span></span>
         
        </div>
        <div className='line' >
        <h3>Desarrollando Futuro</h3>
        </div>
        </div>
        {/* Menú de navegación */}
        <div ref={menuRef} className={`right ${menuOpen ? 'show' : ''}`}>
          <NavLink className={setActiveClass} to="/">Inicio</NavLink>
          <NavLink className={setActiveClass} to="/sobre-mi">Sobre Mi</NavLink>
          {/*<NavLink className={setActiveClass} to="/curriculum">Curriculum</NavLink> */}
          <NavLink className={setActiveClass} to="/portafolio">Portafolio</NavLink>
          <NavLink className={setActiveClass} to="/contacto">Contacto</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
