import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imagen1 from '../../../img/imagen1.png';
import './Menu.css';

export const Menu = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <button className='btn-menu' onClick={() => setShowMenu(!showMenu)}>
        {!showMenu ? "Mostar Menu" : "Cerrar Menu"}
      </button>
      <div className={`container1 ${showMenu ? "active" : ""}`}>
        <aside className="menu">
          <h1></h1>
          <img src={imagen1} alt="Imagen1" className="logo" />
          <ul>
            <li>
              <button id='etiqueta' className={location.pathname === '/Countries' ? 'selected' : ''}>
                <Link to='/Countries'>Home</Link>
              </button>
            </li>
            <li>
              <button id='etiqueta' className={location.pathname === '/CreateCountry' ? 'selected' : ''}>
                <Link to='/CreateCountry'>Crear País</Link>
              </button>
            </li>
            <li>
              <button id='etiqueta' className={location.pathname === '/ManageCountry' ? 'selected' : ''}>
                <Link to='/ManageCountry'>Gestionar País</Link>
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Menu;
