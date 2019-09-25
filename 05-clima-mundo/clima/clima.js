const axios = require('axios');


const getClima = async (lat,lng) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=8e53e6f2fac6b756b6bd3227261fbd04&units=metric`)
    // if(resp.data.main.temp.lenght)
    // {
    //     throw new Error(`No hay resultados para la lat: ${ lat } y la lng: ${ lng }` )
    // }
    return resp.data.main.temp;
}


module.exports ={
    getClima
}