import React from "react";
import "./navbar.css";
import Searchbar from "./searchbar";

const Navbar = ({ movie, setMovie, fetchMovies, data, loading }) => {
  return (
  <div className="navbar">
    <h2>Navbar</h2>
  
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
