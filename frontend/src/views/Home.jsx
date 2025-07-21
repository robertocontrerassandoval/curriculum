import React from "react";
import imagenDePerfil from "../assets/img/imagenPerfil.webp";
import { NavLink } from "react-router-dom";
const Home = () => {

  const setActiveClass = ({isActive}) => (isActive ? 'active' : 'undifined');

  return (
    <div>
      <div className="home">
       <div className="home-container">
        <div className="home-content">
          <h4>Hola, soy</h4>
          <h1>Roberto Contreras</h1>
          <h4>Desarrollador Web Full Stack especializado en JavaScript</h4>
        </div>
        <div className="home-buttons">
           <NavLink className={setActiveClass} to="/sobre-mi"> Sobre Mi </NavLink>

         </div>
          
</div>
        <div className="home-image">
            <img
              src={imagenDePerfil}
              alt="Imagen sobre el fondo"
            />
          </div>


      </div>
    </div>
  );
};

export default Home;
