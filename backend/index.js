const express = require ('express')
const app = express()
const fs = require('fs')
const { agregarContacto, obtenerContactos, modificarContactos } = require("./consultas.js");


app.listen(3000, () => {
    console.log("¡Servidor encendido! http://localhost:3000");
});



app.use(express.json()) //declaracion de middleware

app.get("/contactos", async (req, res) => {
    const contactos = await obtenerContactos()
    res.json(contactos)
})

app.post('/contactos', async (req, res) => {
    const { nombre, correo, asunto, mensaje } = req.body;

    if (!nombre || !correo || !asunto || !mensaje) {
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    try {
        const contacto = await agregarContacto(nombre, correo, asunto, mensaje);
        res.json({ mensaje: "Contacto guardado correctamente", contacto });
    } catch (error) {
        console.error("❌ Error al guardar contacto:", error.message);
        res.status(500).json({ error: "Error al guardar el contacto en la base de datos." });
    }
});

app.put("/contactos/:id", async (req, res) => {
    const { id } = req.params;
    const { nombre, correo, asunto, mensaje} = req.body;
    await modificarContactos(nombre, correo, asunto, mensaje, id);
    res.json({ mensaje: "Contacto modificado correctamente" });
    
})

app.get("/home", (req, res)=>{
    res.send("Hello word Express Js")
});

app.get ("/productos", (req, res) => {
    const productos = JSON.parse(fs.readFileSync("productos.json"))
    res.json(productos)
})

app.get ("/usuarios", (req, res) => {
    const usuarios = JSON.parse(fs.readFileSync("usuarios.json"))
    res.json(usuarios)
})

app.post("/productos", (req, res) => {

    const producto = req.body

    const productos = JSON.parse(fs.readFileSync("productos.json"))
    productos.push(producto)

    fs.writeFileSync("productos.json", JSON.stringify(productos))

    res.send("Producto guardado")
})


