import './CreateCountry.css';
import { useState, useRef } from 'react';
 import axios from 'axios';
 import swal from 'sweetalert'; 

export const CreateCountry = () => {
  const [ok, setOk] = useState(false);
  const [data, setData] = useState({
    name: "",
    code: "",
    language: "",
    continent: "",
    currency: "",
    capital: ""
  });
  const formRef = useRef(null);

  const clear = () => {
    setData({
      code: "",
      name: "",
      continent: "",
      language: "",
      currency: "",
      capital: ""
    });
    setOk(false);
    document.getElementById("codeInput").value = "";
  };

  const handleQueryClick = async () => {
    const codeInput = document.getElementById("codeInput").value;

    try {
      const response = await axios.post('https://countries.trevorblades.com/', {
        query: `
          query {
            country(code: "${codeInput}") {
              name
              code
              capital
              currency
              languages {
                name
              }
              continent {
                name
              }
            }
          }
        `
      });

      if (response.data.data && response.data.data.country) {
        const countryData = response.data.data.country;
        setData({
          code: countryData.code,
          name: countryData.name,
          continent: countryData.continent.name,
          capital: countryData.capital,
          currency: countryData.currency,
          language: countryData.languages.length > 0 ? countryData.languages[0].name : ''
        });
        setOk(true);
        swal("País encontrado", "¡Éxito!", "success");
      } else {
        clear();
        swal("País no encontrado", "Código del país no existe", "warning");
      }
    } catch (error) {
      console.error("Error al consultar el país:", error);
      swal("Error", "Hubo un error al consultar el país. Por favor, intenta nuevamente.", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      code: e.target.code.value,
      name: e.target.name.value,
      language: e.target.language.value,
      continent: e.target.continent.value,
      capital: e.target.capital.value,
      currency: e.target.currency.value
    };

    // Verificar si el país ya está creado
    try {
      const response = await axios.get(`http://127.0.0.1:3000/countryByCode/${newData.code}`);
      if (response.data && response.data.code === newData.code) {
        swal("País ya existe", "El país ya está creado en la base de datos.", "warning");
        return;
      }
    } catch (error) {

      return;
    }

    // Si el país no existe, procede con la creación
    const URL = 'http://127.0.0.1:3000/Insert';
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    };

    try {
      const response = await fetch(URL, settings);
      if (response.ok) {
        setOk(true);
        swal("País creado", "País creado correctamente.", "success");
        clear();
      } else {
        throw new Error('Error al crear el país.');
      }
    } catch (error) {
      console.error("Error al crear el país:", error);
      swal("Error", "Hubo un error al crear el país.", "error");
    }
  };

  return (
    <div className="containerCreate">
      <div className="Create">
        <label htmlFor="codeInput">Código del País:</label>
        <input type="text" id="codeInput" name="codeInput" />
        <button type="button" id="query" onClick={handleQueryClick}>Consultar</button>
      </div>
      
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="codName">
          <div>
            <label htmlFor="code">Código:</label>
            <input type="text" id="code" name="code" value={data.code} onChange={e => setData({ ...data, code: e.target.value })} />
          </div>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
          </div>
        </div>

        <div className="Lenguage">
          <div>
            <label htmlFor="language">Lengua:</label>
            <input type="text" id="language" name="language" value={data.language} onChange={e => setData({ ...data, language: e.target.value })} />
          </div>
          <div>
            <label htmlFor="continent">Continente:</label>
            <input type="text" id="continent" name="continent" value={data.continent} onChange={e => setData({ ...data, continent: e.target.value })} />
          </div> 
        </div> <br /> <br /> <br />
        <div className='content-i'>
        <div>
            <label htmlFor="currency">Moneda:</label>
            <input type="text" id="currency" name="currency" value={data.currency} onChange={e => setData({ ...data, currency: e.target.value })} />
          </div> 
          <div>
            <label htmlFor="capital">capital:</label>
            <input type="text" id="capiatl" name="capital" value={data.capital} onChange={e => setData({ ...data, capital: e.target.value })} />
          </div>
        </div>
       

        <div className="buttons">
          <div>
            <button id="button1" onClick={clear}>Limpiar</button>
            <button id="button2" type="submit">Crear</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCountry;
