import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Country({ country, setDetails }) {
  const [fondo, setFondo] = useState("");

  useEffect(() => {
    const provitional =
      "https://s1.eestatic.com/2022/07/11/curiosidades/paises/686941538_225721406_1706x960.jpg";

    fetch(
      `https://pixabay.com/api/?key=42461344-08d475e0c00691ccc4262c413&q=${country.name.trim()}+city&image_type=photo&pretty=true&per_page=3`
    )
      .then((res) => res.json())
      .then((data) => {
        setFondo(data.hits.length ? data.hits[0].largeImageURL : provitional);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="content" onClick={() => setDetails({
        name: country.name,
        language: country.language,
        continent: country.continent,
        currency: country.currency,
        capital: country.capital,
        code: country.code
      })}>
      <picture className="fondo">
        <img src={fondo} alt="fondo" />
      </picture>
      <div className="content__items">
        <div className="items">
          <div className="item">
            <picture>
              <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt="flag" />
            </picture>
            <div className="item__info">
              <h2 title={country.name}>{country.name}</h2>
              <p>{country.continent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


