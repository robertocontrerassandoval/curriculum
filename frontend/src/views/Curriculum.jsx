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
        <h2>Roberto
            <br></br>
            Contreras
        </h2>
        <h4>Desarrollador web Fullstack JavaScript</h4>
        <br></br>
        <hr className="separador"></hr>
        <h3>Experiencia Laboral</h3>
        <h4></h4>
      </div>
    </div>
  );
};

export default Curriculum;
