import React from "react";
import imagenDePerfil from "../assets/img/imagePerfil.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Curriculum = () => {
  return (
    <div className="curriculum">
      <div className="banner-curriculum">
        <img src={imagenDePerfil} alt="imagen perfil" />
        <section className="banner">
          <h3>Sobre Mi</h3>
          <hr className="separador-banner"></hr>
          <p>
            Soy un desarrollador web apasionado por crear aplicaciones web
            dinámicas y funcionales. Con un fuerte enfoque en JavaScript, me
            especializo tanto en el desarrollo frontend como backend, utilizando
            tecnologías modernas y prácticas ágiles para entregar soluciones
            eficientes y escalables.
          </p>
          <br></br>
          <h3>Contacto</h3>
          <hr className="separador-banner"></hr>
          <h4>
            <BsFillTelephoneFill /> +569 8381 2388
          </h4>
          <h4>
            <IoIosMail /> contreras_sandoval@hotmail.com
          </h4>
          <h4>
            <FaLocationDot /> Camino Real 5769, Quinchamali, Chillán
          </h4>
          <br></br>
          <h3>Habilidades</h3>
          <hr className="separador-banner"></hr>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Vite</li>
            <li>Git</li>
            <li>Acad</li>
          </ul>
        </section>
      </div>
      <div className="content-curriculum">
        <div className="nombre-perfil-cv">
          <h1><strong>Roberto</strong></h1>
          <h1><strong>Contreras</strong></h1>

          <h4>Desarrollador web Fullstack JavaScript</h4>
        </div>
        <br></br>
       
        <h2><strong>Experiencia Laboral</strong></h2>
        <hr className="separador"></hr>
        <div class="trabajo">
              <h3>Desarrollador Web Full Stack</h3>
              <p class="company">Marzo 2025 - Actualidad</p>
              
              <p class="responsibilities">
              Recientemente he completado mi formación en Desarrollo Web Fullstack JavaScript, donde adquirí conocimientos y habilidades en las tecnologías más demandadas en el desarrollo web actual. Durante mis estudios, me especialicé en la creación de aplicaciones web utilizando herramientas como React.js para el desarrollo del front-end y Node.js para la construcción del back-end. Además, aprendí a trabajar con bases de datos, integrar APIs y gestionar todo el ciclo de vida de una aplicación web, desde su desarrollo hasta su despliegue.
              </p>
            </div>
      </div>
    </div>
  );
};

export default Curriculum;
