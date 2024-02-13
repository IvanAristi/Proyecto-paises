

import './ManageCountry.css';

const ManageCountry = () => {
  return (
    <div className="containerManage">
       <div  className='codigo'>
      <label htmlFor="miInput">Codigo del Pais:</label>
      <input type="text" id="miInput" name="miInput" />
      <button type="button" id='quer'>Consultar</button>
      </div>


<div className='inputts'>


<div className='capital'>
  <div>
<label htmlFor="miInput">Codigo :</label>
 <input type="text" id="miInput" name="miInput" />
 </div>

 <div>
<label htmlFor="miInput"> Lengua:</label>
  <input type="text" id="miInput" name="miInput" />
  </div>


<div>
<label htmlFor="miInput">Capital:</label>
  <input type="text" id="miInput" name="miInput" />
  </div>
</div>




<div className='continente' >
<div>
<label htmlFor="miInput">Nombre:</label>
 <input type="text" id="miInput" name="miInput" />
 </div>

 <div>
<label htmlFor="miInput">Continente :</label>
  <input type="text"   id='Conti' name="miInput" />
  </div>


<div>
<label htmlFor="miInput">Moneda:</label>
  <input type="text" id="miInput" name="miInput" />
  </div>
</div>

    </div>

    <div  className='updates'>
      <div>
      <button id='buton1'>Eliminar</button>
      <button id='buton2'>Actualizar</button>
      </div>

      </div>




    </div>
  );
};

export default ManageCountry;
