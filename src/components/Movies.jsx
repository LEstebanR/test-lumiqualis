import axios from "axios";

const Movies = ({movies, setMovie}) => {

  const getMovie = async(id) =>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
    setMovie(res.data);
  }
    
  const selectMovie = (e) => {
    const id = movies[e.target.alt].id;
    console.log(id);
    getMovie(id);

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