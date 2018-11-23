const express = require('express');

//declaramos una variable llamada app, para poder usar Express como deseemos
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');

// helpers
  //cargados en hbs/helpers

//MIDDLEWARE
//especificamos qué folder queremos servir o queremos que sea público
app.use( express.static(__dirname + '/public'));

//configuramos una solicitud web cuando el path sea un slash, todas las solicitudes
//que vengan por slash (/) ejecutaremos esos callbacks
app.get('/',(req,res)=>{
  res.render('home', {
    nombre: 'pepIto griLLO',
  });
});

app.get('/about',(req,res)=>{
  res.render('about');
});



app.listen(port,()=>{
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
