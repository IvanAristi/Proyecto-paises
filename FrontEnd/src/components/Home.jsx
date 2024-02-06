import './Home.css'
import { useEffect, useState } from "react"





const Home = () => {
    const [state, setState] = useState([])
    useEffect(() => {
      fetch("http://127.0.0.1:3000/countries").then((res) => res.json())
        .then(data => setState(data))
  
    },
      []
    ) 
  return (
    <div className="container">
    <aside className="menu">
      <ul>
        <li>Logo</li>
        <li>Home</li>
        <li>Crear Pais</li>
        <li>Gestionar Pais</li>
      </ul>
    </aside>

    <div className="search-bar">
      <input type="text" placeholder="Pais.." />
      <h1>Countries</h1>
      <section>
        {state.map((element) => {
          return <div key={element._id}>
            <img src={`https://flagsapi.com/${element.code}/flat/64.png`} alt="flag" />
            <h1>{element.name}</h1>
          </div>

        })}
      </section>


    </div>
    
    </div>
  );
}

export default Home;

