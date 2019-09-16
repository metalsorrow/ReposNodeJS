const {argv} = require('./config/yargs');
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer')

//usa el primer parametro para detectar el comando
let comando = argv._[0]


switch(comando){

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado){
            console.log('==========POR HACER==========='.green);
            console.log(tarea.descripcion);
            console.log( `Estado:  ${tarea.completado}`)
            console.log('=============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
            console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)

        if(borrado){
            console.log('==========Borrado==========='.red);
            console.log(`Tarea: ${argv.descripcion} Borrada`);
            console.log('=============================='.red);
        }else{
            console.log('Error, tarea no existe'.red);
        }
    
        break;
    default:
        console.log('comando no valido');
}

