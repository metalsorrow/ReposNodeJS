let empleados = [{
    id:1,
    nombre: 'Fernando'
},{
    id:2,
    nombre: 'Melisa'
},
{
    id:3,
    nombre: 'Juan'
}];



let salarios =[{
    id:1,
    salario:1000
},{
    id:2,
    salario:2000
}];



let getEmpleado = (id)=>{

    return new Promise((resolve,reject) =>{


        let empleadoDB = empleados.find(empleado => empleado.id === id)
    
        // si el empleado no existe, el callback devuelve en el primer parametro un error (en la funcion callback)
        if (!empleadoDB){
            reject(`No existe un empleado con el ID ${ id }`)
        } else {
        // de otra forma, el callback devuelve el primer parametro null y el segun con el resultado esperado
            resolve(empleadoDB);
        }
    });
}

/*
getEmpleado(10).then( empleado =>{
    console.log('empleado DB', empleado)
});
Asi no
*/


// Metodo correcto
getEmpleado(10).then( empleado =>{
    console.log('empleado DB', empleado)
}, (err) => {
    console.log(err)
});



let getSalario = (empleado) =>{
    return new Promise((reject,resolve) =>{

        let auxSalario = salarios.find( salario =>salario.id === empleado.id)
    
        if(!auxSalario){
            reject(`No exite ningun salario al id ${empleado.id}`)
        }else{
            resolve({
                        nombre: empleado.nombre,
                        id: auxSalario.id,
                        salario: auxSalario.salario
                    });
        }
    })
}




getEmpleado(1).then( empleado =>{
    getSalario(empleado).then(res =>{
        console.log(res)
    }, (err)=>{
        console.log(err)
    });

}, (err) => {
    console.log(err)
});


// getSalario(empleados[0]).then(res =>{
//     console.log(res)
// }, (err)=>{
//     console.log(err)
// });




