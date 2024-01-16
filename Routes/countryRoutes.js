const express = require('express');
const router = express.Router();
const countryController = require('../controller/countryController');

// Ruta para obtener todos los países
router.get('/countries', countryController.getGraphQLCountries);

module.exports = router;