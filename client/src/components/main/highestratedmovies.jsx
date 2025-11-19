import { useEffect, useState } from "react";

const HighestRatedMovies = () => {
  const [highest, setHighest] = useState([]);

  useEffect(() => {
    const fetchHighestMovies = async () => {
        try {
        const response = await fetch("http://localhost:8080/movies/highest-rated");

            if (!response.ok) {
                throw new Error("Failed to fetch highest rated movies");
            }

          const data = await response.json();
          setHighest(data);
        
        } catch (error) {
            console.error("Something went wrong", error)
        }
    };
        fetchHighestMovies();
  }, []);

  return (
    <div>
      <h1>Highest Rated Movies</h1>
      {/* Hvis dette tegnet: ? highest array er tom vis loading */}
      {highest.length === 0 ? (
      <p>Loading...</p>
    //   hvis ikke dette tegnet : hvis filmene
      ) : (
        <ul>
        {highest.map((bleie) => (
            <li key={bleie.id}>{bleie.title}</li>
        ))}
        </ul>
      )}
    </div>
  );
};

export default HighestRatedMovies;
