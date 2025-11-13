import { useEffect, useState } from "react";

const RandomMovies = () => {
  //useState er som en liten boks med minner 🧰 som komponenten får lov til å bruke.
  //Boksen har to ting inni seg:
  // Verdien akkurat nå (f.eks. en liste med filmer)
  // En knapp som kan endre verdien (det er det setMovies gjør)
  const [randomMovies, setRandomMovies] = useState([]);
  //“Hei React, lag en liten minneboks for meg som starter tom ([]),og gi meg en knapp jeg kan trykke på (setMovies) hvis jeg vil endre det som er inni.”

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8080/movies/random");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        setRandomMovies(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Random movies</h1>
      {randomMovies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {randomMovies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RandomMovies;
