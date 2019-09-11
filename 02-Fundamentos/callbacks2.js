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




// Callback es una funcion que retorna otra funcion, en este caso
// se espera el resultado de la busqueda de un empleado segun la id
let getEmpleado = (id, callback)=>{
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    // si el empleado no existe, el callback devuelve en el primer parametro un error (en la funcion callback)
    if (!empleadoDB){
        callback(`No existe un empleado con el ID ${ id }`)
    } else {
    // de otra forma, el callback devuelve el primer parametro null y el segun con el resultado esperado
        callback(null, empleadoDB);
    }
}


let getSalario = (empleado, callback)=>{
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if(!salarioDB){
        callback(`El empleado ${empleado.nombre} no tiene un salario`)
    }else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        })
    }
}




getEmpleado(3,(err, empleado)=>{
    if(err){
        return console.log(err);
    }

    getSalario(empleado,(err, res) => {
        if(err){
            return console.log(err) //importante usar el return para salir de la funcion, ya que el resultado viene vacio, causa error
        }
        console.log(`El empleado ${res.nombre} tiene un salario de ${res.salario}`)
    });
});













// Ejercicio propuesto

// let getSalarioNombre = (id,callback) =>{
//     let empleadoDB = empleados.find(empleado => empleado.id === id)
//     let salarioDB = salarios.find(salario => salario.id === id)
//     if(!empleadoDB){
//         callback(`No existe un empleado con la id ${id}`)
//     }else if(!salarioDB){
//         callback(`No existe un salario con la id ${id}`)
//     }
//     else{
//         callback(null, [empleadoDB, salarioDB] )
//     }
// }



// getSalarioNombre(10,(err, res)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(`El empleado ${res[0].nombre} tiene un salario de: ${res[1].salario}`)
//     console.log(res[0].nombre)
//     console.log(res[1].salario)
// })



// Ejercicio propuesto toma 


