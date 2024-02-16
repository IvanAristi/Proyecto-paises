
import './CreateCountry.css'
import {useState} from 'react'


export const CreateCountry = () => {
  const [ok , setOk] = useState(false)
  function HandleSubmit(e){
    e.preventDefault()
    const data = {
      code:e.target.code.value,
      name:e.target.name.value,
      language:e.target.name.value,
      continent:e.target.continent.value
      
    }
   const URL = 'http://127.0.0.1:3000/Insert'
   const settings = {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
   }
  fetch(URL, settings)
   .then(res=>{
    if(res.ok){
      setOk(true)

    }
   })
  .catch(err=>console.log(err))
  }
  return (

    <div className="containerCreate">
      <div className='Create'>
        <label htmlFor="miInput">Codigo del Pais:</label>
        <input type="text" id="miInput" name="codeInput" />
        <button type="button" id='query'>Consultar</button>
        
      </div>
      {ok && <p>Pais Creado Correctamente</p>}

      <form onSubmit={HandleSubmit}>
        <div className='codName'>
          <div>
            <label htmlFor="miInput">Codigo:</label>
            <input type="text" id="miInput" name="code" />
          </div>

          <div>
            <label htmlFor="miInput">Nombre:</label>
            <input type="text" id="miInput" name="name" />
          </div>

        </div>

        <div className='Lenguage'>
          <div>
            <label htmlFor="miInput">Lengua:</label>
            <input type="text" id="miInput" name="language" />
          </div>

          <div>
            <label htmlFor="miInput">Continente:</label>
            <input type="text" id="miInput" name="continent" />
          </div>

        </div>


        <div className='butons'>
          <div>
            <button id='buton1'>Limpiar</button>
            <button id='buton2' type='submit'>Crear</button>
          </div>

        </div>
      </form>



    </div>
  );
};


export default CreateCountry