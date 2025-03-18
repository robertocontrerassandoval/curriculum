import React from "react";
import { useEffect } from "react";
import {FaNodeJs, FaReact} from "react-icons/fa";

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
          </section>

          <section id="experience">
            <h2>Habilidades y educación</h2>

            <div class="job">
              <h3>Desarrollador Web Full Stack JavaScript  </h3>
              <p class="company">Desafio Latam 2023 - 2024</p>
             
             
            </div>
          </section>

          <section id="experience">
            <h2>Habilidades y educación</h2>

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
          </section>

          <section id="experience">
            <h2>Habilidades y educación</h2>

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
          </section>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
