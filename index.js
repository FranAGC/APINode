const express = require('express');
const routerAPI = require('./routes');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

var mysql = require('mysql');


var conexion = mysql.createConnection({
    host:'localhost',
    database: 'mundial2022',
    user: 'root',
    password: ''
});





app.get('/json', function (req, res) {
    conexion.connect();  
   
    conexion.query('SELECT * FROM paises', function(err, rows, fields)   
    {  
        conexion.end();
        if (err) throw err;  
        res.json(rows); 
    });
  });
   
  app.listen(3000, function () {
    console.log('Puerto 3000!');
  });
   


/*
app.get('/', (req, res) => {
    res.send("Hola");
});

app.get('/paises/:id', (req, res) => {
    const {id} = req.params.id;
    res.json({
        id: 2, nombre: 'France', region: 'EU'
    })
});

app.get('/paises', (req, res) => {
    const paises = [];
    const {size} = req.query;
    const limit = size || 10;
    for(let i=0; i < limit; i++){
        paises.push( {
            id: i+1,
            nombre: faker.address.country(),
            region: faker.address.countryCode('alpha-2'),
        })
    }
    res.json(paises);
});

app.get('/paises/:id/region/:regionId', (req, res) => {
    const {id, regionId} = req.params;
    res.json({
        id, regionId,
    });
});


app.get('/users', (req, res) => {
    const {limit, offset} = req.query;
    if(limit && offset) {
        res.json({
            limit, offset,
        });
    }else {
        res.send("No se encontraron parametros");
    }
});


app.listen(port, () => {
    console.log("Conectado al puerto:", port);
});

*/