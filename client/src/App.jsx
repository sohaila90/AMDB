import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query = "") => {
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
        setData(json.results || []);
      } else {
        console.error("Failed to fetch");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

    return (
    <div>
      <h2>🎬 Egyptian Arabic Movies</h2>

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
    </div>
  );
}

export default App;