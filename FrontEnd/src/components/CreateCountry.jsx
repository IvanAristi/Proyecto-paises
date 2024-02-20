import './CreateCountry.css';
import { useState , useRef } from 'react';





export const CreateCountry = () => {
  const [ok, setOk] = useState(false);
  const [data , setData] = useState({name:"",
    code:"",
    language:"",
    continent:""
  })
 const formref = useRef(null)
 const clear = function(){
  setData({
    code:"",
    name:"",
    continent:"",
    language:""
  })
 }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      code: e.target.code.value,
      name: e.target.name.value,
      language: e.target.name.value,
      continent: e.target.continent.value
    };

    const URL = 'http://127.0.0.1:3000/Insert';
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(URL, settings)
      .then(res => {
        if (res.ok) {
          setOk(true);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="containerCreate">
      <div className="Create">
        <label htmlFor="codeInput">Código del Pais:</label>
        <input type="text" id="codeInput" name="codeInput" />
        <button type="button" id="query">Consultar</button>
      </div>
      {ok && <p>Pais Creado Correctamente</p>}

      <form onSubmit={handleSubmit}ref={formref} >
        <div className="codName">
          <div>
            <label htmlFor="code">Código:</label>
            <input type="text" id="code" name="code" value={data.code} onChange={e=>{
              setData({...data,code:e.target.value})}}/>
          </div>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={data.name} onChange={e=>{
              setData({...data,name:e.target.value})}} />
          </div>
        </div>

        <div className="Lenguage">
          <div>
            <label htmlFor="language">Lengua:</label>
            <input type="text" id="language" name="language" value={data.language} onChange={e=>{
              setData({...data,language:e.target.value})}} />
          </div>
          <div>
            <label htmlFor="continent">Continente:</label>
            <input type="text" id="continent" name="continent" value={data.continent} onChange={e=>{
              setData({...data,continent:e.target.value})}}/>
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
