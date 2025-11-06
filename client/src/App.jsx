import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Searchbar from "./components/navbar/searchbar";
import Startintro from "./components/startintro";
import NewestMovies from "./components/main/newestmovies";


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
  });

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>

      <Navbar
        movie={movie}
        setMovie={setMovie}
        fetchMovies={fetchMovies}
        data={data}
        loading={loading}
      />

      <Startintro />
      <NewestMovies/>
      
    </div>
  );
}

export default App;
