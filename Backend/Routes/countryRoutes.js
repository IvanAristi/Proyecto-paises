const express = require('express');
const router = express.Router();
const controller = require('../controller/countryController.js');

// Ruta para obtener todos los países
router.post('/countries', controller.getAndSaveGraphQLCountries);
router.post('/Insert', controller.insertCountry);
router.get('/countries',controller.getAllCountries);

module.exports = router;