const express = require('express');
const app = express();
const routerCountries = require("./Backend/Routes/countryRoutes.js") 
const cors = require("cors")
const port = 3000;
require('./Backend/config/database');

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json());
app.use(cors())
app.use(routerCountries)


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

