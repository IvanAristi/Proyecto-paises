import "./Home.css";
import ContinentFilter from "./ContinentFilter";
import Africa from "../assets/AFRICA.jpg";
import Europa from "../assets/EUROPA.jpg";
import Asia from "../assets/ASIA.jpg";
import Oceania from "../assets/OCEANIA.jpg";
import America from "../assets/AMERICA.png";

import Country from "./Country";

import { useEffect, useState } from "react";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [inputClicked, setInputClicked] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/countries`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleContinentChange = (continent) => {
    setSelectedContinent(continent);
    setInputClicked(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setInputClicked(false);
  };

  const continentMappings = {
    África: { name: "África", continents: ["Africa"], image: Africa },
    América: {
      name: "América",
      continents: ["South America", "North America"],
      image: America,
    },
    Asia: { name: "Asia", continents: ["Asia"], image: Asia },
    Europa: { name: "Europa", continents: ["Europe"], image: Europa },
    Oceanía: { name: "Oceanía", continents: ["Oceania"], image: Oceania },
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedContinent === "" ||
        continentMappings[selectedContinent].continents.includes(
          country.continent
        ))
  );

  return (
    <div className="Home">
      <div className="search-bar">
        <div className="search">
          <div className="searchstyle">
            <div className="count">
              <span id="pais">País</span>
              <input
                type="text"
                placeholder="Escribe el país que deseas ver"
                className="Buscar"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={() => setInputClicked(true)}
                onBlur={() => setInputClicked(false)}
              />
            </div>
          </div>
        </div>

        {inputClicked && searchTerm === "" && (
          <ContinentFilter
            continentMappings={continentMappings}
            onContinentChange={handleContinentChange}
          />
        )}

        <section className="Cards">
          {countries.length &&
            filteredCountries.map((country) => {
              return (
                <Country key={country._id} country={country} setDetails={setDetails} />
              );
            })}
        </section>
        {details && (
          <div className="details">
            <div className="detailscontainer">
              <button onClick={() => setDetails(null)}>Close</button>
              <div className="p-1"><p className="button-d">name: </p> <p> {details.name}</p></div>
              <div className="p-4"><p className="button-d">capital : </p> <p> {details.capital}</p></div>
              <div className="p-2"><p className="button-d" >language : </p> <p> {details.language}</p></div>
              <div className="p-3"><p className="button-d">continent : </p> <p> {details.continent}</p></div>
              <div className="p-5"><p className="button-d">currency : </p> <p> {details.currency}</p></div>
              <div className="p-6"><p className="button-d">code : </p> <p> {details.code}</p></div>
              <img
              src={`https://flagsapi.com/${details.code}/flat/64.png`}
              alt="flag"
            />
            </div>


           
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
