// setTimeout( function () {
//     console.log('hola mundo')
// },3000 )


// setTimeout( () => console.log('hola'), 3000 )

let getUsuarioByID = (id, callback) =>{
    let usuario = {
        nombre: 'fernando',
        id: id //id
    }
    callback(usuario);

    if(id === 20){
        callback(`El usuario con id ${id}, no existe en la BD`);
    }else{
        callback(null, usuario)
    }

}




getUsuarioByID(10, (err,usuario)=>{
    if(err){
        return console.log(err)
    }

    console.log('Usuario de base de datos', usuario);
})