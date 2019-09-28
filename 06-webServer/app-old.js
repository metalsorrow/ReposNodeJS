const http = require('http');

http.createServer( ( req , res ) =>{


    res.writeHead(200, {'Content-Type':'application/json'});

    let salida = {
        nombre:'Fernando',
        edad: 32,
        url:req.url
    }

    res.write(JSON.stringify(salida))
    // res.write('hola mundo');
    res.end();

})
.listen(80);

console.log('Escuchando el puerto 80');



//Se puede probar desde Postman, para ver los detalles del mismo
