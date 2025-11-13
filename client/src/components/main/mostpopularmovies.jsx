import { useEffect, useState } from "react";

const MostPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const response = await fetch("http://localhost:8080/movies/popular");
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json();
            setPopularMovies(data.results);
        } catch (error) {
            console.error(error.message);
        }
    };

    fetchMovies();
}, []);

return (
    <div>
        <h2>Most popular movies</h2>
        {popularMovies.length === 0 ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {popularMovies.map((m) => (
                <li key={m.id}>{m.title}</li>
            ))}
             </ul>
        )}
    </div>
)
};

export default MostPopularMovies;
