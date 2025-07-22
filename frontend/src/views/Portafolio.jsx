import React, { useState } from "react";

const proyectos = [
  {
    titulo: "Landing Page Personal ",
    descripcion:
      "Desarrollo de una landing page diseñada para presentar la marca personal de un profesional. La estructura está pensada para destacar su trayectoria, habilidades, servicios y facilitar el contacto. Incluye una sección sobre mí, portafolio, testimonios, redes sociales y un formulario de contacto funcional.",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "React"],
    enlace: "https://github.com/robertocontrerassandoval/curriculum",
    imagen: "/img/LandingPage.jpg",
  },
  {
    titulo: "Sistema de Monitoreo Ambiental con LoRa y Web App",
    descripcion:
      "Desarrollo de un sistema distribuido de monitoreo de humedad y temperatura que utiliza microcontroladores ESP32 conectados a sensores ambientales, los cuales se comunican entre sí a través de tecnología LoRa. Un nodo actúa como receptor y gateway, retransmitiendo los datos a un servidor mediante conexión WiFi. Los datos son procesados por un backend en Node.js y almacenados en PostgreSQL, con una interfaz visual responsiva construida en React.",
    tecnologias: ["LoRa", "HTTP", "Node.js", "Express", "Render", "React", "PostgreSQL"],
    enlace: "https://front-telemetria.onrender.com",
    imagen: "/img/telemetria.png",
  },
];

const ProyectoCard = ({ proyecto }) => {
  const [verMas, setVerMas] = useState(false);
  const descripcionCorta = proyecto.descripcion.slice(0, 150);

  return (
    <div className="proyecto">
      {proyecto.imagen && (
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}
      <h3>{proyecto.titulo}</h3>
      <p>
        {verMas ? proyecto.descripcion : `${descripcionCorta}... `}
        {proyecto.descripcion.length > 150 && (
          <button
            onClick={() => setVerMas(!verMas)}
            style={{
              background: "none",
              border: "none",
              color: "#007bff",
              cursor: "pointer",
              paddingLeft: "4px",
              fontSize: "0.9rem",
            }}
          >
            {verMas ? "Ver menos" : "Ver más"}
          </button>
        )}
      </p>
      <p>
        <strong>Tecnologías:</strong> {proyecto.tecnologias.join(", ")}
      </p>
      <a
        href={proyecto.enlace}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "10px",
          color: "#007bff",
          textDecoration: "underline",
        }}
      >
        Ver proyecto
      </a>
    </div>
  );
};

const Portafolio = () => {
  return (
    <div className="portafolio">
      <div className="portafolio-container">
        <h1>Mi Portafolio</h1>
        <p>Aquí puedes ver algunos de mis proyectos destacados:</p>
        <div className="proyectos">
          {proyectos.map((proyecto, index) => (
            <ProyectoCard key={index} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
