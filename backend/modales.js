const saludar = (nombre) => {
    console.log(`Hola ${nombre}, ¿como estas?`);
};

const darLasGracias = (nombre) => {
    console.log(`Gracias por tu visita ${nombre}`);
}

module.exports = {
    saludar,
    darLasGracias
}