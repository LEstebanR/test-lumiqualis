import { useState } from "react";

const Movies = ({movies, setMovie}) => {
    
  const selectMovie = (e) => {
    console.log(e.target.alt);
    setMovie(movies[e.target.alt]);

  }
  
  return (
    <div className="movies-container">
      
      {movies.map((movie, i) => (
        movie.poster_path ?
        <img  className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={i} value={i} onClick={selectMovie}  /> 
        : null
        ))}
    </div>
  )
}

export default Movies;