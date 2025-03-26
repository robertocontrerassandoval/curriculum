import React from "react";
import { useEffect } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";

const SobreMi = () => {
  useEffect(() => {
    // Seleccionamos todas las secciones de trabajo (job)
    const jobs = document.querySelectorAll(".job");

    // Función de callback que será llamada cuando el elemento entre en el viewport
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Si el elemento es visible, agregamos la clase 'visible' para aplicar la animación
          entry.target.classList.add("visible");
          // Dejamos de observar el elemento después de que se haya hecho visible
          observer.unobserve(entry.target);
        }
      });
    };

    // Creamos una instancia de IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // El 50% del elemento debe estar visible para que se dispare la animación
    });

    // Comenzamos a observar todos los elementos con la clase .job
    jobs.forEach((job) => {
      job.classList.remove("visible");
      observer.observe(job); // Comenzamos a observar los trabajos
    });
  }, []);
  return (
    <div>
      <div className="background-container">
        <div className="sobre-mi">
          <section id="experience">
            <h2>Experiencia Laboral</h2>

            <div class="job">
              <h3>Desarrollador Web Full Stack</h3>
              <p class="company">Marzo 2025 - Actualidad</p>
              <ul class="responsibilities">
                <li>
                  Desarrollo y mantenimiento de aplicaciones web usando React.js
                  y Node.js.
                </li>
                <li>
                  Integración de APIs para mejorar la funcionalidad de las
                  plataformas web.
                </li>
                <li>
                  Colaboración en la creación de proyectos de software a medida.
                </li>
              </ul>
            </div>

            <div class="job">
              <h3>Representante Legal</h3>
              <p class="company">Agroferreteria 2009 - 2024</p>
              <ul class="responsibilities">
                <li>
                  Administrador y representate legal de la empresa
                  Agroferreteria.
                </li>
                <li>Vendesor de terreno y materiales de construcción.</li>
              </ul>
            </div>

            <div class="job">
              <h3>Supervisor Eléctrico</h3>
              <p class="company">Santa Beatriz año 2009</p>
              <ul class="responsibilities">
                <li>
                  Eléctrico mantenedor industrial en CFI Nueva Aldea, planta
                  Aserradero.{" "}
                </li>
                <li>
                  Supervisor Eléctrico en CFI Nueva Aldea, planta Aserradero.
                </li>
              </ul>
            </div>
          </section>

          <section id="experience">
            <h2>Habilidades y educación</h2>

            <div class="job">
              <h3>Desarrollador Web Full Stack JavaScript </h3>
              <p class="company">Desafio Latam 2023 - 2024</p>
              <ul class="responsibilities">
                <li>
                  Curso intensivo que cubre desde fundamentos de JavaScript
                  hasta aplicaciones completas utilizando Node.js, Express,
                  MySQL, y React.
                </li>
              </ul>
            </div>

            <div class="job">
              <h3>Técnico Universitario en Eléctricidad Industrial</h3>
              <p class="company">INACAP - 2010-2012</p>
              <ul class="responsibilities">
                <li>
                  Proyección y Ejecución de proyectos electricos industriales y
                  habitacionales en baja tensión.
                </li>
                <li>
                  Instalador eléctrico autorizado con licencia SEC clase B.
                </li>
                <li>Desarrollador de proyectos eléctrico en baja tensión.</li>
                <li>Desarrollo de proyectos de automatizacion industrial.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
