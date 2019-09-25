const {argv} = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion)
//     .then(res=>{
//         console.log(res);
//     })


// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(err =>{
//         console.log(err);
//     })



const getInfo = async ( direccion ) =>{
try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat,coords.lng);
        return `El climade ${coords.direcc} es de ${temp}.`
    } catch (ex) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}



getInfo(argv.direccion)
        .then(res =>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
            





