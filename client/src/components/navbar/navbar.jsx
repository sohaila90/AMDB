import "./navbar.css";
import Searchbar from "./searchbar";
import Logo from "./logo";

const Navbar = ({ movie, setMovie, fetchMovies, data, loading }) => {
  return (
  <div className="navbar">
   <Logo />
  <Searchbar
  movie={movie}
  setMovie={setMovie}
  fetchMovies={fetchMovies}
  data={data}
  loading={loading}

  />
  </div>
  )
};

export default Navbar;
