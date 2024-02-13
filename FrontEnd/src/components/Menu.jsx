import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  return (
    <div className='container1'>
    <aside className="menu">
      <ul>
        <li>
          <button id="logo">Logo</button>
        </li>
        <li>
          <button id='etiqueta'><Link to='/Countries'>Home</Link></button>
        </li>
        <li>
          <button id='etiqueta'><Link to='/CreateCountry'>Crear Pais</Link></button>
        </li>
        <li>
         <button id='etiqueta'> <Link to='/ManageCountry'>Gestionar Pais</Link></button>
        </li>
      </ul>
    </aside>
    </div>
  );
};

export default Menu;





