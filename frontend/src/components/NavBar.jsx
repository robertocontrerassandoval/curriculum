import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const setActiveClass = ({isActive}) => (isActive ? 'active' : 'undifined');
    return (
        <div>
            <nav>
                <NavLink className={setActiveClass} to="/"> Home </NavLink>
                <NavLink className={setActiveClass} to="/sobre-mi"> Sobre Mi </NavLink>
                <NavLink className={setActiveClass} to="/contacto"> Contacto </NavLink>

            </nav>
            
        </div>
    );
}

export default NavBar;
