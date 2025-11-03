import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
function App() {
  const [movie, setMovie] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async (query = "") => {
    if (!movie.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/movies", {
        method: query ? "POST" : "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: query ? JSON.stringify({ movie: query }) : null,
      });
      if (response.ok) {
        const json = await response.json();
        setData(Array.isArray(json) ? json : json.results || []);
      } else {
        console.error("Failed to fetch");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <button>Top movies</button>
      <button>High rated movies</button>
      <button>80s movies</button>
      <button>90s movies</button>
      <h2>🎬 Egyptian Movies</h2>
      <p>
        Welcome to the movie database for egyptian movies translated to english.
        <br />
        On this site you will find many movies ranging from comedy to drama and
        so on.
      </p>

      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Search for a movie..."
      />

      <button
        onClick={() => {
          fetchMovies(movie);
        }}
      >
        Search
      </button>

      {loading && <p>Loading...</p>}

      <hr />

      {data.length > 0 ? (
        <ul>
          {data.map((m) => (
            <li key={m.id}>
              <h3>{m.title || m.original_title}</h3>
              {m.overview && <p>{m.overview}</p>}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No movies found.</p>
      )}
        <Navbar />
    </div>
  );
}

export default App;
