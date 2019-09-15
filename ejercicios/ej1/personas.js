
let personas =[
    {
        nombre: "jose",
        edad: 23,
        id:1
    },
    {
        nombre:"marcos",
        edad: 22,
        id:2
    },
    {
        nombre:"vivi",
        edad:20,
        id:3
    }
]



let getEdad = (id) =>{

    return new Promise((resolve, reject)=>{
        
        let auxPersona = personas.find(persona => persona.id === id)
    
        if(auxPersona)
            resolve(auxPersona.edad)
        else{
            reject(`error: ${id} no encontrado`)
        }
    })
}




getEdad(1).then( res =>{
    console.log(res)    
})
.catch(err =>{
    console.log(err)
})