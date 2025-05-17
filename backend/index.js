const express = require ('express')
const app = express()
const fs = require('fs')


app.listen(3000, () => {
    console.log("¡Servidor encendido! http://localhost:3000/home");
});



app.use(express.json()) //declaracion de middleware

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


