console.log('Inicio del programa');

setTimeout(function (){
    console.log('Primer Timeout');

},3000)


setTimeout(function (){
    console.log('Segundo Timeout');

},0)


setTimeout(function (){
    console.log('Tercero Timeout');

},0)

console.log('fin de programa');


// Primero se ejecutan los call stack, 
// luego los node api para solucionar las peticiones async
//y por ultimola cola de callbacks, la cual ejecuta ya las peticiones asyn en orden de llegada