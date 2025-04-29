const fs =require('fs');
const autos = [
    {
        marca: 'Fiat',
        modelo: 'uno',
    },
    {
        marca: 'chevrolet',
        modelo: 'corsa',
    }, 
    {
        marca: 'Renault',
        modelo: 'clio',
    }
]

fs.writeFileSync('autos.json', JSON.stringify(autos));


const data = fs.readFileSync('autos.json', 'utf-8');
const auto = JSON.parse(data);



auto.forEach( (auto) => {
    console.log(auto.marca)
    })

 const {saludar, darLasGracias} = require('./modales.js');

 saludar('Ricardo')
 darLasGracias('Jose')