const fs = require('fs');

//inicializa el listado por hacer
let listadoPorHacer = [];


const guardarDB = () =>{

    //crea un formato json segun los datos de el listado, luego, los escribe en el archivo data.json, la lista que posee es de forma local
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data, err => {
        if (err) throw new Error('No se pudo grabar',err)
    })
}

const cargarDB = () =>{
    //devuelve la lista de porHacer


    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
    listadoPorHacer = []        
    }
}

//crea un PorHacer, segun la descripcion, para que no se sobreescriba, primero se lee el archivo con cargaDB
const crear = (descripcion)=>{
    cargarDB();

    let porhacer={
        descripcion,
        completado:false
    }
    listadoPorHacer.push(porhacer);

    guardarDB();
    return porhacer;
}

// const getListado = () =>{
//     cargarDB();
//     let listadoIncompleto = []

//     listadoPorHacer.forEach(element => {
//         if(!element.completado){
//             listadoIncompleto.push(element)
//         }
//     });
//     return listadoIncompleto;
// }


const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) =>{
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion)

    if(index>=0){
        listadoPorHacer[index].completado = completado
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) =>{
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    
    if(index>=0){
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    }else{
        return false;
    }

    // // otra forma con filter
    // let nuevoListado = listadoPorHacer.filter( tarea =>{
    //     return tarea.descripcion !== descripcion
    // })

    // if(nuevoListado.length === listadoPorHacer.length){
    //     return false;
    // }else{
    //     listadoPorHacer=nuevoListado
    //     guardarDB();
    //     return true;
    // }

}





module.exports ={
    crear,
    getListado,
    actualizar,
    borrar
}