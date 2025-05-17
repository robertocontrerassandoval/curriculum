require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    allowExitOnIdle: true // permite cerrar la conexion automaticamente
})

const getContactos = async () => {
    try {
        const result = await pool.query('SELECT NOW()'); // mejor en mayúsculas por convención SQL
        console.log('Resultado:', result.rows[0]);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
  
};

const agregarContacto = async (nombre, correo, asunto, mensaje) => {
    const consulta = 'INSERT INTO datos (id, nombre, correo, asunto, mensaje) VALUES (DEFAULT, $1, $2, $3, $4)';
    const values = [nombre, correo, asunto, mensaje];
    const result = await pool.query(consulta, values);
    console.log('Contacto agregado:', result.rows[0]);
    return result;

   
};

agregarContacto('pepe', 'pepe@pepe', 'pepe', 'pepe');
getContactos();