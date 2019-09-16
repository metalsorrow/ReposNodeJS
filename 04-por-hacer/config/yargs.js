
const descripcion ={
    alias: 'd',
    demand:true,
    desc:'Descripcion de la tarea por hacer'
}

const completado ={
    alias: 'c',
    desc:'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear','Crear un elemento por hacer',{
        descripcion
    })
    .command('actualizar','Actualiza el estadocompletado de una tarea',{
        descripcion,
        completado
    })
    .command('listar','Permite listar tareas Incompletas',{
        completado
    })
    .command('borrar','Borra una tarea segun su descripcion')
    .help()
    .argv




module.exports={
    argv
}