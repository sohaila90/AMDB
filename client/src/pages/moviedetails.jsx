import { useEffect, useState } from "react";
import { useParams } from "react-router";

function MovieDetails() {
  let params = useParams();
  console.log(params.id);

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const response = await 
        fetch(`http://localhost:8080/movies/${params.id}`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        setMovieDetails(data.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMoviesDetails();
  }, []);

  return (
    <div>
      <p>Movie details page</p>
      <h1>Movies: {params.id}</h1>
      <h2>{movieDetails}</h2>
    </div>
  );
}

export default MovieDetails;
