const {argv} = require('./CapaConfig/yargs')
const color = require('colors')
const NegocioPersona = require('./CapaNegocio/NegocioPersona')


let opcion =  argv._[0];
let res = 0;


switch (opcion) {

    case 'eliminar':
        res = NegocioPersona.eliminar(argv.rut)
        if(res!=0){
            console.log(`======${color.red('Cliente Eliminado')}=======`);
            console.log(`La persona ${res}, fue Eliminada correctamente`);
            console.log('==============================================');
        }else{
            console.log('Error al eliminar');
        }
        break;
    case 'buscar':
        res = NegocioPersona.buscar(argv.rut)
        if(res!=0){
            console.log(`=========${color.green('Cliente')}==========`);
            console.log(`rut: ${res.rut}`);
            console.log(`Nombre: ${res.nombre}`);
            console.log(`edad: ${res.edad}`);
            console.log('==============================================');
        }else{
            console.log('Error al Buscar');
        } 
        break;    
    case 'guardar':
        res = NegocioPersona.guardar(argv.rut,argv.nombre,argv.edad)
        if(res!=0){
            console.log(`======${color.green('Cliente Creado')}=======`);
            console.log(`La persona ${res.nombre}, fue agregada correctamente`);
            console.log('==============================================');
        }else{
            console.log('Error al guardar');
        }
        break;
    case 'listar':
        res = NegocioPersona.listar()

        res.forEach(persona => {
            console.log(`=========${color.green('Cliente')}==========`);
            console.log(`rut: ${persona.rut}`);
            console.log(`Nombre: ${persona.nombre}`);
            console.log(`edad: ${persona.edad}`);
            console.log('==============================================');  
        })
        break;
    case 'actualizar':
        res = NegocioPersona.actualizar(argv.rut,argv.nombre,argv.edad)
        if(res!=0){
            console.log(`======${color.blue('Cliente Actualizado')}=======`);
            console.log(`La persona ${res}, fue Actualizado correctamente`);
            console.log('==============================================');
        }else{
            console.log('Error al actualizar');
        }
        break;
    default:
        console.log('Opcion invalida');
        break;
}