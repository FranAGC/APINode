const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Hola");
});


router.get('/', (req, res) => {
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


router.get('/filter', (req, res) => {
    res.send("Filter: ")
});


router.get('/:id', (req, res) => {
    const {id} = req.params.id;
    res.json({
        id: 2, nombre: 'France', region: 'EU'
    })
});



module.exports = router;

