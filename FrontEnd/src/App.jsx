import { useEffect, useState } from "react"
function App() {
  const [state, setState] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:3000/countries").then((res) => res.json())
      .then(data => setState(data))

  },
    []
  )

  return (
    <>
      <h1>Countries</h1>
      <section>
        {state.map((element) => {
          return <div key={element._id}>
            <img src={`https://flagsapi.com/${element.code}/flat/64.png`} alt="flag" />
            <h1>{element.name}</h1>
          </div>

        })}
      </section>
    </>
  )
}

export default App
