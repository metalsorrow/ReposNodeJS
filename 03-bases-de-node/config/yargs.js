let opts = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimeen consola la tabla de multiplicar', opts)
    .command('crear', 'Crea una tabla segun el parametro base y limite',opts)
    .help()
    .argv
    


module.exports={
    argv
}
