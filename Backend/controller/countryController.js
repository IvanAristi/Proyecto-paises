const axios = require('axios');
const Country = require('../models/country.js');


let isFetchingData = false;

async function getAndSaveGraphQLCountries(req,res) {
  if (isFetchingData) {
    console.log('La función ya está en ejecución. Espere a que termine.');
    return;
  }

  isFetchingData = true;

  try {
    const fail = await Country.find()
    if(fail.length > 0){
      return res.json({message: "los paises ya han sido creados"})
    }
    const response = await axios.post('https://countries.trevorblades.com/', {
      query: `
      query {
        countries {
          code,
          name,
          continent {
            name
          },
          capital,
          languages{
            name
          },
          currency
        }
      }
      `,
    });

    const countries = response.data.data.countries;

    countries.forEach(async (element) => {
      const capital = element.capital;
      const currency = element.currency;
      const code = element.code
      const language = element.languages.map((e) => e.name).join(', ');
      const newCountry = new Country({
        name: element.name,
        continent: element.continent.name,
        capital,
        language,
        currency,
        code
      });
      await newCountry.save();
    }
    
    );res.json(countries)
  } catch (error) {
    console.error('Error al obtener y guardar datos de la API GraphQL:', error.message);
  } finally {
    isFetchingData = false;
  }
}

async function insertCountry(req, res) {
  try {
    const newCountryData = req.body;

    const newCountry = await Country.create(newCountryData);
 
    res.status(201).json(newCountry);
  } catch (error) {
    console.error('Error al insertar un nuevo país:', error.message);
    res.status(500).json({ message: 'Error al insertar un nuevo país' });
  }
}

async function getAllCountries(_, res) {
  const countries = await Country.find();
  res.json(countries);
}

async function updateCountries(req, res) {
  const { id } = req.params;
  await Country.findByIdAndUpdate(id, req.body);
  res.status(200).json({ message: 'updated' });
};
async function getOneCountry(req, res){
  const { id } = req.params;
  const data = await Country.findById(id);
  if (data != null) {
    res.json({ data });
  } else {
    res.json({ message: "error al encontrar el id" });
  }
};
const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    await Country.findByIdAndDelete(id);
    res.json({ message: "eliminado" });
  } catch (error) {
    res.json({ message: "error al eliminar" });
  }
};

module.exports = {
  getAndSaveGraphQLCountries,
  insertCountry,
  getAllCountries,
  updateCountries,
  getOneCountry,
  deleteCountry
};
