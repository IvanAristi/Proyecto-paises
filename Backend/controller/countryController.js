const axios = require('axios');
const Country = require('../models/country');

// Función para obtener datos de países desde la API GraphQL y guardarlos en MongoDB
async function getAndSaveGraphQLCountries() {
  try {
    // Realiza una solicitud POST a la API GraphQL para obtener datos de países
    const response = await axios.post('https://countries.trevorblades.com/', {
      query: `
        query {
          countries {
            code
            name
            continent {
              name
            }
            capital
            language
            currency
          }
        }
      `,
    });

    // Extrae los datos de países de la respuesta
    const countriesData = response.data.data.countries;

    // Inserta los datos de países en la base de datos MongoDB
    await Country.insertMany(countriesData);

    console.log('Datos de países insertados correctamente en MongoDB');
  } catch (error) {
    // Maneja los errores y muestra un mensaje de error
    console.error('Error al obtener y guardar datos de la API GraphQL:', error.message);
  }
}

// Función para insertar un nuevo país en la base de datos MongoDB
async function insertCountry(req, res) {
  try {
    // Obtiene los datos del país desde el cuerpo de la solicitud
    const newCountryData = req.body;

    // Inserta el nuevo país en la base de datos MongoDB
    const newCountry = await Country.create(newCountryData);

    // Devuelve el país recién creado como respuesta
    res.status(201).json(newCountry);
  } catch (error) {
    // Maneja los errores y devuelve un mensaje de error
    console.error('Error al insertar un nuevo país:', error.message);
    res.status(500).json({ message: 'Error al insertar un nuevo país' });
  }
}

module.exports = {
  getAndSaveGraphQLCountries,
  insertCountry,
};
