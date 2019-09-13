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


/*Para no realizar una programacion en horizontal es una buena practica usarla de esta forma */
getEmpleado(1).then(empleado =>{
    return getSalario(empleado);
})
.then(res=>{
    console.log(res)
})
.catch( err =>{
    console.log(err)
})

/* 
lo mismo de arriba pero mas corto
getEmpleado(1).then(empleado => getSalario(empleado) )
.then(res => console.log(res))
.catch( err => console.log(err))
*/