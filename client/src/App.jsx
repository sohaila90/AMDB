import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [movie, setMovie] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async() => {
    if (!movie.trim()) return;
    setLoading(true)

    try {
      const response = await fetch("http://localhost:8080/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({movie: movie}),
      })
      if(response.ok) {
        const json = await response.json()
        console.log(data)
        setData(json.results || []);
      } else {
        console.error("Failed to fetch")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  };

  return <div>
    <input type="text" value={movie} onChange={(e) => {setMovie(e.target.value)}} />
    <button 
    onClick={() => {
      fetchData();
    }}
    >
      Search
      </button>
    {loading ? <p>Loading</p> : null}
    <hr />

  
      {data.length > 0 && (
  <ul>
  {data.map ((m) => (
    <li key={m.id}>
    <h3>{m.original_title}</h3>
    </li>
   ))}
   </ul>
   )}
  </div>
  
  //           <span >{array}</span>

  //         ))}
  //     <h1>Hallo</h1>
  //   </>
  // );
}

export default App;
