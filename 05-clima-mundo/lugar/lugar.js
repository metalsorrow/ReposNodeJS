const axios = require('axios')

const getLugarLatLng = async (  direccion  ) => {
    const encodeUrl = encodeURI(direccion)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': '193276bff8mshd950758eb79cfeep17f949jsneae976a6f303'}
    });
    
    
    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultado para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direcc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return{
        direcc,
        lat,
        lng
    }
}


module.exports={
    getLugarLatLng
}