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


let getEmpleado = async(id)=>{
    let auxEmpleado =  empleados.find( empleado => empleado.id === id)

    if(!auxEmpleado){
        throw new Error(`El empleado con el id ${id} no existe`)
    }else{
        return auxEmpleado
    }
} 


let getSalario = async(empleado) =>{
    let auxSalario = salarios.find( salario => salario.id === empleado.id)

    if(!auxSalario){
        throw new Error(`No existe ningun salario al id ${empleado.id}`)
    }else{
        return {nombre: empleado.nombre,
                id: empleado.id,
                salario: auxSalario.salario}
    }
}



let getInformacion = async (id) => {
    let empleado = await getEmpleado(id)
    let respuesta = await getSalario(empleado);

    return  `${respuesta.nombre} tiene un salario ${respuesta.salario}$`;
}



getInformacion(1)
    .then( res => {
        console.log(res);
    })
    .catch(err =>{
        console.log(err)
    })

