let deadpool ={
    nombre:'wade',
    apellido:'winstone',
    poder:'regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    } 
}
console.log(deadpool.getNombre());








let {nombre: primerNombre, apellido,poder} = deadpool;

console.log(primerNombre,apellido,poder);