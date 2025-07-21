import React from "react";

const Portafolio = () => {
  return (
    <div className="portafolio">
      <div className="portafolio-container">
        <h1>Mi Portafolio</h1>
        <p>Aquí puedes ver algunos de mis proyectos destacados:</p>

        {/* Puedes reemplazar estos proyectos con los reales */}
        <div className="proyectos">
          <div className="proyecto">
            <h3>Proyecto 1</h3>
            <p>Descripción breve del proyecto.</p>
          </div>

          <div className="proyecto">
            <h3>Proyecto 2</h3>
            <p>Otra descripción.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
