const nombre ={
    alias: 'n',
    demand: true,
    desc: 'Nombre de la persona'
}
const edad ={
    alias: 'e',
    desc:'Edad de la persona'
}
const rut ={
    alias:'r',
    demand:true,
    desc:'Rut de la persona,PK'
}

const argv = require('yargs')
            .command('listar','Lista todas las personas del sistema')
            .command('buscar','Busca una persona dentro del sistema',{
                rut
            })
            .command('guardar','Agrega una nueva persona al sistema',{
                nombre,
                edad,
                rut
            })
            .command('actualizar','Actualzar a una persona del sistema',{
                nombre,
                edad,
                rut
            })
            .command('eliminar','Eliminar una persona delsistema',{
                rut
            })
            .help()
            .argv


module.exports={
    argv
}