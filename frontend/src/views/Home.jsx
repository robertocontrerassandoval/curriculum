import React from "react";
import imagenDePerfil from "../assets/img/imagePerfil.png";
const Home = () => {
  return (
    <div>
      <div className="background-container">
        <div className="home">
          <h4>Hola, soy</h4>
          <h1>Roberto Contreras</h1>
          <h4>Desarrollador Web Full Stack especializado en JavaScript</h4>
          {/* <p>
            Soy Técnico Eléctrico con 15 años de experiencia en el ámbito
            habitacional e industrial, especializado en instalaciones
            domiciliarias. A lo largo de mi carrera, he trabajado en diversos
            proyectos, tanto residenciales como industriales, liderando equipos
            de trabajo y generando resultados exitosos en la instalación,
            mantenimiento y reparación de sistemas eléctricos. Mi enfoque
            siempre ha sido garantizar la seguridad, eficiencia y calidad en
            cada proyecto. Hace un año, decidí dar un giro a mi carrera
            profesional y me embarqué en el estudio de Desarrollo Web Full Stack
            JavaScript, donde he adquirido habilidades clave como HTML, CSS,
            JavaScript, React, y Node.js, así como el uso de bases de datos como
            Postgres y herramientas de control de versiones como Git. Con una
            base sólida en el desarrollo de aplicaciones web dinámicas y
            escalables, mi objetivo es seguir creciendo como desarrollador,
            aplicando tanto mis conocimientos técnicos como mi enfoque orientado
            a la solución de problemas y liderazgo.{" "}
          </p> */}
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
