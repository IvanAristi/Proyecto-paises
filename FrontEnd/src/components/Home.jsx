import './Home.css';
import ContinentFilter from './ContinentFilter';
import Africa from'../assets/AFRICA.jpg'
import Europa from'../assets/EUROPA.jpg'
import Asia from'../assets/ASIA.jpg'
import Oceania from'../assets/OCEANIA.jpg'
import America from'../assets/AMERICA.png'


import { useEffect, useState } from "react";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedContinent, setSelectedContinent] = useState('');
    const [inputClicked, setInputClicked] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/countries")
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleContinentChange = (continent) => {
        setSelectedContinent(continent);
        setInputClicked(false);
    };

    const handleInputClick = () => {
        setInputClicked(true);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setInputClicked(false);
    };

    const continentMappings = {
        "África": { name: "África", continents: ["Africa"], image: Africa },
        "América": { name: "América", continents: ["South America", "North America"], image: America },
        "Asia": { name: "Asia", continents: ["Asia"], image: Asia },
        "Europa": { name: "Europa", continents: ["Europe"], image: Europa },
        "Oceanía": { name: "Oceanía", continents: ["Oceania"], image: Oceania }
    };

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedContinent === '' || continentMappings[selectedContinent].continents.includes(country.continent))
    );

    return (
        <div className="Home">
            <div className="search-bar">
                <div className='search'>
                    <div className='searchstyle'>
                        <div className='count'>
                            <span id='pais'>País</span>
                            <input
                                type="text"
                                placeholder='Escribe el país que deseas ver'
                                className='Buscar'
                                value={searchTerm}
                                onChange={handleInputChange}
                                onClick={handleInputClick}
                            />
                        </div>
                        <span id='lupa'>Buscar</span>
                    </div>
                </div>
               
                {inputClicked && searchTerm === '' && 
                    <ContinentFilter continentMappings={continentMappings} onContinentChange={handleContinentChange} />}
                <div className='countries'>
                   
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




