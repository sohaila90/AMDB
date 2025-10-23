import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [movie, setMovie] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async() => {
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
        const data = await response.json()
        console.log(data)
        setData(data)
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
    <div></div>
  </div>
  // // const [count, setCount] = useState(0);
  // const [array, setArray] = useState([]);

  // // const fetchAPI = async () => {
  // //   const response = await axios.get("http://localhost:8080/movies");
  // //   setArray(response.data.movies);
  // // };

  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/discover/movie?api_key=47d3a098d06ebffba749d6fe35c2b95e"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => setArray(json.results));

  //   // fetchAPI("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar-EGY&page=1&region=Egypt&sort_by=popularity.desc&with_origin_country=EG&with_original_language=ar");
  //   App();
  // }, []);
  // console.log(setArray);
  // return (
  //   <>
  //      { setArray.map((array) => (

  //           <span >{array}</span>

  //         ))}
  //     <h1>Hallo</h1>
  //   </>
  // );
}

export default App;
