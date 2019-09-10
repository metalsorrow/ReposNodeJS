// function sumar(a,b){
//     return a+b
// }
// console.log(sumar(10,20));

// //arrow function

// //solo si el resultado es de una linea
// let sumar = (a,b)=>a+b
// console.log(sumar(10,20));



// //transformacion 1
// function saludar(){
//     return 'hola mundo'
// }

// let saludar = () => 'hola mundo'



// //transformacion 2
// function saludar(nombre){
//     return `Hola ${nombre}`
// }

// let saludar = (nombre) => `hola ${nombre}`







// El alcance de this en la arrow function apunta a global


let deadpool ={
    nombre:'wade',
    apellido:'winstone',
    poder:'regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    } 
}


console.log(deadpool.getNombre());