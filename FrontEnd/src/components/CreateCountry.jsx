
import './CreateCountry.css'


export const CreateCountry = () => {
  return (
    <div className="containerCreate">
      <div  className='Create'>
      <label htmlFor="miInput">Codigo del Pais:</label>
      <input type="text" id="miInput" name="miInput" />
      <button type="button"  id='query'>Consultar</button>
      </div>


  <div  className='codName'>
      <div>
      <label htmlFor="miInput">Codigo:</label>
      <input type="text" id="miInput" name="miInput" />
      </div>

      <div>
      <label htmlFor="miInput">Nombre:</label>
      <input type="text" id="miInput" name="miInput" />
      </div>

      </div>

      <div  className='Lenguage'>
      <div>
      <label htmlFor="miInput">Lengua:</label>
      <input type="text" id="miInput" name="miInput" />
      </div>

      <div>
      <label htmlFor="miInput">Continente:</label>
      <input type="text" id="miInput" name="miInput" />
      </div>

      </div>


   <div  className='butons'>
      <div>
      <button id='buton1'>Limpiar</button>
      <button id='buton2'>Crear</button>
      </div>

      </div>



    </div>
  );
};


export default CreateCountry