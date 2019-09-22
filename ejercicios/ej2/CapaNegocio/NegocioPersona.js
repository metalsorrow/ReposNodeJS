const fs = require('fs')

let listPersona = []


const quemarDatos = () =>{
    let datos = JSON.stringify(listPersona)

    fs.writeFile('./CapaDatos/Data.json',datos,err =>{
        if(err){
            console.log(`Ocurrio un error al agregar los datos: ${err}`)
        }
    })
}
const cargarDatos= () =>{
    try {
        listPersona = require('../CapaDatos/Data.json')        
    } catch (er) {
        listPersona = []
    }
}



const guardar=(rut, nombre, edad=0)=>{
    cargarDatos();

    let auxPersona={
        rut,
        nombre,
        edad
    }

    listPersona.push(auxPersona);
    quemarDatos();

    return auxPersona;
}

const listar=()=>{
    cargarDatos();

    return listPersona;
}

const actualizar=(rut,nombre, edad)=>{
    cargarDatos();
    let index = listPersona.findIndex(persona => persona.rut === rut )

    if(index>=0){
        // listPersona[index]=auxPersona
        if(nombre){
            listPersona[index].nombre=nombre
            console.log(`Nombre cambiado a ${nombre}`);
        }
        if(edad){
            listPersona[index].edad=edad
            console.log(`Edad cambiada a ${edad}`);
        }
        quemarDatos();
        return listPersona[index].rut;
    }else{
        return 0;
    }
}
const buscar=(rut)=>{
    cargarDatos();

    let index = listPersona.findIndex(persona => persona.rut === rut)

    if(index>=0){
        return listPersona[index];
    }else{

        return 0
    }
}


const eliminar=(rut)=>{
    cargarDatos();
    
    let index = listPersona.findIndex(persona=> persona.rut === rut)

    if(index){
        listPersona.splice[index,1]
        quemarDatos();
        return rut
    }else{
        return 0
    }

}


module.exports={
    eliminar,
    buscar,
    actualizar,
    listar,
    guardar
}



