require('dotenv').config();
console.log('🌍 ENV:', process.env.PGDATABASE);
const { Pool } = require('pg');

// ✅ solo una definición de pool
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    allowExitOnIdle: true
});

const verificarBaseDeDatos = async () => {
    const res = await pool.query('SELECT current_database()');
    console.log('📌 Conectado a la base de datos:', res.rows[0].current_database);
};

const agregarContacto = async (nombre, correo, asunto, mensaje) => {
    try {
        const consulta = `
            INSERT INTO datos (nombre, correo, asunto, mensaje, fecha)
            VALUES ($1, $2, $3, $4, NOW())
            RETURNING *;
        `;
        const values = [nombre, correo, asunto, mensaje];
        const result = await pool.query(consulta, values);
        console.log('✅ Contacto agregado:', result.rows[0]);
        return result.rows[0];
    } catch (error) {
        console.error("❌ Error en agregarContacto:", error.message);
        throw error;
    }
};

const modificarContactos = async (nombre, correo, asunto, mensaje, id) => {
  try {
    const consulta = `
      UPDATE datos 
      SET nombre = $1, correo = $2, asunto = $3, mensaje = $4, fecha = NOW() 
      WHERE id = $5
      RETURNING *;
    `;
    const values = [nombre, correo, asunto, mensaje, id];
    const result = await pool.query(consulta, values);   
    console.log('🛠️ Contacto modificado:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("❌ Error en modificarContactos:", error.message);
    throw error;
  }
};



const getContactos = async () => {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('⏱️ Resultado NOW():', result.rows[0]);
    } catch (error) {
        console.error('Error en getContactos:', error);
    }
};

const obtenerContactos = async () => {
    const { rows } = await pool.query('SELECT * FROM datos');
    console.log('📥 Contactos obtenidos:', rows);
    return rows;
};

module.exports = {
    getContactos,
    agregarContacto,
    verificarBaseDeDatos,
    obtenerContactos,
    modificarContactos 
};
