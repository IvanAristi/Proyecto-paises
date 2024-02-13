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
      <div className="Home">
     
          <div className="search-bar">
           
           <div className='search'>
              <input className='searchstyle'
                  type="text"
                  placeholder="Pais.."
                  
                  value={searchTerm}
                  onChange={handleSearch}
              />
              </div>

              <div className='countries'>
              <h1>Countries</h1>
              </div>
              <section className='Cards'>
                  {filteredCountries.map((country) => (
                      <div key={country._id} className="content">
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




