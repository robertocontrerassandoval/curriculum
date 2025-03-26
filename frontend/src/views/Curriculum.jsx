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
      margin: 10,
      filename: "curriculum.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
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
              Soy un desarrollador web en formación con pasión por crear
              aplicaciones web dinámicas. Me especializo en JavaScript, tanto en
              frontend como backend, y busco aprender y crecer aplicando
              tecnologías modernas y prácticas ágiles para ofrecer soluciones
              eficientes.{" "}
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
            <h1>
              <strong>Roberto Contreras</strong>
            </h1>
            <h1>
              <strong></strong>
            </h1>
            <h4>Desarrollador web Fullstack JavaScript</h4>
          </div>
          <br></br>
          

          <h2>
            <strong>Experiencia Laboral</strong>
          </h2>
          <hr className="separador-content"></hr>

          <div className="trabajo">
            <h3>
              <strong>Técnico en Eléctricidad Industrial.</strong>
            </h3>
            <p className="company">Marzo 2010 - Actualidad</p>
            <p class="responsibilities">
              Como electricista industrial con experiencia en instalaciones
              domiciliarias, he trabajado en la instalación, mantenimiento y
              reparación de sistemas eléctricos en proyectos residenciales e
              industriales. Mi enfoque ha sido garantizar la seguridad y calidad
              en instalaciones de baja tensión, redes eléctricas y tableros de
              distribución. He liderado equipos y realizado auditorías para
              mejorar la eficiencia energética en viviendas, logrando reducir
              tiempos de ejecución y mejorar la durabilidad de los sistemas
              eléctricos. Además, he implementado soluciones que han generado
              ahorros significativos en el consumo energético.{" "}
            </p>
            <br></br>
          </div>
          <div className="trabajo">
            <h3>
              <strong>Desarrollador Web Fullstack JavaScript Junior.</strong>
            </h3>
            <p className="company">Septiembre 2024 - Actualidad</p>
            <p class="responsibilities">
              Soy un desarrollador web con conocimientos en tecnologías frontend
              y backend, especializado en JavaScript. Apasionado por la creación
              de aplicaciones web funcionales y dinámicas, busco seguir
              aprendiendo y desarrollando habilidades técnicas en entornos
              colaborativos. Experiencia trabajando con React, Node.js y bases
              de datos MySQL, con enfoque en la implementación de
              soluciones escalables y optimizadas.
              <h4> <strong>Habilidades Técnicas:</strong></h4>
              <ul>
                <li>Frontend: HTML5, CSS3, JavaScript (ES6+), React, Flexbox, Grid, Boostrap</li>
                <li>Node.js, Express.js, RESTful APIs, SQL, JWT (Autenticación)</li>
                <li>Herramientas y Tecnologías: Git, GitHub, NPM</li>
              </ul>
            </p>
          </div>

          <br></br>
          <br></br>
          <br></br>         
          
          <h2>
          <strong>Formación Académica</strong>
          </h2>

          <hr className="separador-content"></hr>

          <div className="trabajo">
            <h3>
              <strong>Técnico en Eléctricidad Industrial.</strong>
            </h3>
            <h4>INACAP Marzo 2010 - Actualidad</h4>
            <p class="responsibilities">
            Formación técnica especializada en la instalación, mantenimiento y reparación de sistemas eléctricos industriales.
            </p>
        </div>

        <div className="trabajo">
            <h3>
              <strong>Bootcamp Desarrollo Web Fullstack.</strong>
            </h3>
            <h4>Desafio Latam  Marzo 2023 - 2024</h4>
            <p className="company"></p>
            <p class="responsibilities">
              Bootcamp de Desarrollo Web Fullstack con habilidades aplicadas en JavaScript, HTML, CSS, React y Node.js.
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
