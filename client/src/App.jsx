import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Startintro from "./components/main/startintro";
import NewestMovies from "./components/main/newestmovies";
import MostPopularMovies from "./components/main/mostpopularmovies";
import RandomMovies from "./components/main/randommovies";
import HighestRatedMovies from "./components/main/highestratedmovies";
import Searchbar from "./components/navbar/searchbar";
import RegisterSite from "./pages/registersite";
import Home from "./pages/home";
import MovieDetails from "./pages/moviedetails";


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
    <Router>
      <Navbar
        movie={movie}
        setMovie={setMovie}
        fetchMovies={fetchMovies}
        data={data}
        loading={loading}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/register" element={<RegisterSite />} />

        <Route path="/movie/:id" element={<MovieDetails />} />
        

        <Route path="/home/startintro" element={<Startintro />} />

        <Route
          path="/home/highestratedmovies"
          element={<HighestRatedMovies />} />

        <Route path="/home/mostpopularmovies" element={<MostPopularMovies />} />

        <Route path="/home/newestmovies" element={<NewestMovies />} />

        <Route path="/home/randommovies" element={<RandomMovies />} />
      
      </Routes>
    </Router>

    // <RegisterSite />
    // <Startintro />
    // <NewestMovies />
    // <MostPopularMovies />
    // <RandomMovies />
    // <HighestRatedMovies />

    /* //hvorfor vil ikke searchbar funke her */
    /* <Searchbar /> */
  );
}

export default App;
