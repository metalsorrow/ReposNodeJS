const fs = require('fs');
const colors = require('colors');

// const fs = require('express'); archivos exportados
// const fs = require('./archivo'); archivos creados en el proyecto


let crearArchivo = (base,limite=10)=>{
    return new Promise((resolve, reject)=>{
        
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`)
        }
        
        let data = '';


        for (let x=1;x<=limite;x++){
            data+=` ${ base } * ${ x } = ${ base * x}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if(err)
            reject (err)
        else
            resolve(`tabla-${base}-al-${limite}.txt`)    
        });        
    })

    
}


let listarTabla = (base,limite=10) =>{
    console.log('==========================='.blue);
    console.log(`Tabla del ${ base} al ${limite}`.blue);
    console.log('==========================='.blue);
    for(x=1;x<=limite;x++){
        console.log(`${base} * ${x} = ${colors.green(base*x)}`);
    }
}


module.exports = {
    crearArchivo,
    listarTabla
}
// Exporta los objetos de forma global, en este caso se especifica el metodo crearArchivo de forma global



// el primer campo se encarga de dar el nombre y guardar el archivo
//consiguiente, el dato a guardar
//y por ultimo se envia un error en caso de que suseda algo o su mensaje correpondiente al finalizar el proceso
