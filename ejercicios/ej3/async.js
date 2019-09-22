const Personas =[
    {nombre:'Marcos',
    edad: 22},
    {nombre: 'Jose',
    edad:13},
    {nombre:'allegra',
    edad:23}
]


const getPersonas = () =>  {
    setTimeout(() =>{
        Personas.forEach(persona => {
            console.log(`Nombre: ${persona.nombre}, edad: ${persona.edad}`);
        });
    },2000)
}



// getPersonas();


const addPersona = (nombre,edad)=>{
    return new Promise((reject,resolve) =>{
        setTimeout(()=>{
            const auxPersona={nombre,edad};
            Personas.push(auxPersona);
            let err =false
            if(err){
                reject(err);
            }else{
                resolve();
            }
        },3000)
    })
}





async function exPrueba(){
    await addPersona('max',22).then(()=>console.log('listo')).catch((err) => {
        console.log(err);
    });
    await getPersonas();

}


exPrueba()