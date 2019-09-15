const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar')
const {argv} =require('./config/yargs')
const colors = require('colors');
//const argv =require('./config/yargs').argv otra forma

//Yargs ayuda a leer los campos ingresados mediante el cmd del argv, ya que estos aparecen, pero de una forma mas dificl de validar. esta libreria ya cumple la funcion
// const multiplicar = require('./multiplicar/multiplicar')
// Destructuracion, solo saca el componente de este export, en general se ocupa con objetos, en si mismo asigna a crearArchivo: crearArchivo


let comando = argv._[0];
switch(comando){
    case 'listar':
            listarTabla(argv.base,argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base)
        .then( archivo =>console.log(`Archivo creado: ${colors.green(archivo)}`))
        .catch(err => console.log(err));        break;
    default:
        console.log('Comandono reconocido');
}




//          ver resultados 
// console.log(`limite: ${argv.limite}`)
// console.log(argv.base);

//
// let parametro = argv[2];
// let base = parametro.split('=')[1]
