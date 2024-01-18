const express = require('express');
const mongoose = require('mongoose');
const Country = require('./Backend/models/country');
const app = express();

// Configurar MongoDB Atlas
require('./Backend/config/database');

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json());

// Ruta para obtener todos los países
app.get('/countries', async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para insertar un nuevo país
app.post('/countries', async (req, res) => {
  try {
    const newCountry = await Country.create(req.body);
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Puerto de la aplicación
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

