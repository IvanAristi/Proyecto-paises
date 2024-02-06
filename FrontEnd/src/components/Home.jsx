import './Home.css'
import { useEffect, useState } from "react"


const Home = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
      fetch("http://127.0.0.1:3000/countries")
          .then(res => res.json())
          .then(data => setCountries(data))
  }, [])

  const handleSearch = (event) => {
      setSearchTerm(event.target.value)
  }

  const filteredCountries = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
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
              <input
                  type="text"
                  placeholder="Pais.."
                  value={searchTerm}
                  onChange={handleSearch}
              />
              <h1>Countries</h1>
              <section>
                  {filteredCountries.map((country) => (
                      <div key={country._id}>
                          <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt="flag" />
                          <h1>{country.name}</h1>
                      </div>
                  ))}
              </section>
          </div>
      </div>
  );
}

export default Home;




