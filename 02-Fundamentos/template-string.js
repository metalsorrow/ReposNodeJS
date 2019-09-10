let nombre = "Deadpool"
let real = 'Wade Winston'

console.log(`${nombre} ${real}`);

console.log(nombre+ ' ' +real);


let template=(`${nombre} ${real}`);

let Concat=(nombre+ ' ' +real);

if(template === Concat){
    console.log('Son iguales')
}

function getNombre(){
    return `${nombre} ${real}`
}

console.log(`El nombre de: ${getNombre()}`);