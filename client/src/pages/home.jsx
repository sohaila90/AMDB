import { useState, useEffect } from "react";
import MovieSlider from "../components/main/movieslider";
import Startintro from "../components/main/startintro";

const Home = () => {
  const [randomMoviesSlide, setRandomMoviesSlide] = useState([]);

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const response = await fetch("http://localhost:8080/movies/random");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data =
        await response.json();
        setRandomMoviesSlide(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchRandomMovies();
  }, [])

  return (
    <div>
      <Startintro />
      <MovieSlider movies={randomMoviesSlide} />
    </div>
  );
};

export default Home;
