import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Startintro from "./components/startintro";
import NewestMovies from "./components/main/newestmovies";
import MostPopularMovies from "./components/main/mostpopularmovies";
import RandomMovies from "./components/main/randommovies";
import HighestRatedMovies from "./components/main/highestratedmovies";
import Searchbar from "./components/navbar/searchbar";
import RegisterSite from "./components/registersite";

function App() {
  const [movie, setMovie] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(
    async (query = "") => {
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
          setData(Array.isArray(json) ? json : json.results || [movie]);
        } else {
          console.error("Failed to fetch");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [movie]
  );

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

      <RegisterSite />
      <Startintro />
      <NewestMovies />
      <MostPopularMovies />
      <RandomMovies />
      <HighestRatedMovies />
      {/* //hvorfor vil ikke searchbar funke her */}
      {/* <Searchbar /> */}
    </div>
  );
}

export default App;
