import { Link } from "react-router-dom";
import "./navbar.css";
import Searchbar from "./searchbar";
import Logo from "./logo";

const Navbar = ({ movie, setMovie, fetchMovies, data, loading }) => {
  
  return (
    <div className="main-header">
      <Logo />

      <nav>
      <Link to="/home">Home</Link>

      <Link to="/register">Make an account</Link>

      <Link to="/home/startintro">Intro</Link>

      <Link to="/home/highestratedmovies">Highest rated movies</Link>

      <Link to="/home/mostpopularmovies">Most popular movies</Link>

      <Link to="/home/newestmovies">Newest movies</Link>
      
      <Link to="/home/randommovies">Random movies</Link>
      
      </nav>

      <Searchbar
        movie={movie}
        setMovie={setMovie}
        fetchMovies={fetchMovies}
        data={data}
        loading={loading}
      />
    </div>
  );
};

export default Navbar;

// <Link to="/home">Home</Link>;
// <Link
//   to={{
//     pathname: "/home/startintro",
//     // search: "?query=string",
//     // hash: "#hash",
//   }}
// />;
