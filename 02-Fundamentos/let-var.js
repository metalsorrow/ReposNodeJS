let nombre = "wolverine";



if( true ){
    // el contexto esta dentro de este scope
    let nombre="magneto"
}

// let nombre = "no se puede volver a poner let"

console.log(nombre);


let i
for (let i=1; i<=5;i++){
    console.log(`i: ${i}`);
}
console.log(`i: ${i}`);


// for (var i=1; i<=5;i++){
//     console.log(`i: ${i}`);
// }
// console.log(`i: ${i}`);