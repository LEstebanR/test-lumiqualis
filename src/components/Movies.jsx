
const Movies = ({movies}) => {

  return (
    <div className="movies-container">
      
      {movies.map((movie, i) => (
        movie.poster_path ?
        <img  className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> 
        : null
        ))}
    </div>
  )
}

export default Movies;