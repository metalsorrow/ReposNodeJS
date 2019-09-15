// const multiplicar = require('./multiplicar/multiplicar')

const { crearArchivo } = require('./multiplicar/multiplicar')
// Destructuracion, solo saca el componente de este export, en general se ocupa con objetos, en si mismo asigna a crearArchivo: crearArchivo


// let base = "asdfasd";

// console.log(multiplicar);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]



crearArchivo(base)
    .then( archivo =>console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));