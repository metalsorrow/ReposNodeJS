const fs = require('fs');
// const fs = require('express'); archivos exportados
// const fs = require('./fs'); archivos creados en el proyecto


let crearArchivo = (base)=>{
    return new Promise((resolve, reject)=>{
        
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`)
        }
        
        let data = '';


        for (let x=1;x<=10;x++){
            data+=` ${ base } * ${ x } = ${ base * x}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if(err)
            reject (err)
        else
            resolve(`tabla-${base}.txt`)    
        });        
    })

    
}


module.exports = {
    crearArchivo
}
// Exporta los objetos de forma global, en este caso se especifica el metodo crearArchivo de forma global



// el primer campo se encarga de dar el nombre y guardar el archivo
//consiguiente, el dato a guardar
//y por ultimo se envia un error en caso de que suseda algo o su mensaje correpondiente al finalizar el proceso
