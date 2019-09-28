const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000



app.use( express.static( __dirname + '/public' ) );


//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials/');
app.set('view engine', 'hbs');





//Express for defecto reanderisa en la carpeta Views, es 
//importante no cambiar el nombre o aprender a manejarlo
app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'marcos fuentes',
        anio: new Date().getFullYear()
    });
});
app.get('/about', (req, res) => {
    res.render('about',{
        anio: new Date().getFullYear()
    });
});
app.get('/data', function (req, res) {
      res.send('Hola data')
})


app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})