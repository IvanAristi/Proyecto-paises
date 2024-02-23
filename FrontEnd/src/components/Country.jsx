import "./Home.css";
import { useEffect, useState } from "react";

export default function Country({ country, setDetails }) {
  const [fondo, setFondo] = useState("")

  useEffect(() => {
    const provitional = "https://s1.eestatic.com/2022/07/11/curiosidades/paises/686941538_225721406_1706x960.jpg"

    fetch(`https://pixabay.com/api/?key=42461344-08d475e0c00691ccc4262c413&q=${country.name.trim()}+city&image_type=photo&pretty=true&per_page=3`)
    .then(res => res.json())
    .then(data => {
      setFondo(data.hits.length ? data.hits[0].largeImageURL : provitional)
    })
    .catch(error => console.error(error))
  }, [])

  console.log(fondo)

  return (
    <div
      key={country._id}
      className="content"
      onClick={() =>
        setDetails({
          name: country.name,
          language: country.language,
          continent: country.continent,
          code: country.codeh1,
        })
      }
    >
      
      <picture className="fondo">
        <img src={fondo} alt="fondo" />
      </picture>
      <div className="content__items">
        <div>
          <img
            src={`https://flagsapi.com/${country.code}/flat/64.png`}
            alt="flag"
          />
        </div>
        <h2>{country.name}</h2>
      </div>
    </div>
  );
}

