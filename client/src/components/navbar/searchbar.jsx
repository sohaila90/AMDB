
const Searchbar = ({ movie, setMovie, fetchMovies, loading, data}) => {
    return (
        <div>
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
    )
};

export default Searchbar;
