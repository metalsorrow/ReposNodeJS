


// Transforma a una promesa automaticamente solo usando async y await
//Cualquier error ejecuta el catch
let getNombre = async() =>{
    // throw new Error('No existe un nombre para ese usuario'); asi se puede ejecutar un err desde el async y await
    return 'Fernando'
};
// let getNombre = () =>{
//     return new Promise((resolve, reject)=>{
//         resolve('Fernando');
//     })
// }



getNombre().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log('Error de async:',err)
});



























let getNombre2 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Fernando')
        },3000)
    });
}


let saludo = async() =>{
    let nombre = await getNombre2();
    return `Hola ${nombre}`;
}



saludo().then(mensaje =>{
    console.log(`El mensaje async es: ${mensaje}`);
})
.catch(err =>{
    console.log(err)
})



