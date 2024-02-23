import './ManageCountry.css';
import { useState } from 'react';

const ManageCountry = () => {
  const [data, setData] = useState({
    code: "",
    name: "",
    capital: "",
    language: "",
    continent: "",
    currency: "", 
    consulta: "",
    _id: ""
  });

  const [ok, setOk] = useState("");

  const consultar = function () {
    const URL = `${import.meta.env.VITE_API}/countryByCode/${data.consulta}`;
    fetch(URL)
      .then(res => res.json())
      .then(countryData => {
        setData({
          code: countryData.code,
          name: countryData.name,
          continent: countryData.continent,
          language: countryData.language,
          capital: countryData.capital ,
          currency: countryData.currency,
         consulta: countryData.code,
          id: countryData._id
        });
      })
      .catch(err => console.log(err));
  };

  const Delete = function () {
    const URL = `${import.meta.env.VITE_API}/countries/${data.id}`
    fetch(URL, { method: "DELETE" })
      .then(res => {
        if (res.ok) {
          setOk("Eliminado Correctamente");
        }
      })
      .catch(err => console.log(err));

    setData({
      code: "",
      name: "",
      continent: "",
      capital: "",
      currency: "",
      language: ""
    });
  };

  const update = function () {
    const URL = `${import.meta.env.VITE_API}/countries/${data.id}`
    const newData = {
      code: data.code,
      name: data.name,
      continent: data.continent,
      capital: data.capital,
      currency: data.currency,
      language: data.language
    };

    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    };

    fetch(URL, settings)
      .then(res => {
        if (res.ok) {
          setOk("Editado Correctamente");
        }
      })
      .catch(err => console.log(err));

    setData({
      code: "",
      name: "",
      continent: "",
      capital: "",
      currency: "",
      languages: ""
    });
  };

  return (
    <div className="containerManage">
      <div className='codigo'>
        <label htmlFor="miInput">Codigo del Pais:</label>
        <input type="text" id="miInput" name="miInput" value={data.consulta} onChange={e => setData({ ...data, consulta: e.target.value })} />
        <button type="button" id='quer' onClick={consultar}>Consultar </button>
      </div>

      <div className='inputts'>
        {ok && <p>{ok}</p>}
        <div className='language'>
          <form>
            <label htmlFor="codigo"> Código:</label>
            <input type="text" id="codigo" name="codigo" value={data.code} onChange={e => setData({ ...data, code: e.target.value })} />
          </form>

          <form>
            <label htmlFor="miInput">Lengua</label>
            <input type="text" id="miInput" name="miInput" value={data.language} onChange={e => setData({ ...data, language: e.target.value })} />
          </form>

          <form>
            <label htmlFor="miInput">Capital</label>
            <input type="text" id='Conti' name="miInput" value={data.capital} onChange={e => setData({ ...data, capital: e.target.value })} />
          </form>
        </div>

        <div className='name'>
          <form>
            <label htmlFor="miInput"> Nombre:</label>
            <input type="text" id="miInput" name="miInput" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
          </form>

          <form>
            <label htmlFor="miInput">Continente:</label>
            <input type="text" id="miInput" name="miInput" value={data.continent} onChange={e => setData({ ...data, continent: e.target.value })} />
          </form>

          <form>
            <label htmlFor="miInput">Moneda:</label>
            <input type="text" id='money' name="miInput" value={data.currency} onChange={e => setData({ ...data, currency: e.target.value })} />
          </form>
        </div>
      </div>

      <div className='updates'>
        <div>
          <button id='buton1' onClick={Delete}>Eliminar</button>
          <button id='buton2' onClick={update}>Actualizar</button>
        </div>
      </div>
    </div>
  );
};

export default ManageCountry;