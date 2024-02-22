import './ManageCountry.css';
import { useState } from 'react';
const ManageCountry = () => {
  const [data, setData] = useState({
    code: "",
    name: "",
    language: "",
    continent: "",
    consulta: "",
    _id: ""

  })
  const [ok, setOk] = useState("")
  const consultar = function () {
    const URL = "http://127.0.0.1:3000/countryByCode/" + data.consulta
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setData({
          code: data.code,
          name: data.name,
          continent: data.continent,
          language: data.language,
          consulta: data.code,
          id: data._id

        })
      })
      .catch(err => console.log(err))

  }
  const Delete = function () {
    const URL = "http://127.0.0.1:3000/countries/" + data.id
    fetch(URL, { method: "DELETE" })
      .then(res => {
        if (res.ok) {
          setOk("Eliminado Correctamente")

        }
      })
    setData({
      code: "",
      name: "",
      consulta: "",
      continent: "",
      language: "",
      id: ""
    })
  }
  const update = function () {
    const URL = "http://127.0.0.1:3000/countries/" + data.id
    const newData = {

      name: data.name,
      continent: data.continent,
      language: data.language

    }
    const settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    }
    fetch(URL, settings)
      .then(res => {
        if (res.ok) {
          setOk("Editado Correctamente")
        }
      })
    setData({
      code: "",
      name: "",
      consulta: "",
      continent: "",
      language: "",
      id: ""
    })
  }
  return (
    <div className="containerManage">



      <div className='codigo'>
        <label htmlFor="miInput">Codigo del Pais:</label>
        <input type="text" id="miInput" name="miInput" value={data.consulta} onChange={e => setData({ ...data, consulta: e.target.value })} />
        <button type="button" id='quer' onClick={consultar}>Consultar </button>
      </div>


      <div className='inputts'>
        {ok && <p>{ok}</p>}

        <div className='name'>

          <form  >
            <label htmlFor="miInput"> name:</label>
            <input type="text"
              id="miInput"
              name="miInput"
              value={data.name}
              onChange={e => setData({ ...data, name: e.target.value })} />
          </form>




          <form>
            <label htmlFor="miInput">continente:</label>
            <input type="text"
              id="miInput"
              name="miInput"
              value={data.continent}
              onChange={e => setData({ ...data, continent: e.target.value })} />
          </form>


          <form>
            <label htmlFor="miInput">language:</label>
            <input type="text" id='Conti' name="miInput" value={data.language} onChange={e => setData({ ...data, language: e.target.value })} />
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
