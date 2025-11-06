import { useEffect, useState } from "react";

const NewestMovies = () => {
  // state for å lagre filmene
  const [movies, setMovies] = useState([]);
  // useeffect kjører bare en gang når komp lastes
  useEffect(() => {
    // async func inni useeffect for å kunne bruke await
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8080/movies/newest");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json(); // json fra flask
        setMovies(data.results); // lagrer filmene i state
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMovies(); // kaller async func
  }, []); // tom array betyr kjør en gang

  // return for å vise filmene
  return (
    <div>
        <h2>Newest movies</h2>
        {movies.length === 0 ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {movies.map((m) => (
                <li key={m.id}>{m.title}</li>
            ))}
            </ul>
        )}
    </div>
  )
};

export default NewestMovies;
