const express = require('express');

const paisesRoutes = require('./routes/paises-routes');

const app = express();
const port = 3000;

app.use('/api/paises', paisesRoutes);

app.listen(port);