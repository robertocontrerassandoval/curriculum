import React from "react";
import imagenDePerfil from "../assets/img/imagePerfil.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import html2pdf from "html2pdf.js"; // Importa la librería html2pdf.js

const Curriculum = () => {

  // Función para descargar el contenido como PDF
  const descargarPDF = () => {
    const element = document.getElementById("curriculum-content"); // Seleccionamos el contenedor principal

    if (!element) {
      console.error("Elemento con id 'curriculum-content' no encontrado.");
      return;
    }

    const opciones = {
      margin:       10,
      filename:     "curriculum.pdf",
      image:        { type: "jpeg", quality: 0.98 },
      html2canvas:  { scale: 4 },
      jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" }
    };

    // Generar el PDF usando la librería html2pdf
    html2pdf()
      .from(element) // Asegúrate de pasarle el contenedor correcto
      .set(opciones) // Configura las opciones
      .save() // Guarda el archivo PDF
      .then(() => {
        console.log("PDF descargado correctamente");
      })
      .catch((error) => {
        console.error("Error al generar el PDF:", error);
      });
  };

  return (
    <div>
      <div className="curriculum" id="curriculum-content">
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
          <hr className="separador-content"></hr>
          <div className="trabajo">
            <h3>Desarrollador Web Full Stack</h3>
            <p className="company">Marzo 2025 - Actualidad</p>
            <p className="responsibilities">
              Recientemente he completado mi formación en Desarrollo Web Fullstack JavaScript...
            </p>
          </div>
        </div>
      </div>
      
      {/* Botón para descargar el PDF */}
      <button onClick={descargarPDF}>Descargar PDF</button>
    </div>
  );
};

export default Curriculum;
