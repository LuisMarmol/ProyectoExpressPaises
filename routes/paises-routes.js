const express = require('express');

const router = express.Router();

const DUMMY_PAISES = [
    {
        id: 'c1',
        pais: 'Ecuador',
        ciudad1: 'Guayaquil',
        ciudad2: 'Quito',
        ciudad3: 'Esmeraldas',
        ciudad4: 'Portoviejo',
        ciudad5: 'Pastaza',
        ciudad6: 'Atacames'
    },
    {
        id: 'c2',
        pais: 'Estados Unidos',
        ciudad1: 'New York',
        ciudad2: 'Washington DC',
        ciudad3: 'Los Angeles',
        ciudad4: 'Detroit',
        ciudad5: 'Portland',
        ciudad6: 'Orlando'
    },
    {
        id: 'c3',
        pais: 'Japon',
        ciudad1: 'Tokio',
        ciudad2: 'Sendai',
        ciudad3: 'Sapporo',
        ciudad4: 'Kioto',
        ciudad5: 'Okinawa',
        ciudad6: 'Osaka'
    }
];

router.get('/', (req, res, next) => {
    res.json({places : DUMMY_PAISES});
});

router.get('/:pid', (req, res, next) => {
    const paises = DUMMY_PAISES.find(p => {
        return p.id === req.params.pid;
    });
    res.json({paises});
});

module.exports = router;