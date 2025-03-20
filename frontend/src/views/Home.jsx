import React from "react";
import imagenDePerfil from "../assets/img/imagePerfil.png";
const Home = () => {
  return (
    <div>
      <div className="background-container">
        <div className="home">
          <h4>Hola, soy</h4>
          <h1>Roberto Contreras</h1>
          <h3>Desarrollador Web Full Stack especializado en JavaScript</h3>
          <p>
            Soy un desarrollador web apasionado por crear aplicaciones web
            dinámicas y funcionales. Con un fuerte enfoque en JavaScript, me
            especializo tanto en el desarrollo frontend como backend, utilizando
            tecnologías modernas y prácticas ágiles para entregar soluciones
            eficientes y escalables.
            Estoy emocionado de aplicar mis habilidades en proyectos reales y seguir aprendiendo y creciendo como desarrollador
          </p>
          <div className="image-overlay">
            <img
              src={imagenDePerfil}
              alt="Imagen sobre el fondo"
              className="overlay-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
