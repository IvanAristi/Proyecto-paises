import { Link } from 'react-router-dom';
import imagen1 from '../../../img/imagen1.png'
import './Menu.css';

export const Menu = () => {
  return (
    <div className='container1'>
      <aside className="menu">
        <h1>  </h1>
        <img src={imagen1} alt="Imagen1" className="logo" /> 
        <ul>
          <li>
            <button id='etiqueta'><Link to='/Countries'>Home</Link></button>
          </li>
          <li>
            <button id='etiqueta'><Link to='/CreateCountry'>Crear País</Link></button>
          </li>
          <li>
            <button id='etiqueta'><Link to='/ManageCountry'>Gestionar País</Link></button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Menu;
