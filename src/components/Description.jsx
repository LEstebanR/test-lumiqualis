import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";


const Description = ({picture, movie}) => {
  console.log(movie);
  return (
    <div className="description-container">
      {movie ? 
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <h2>What's the movie about?</h2>
        <p>{movie.overview}</p>
        <table>
          <tr>
            <th>Relased</th>
            <th>Link</th>
            <th>Budget</th>
            <th>Poster</th>
            <th>Revenue</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>{movie.release_date}</td>
            <td><a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="blank"><FontAwesomeIcon icon={faImdb}/></a></td> 
            <td>{movie.budget}</td>
            <td>{}</td>
            <td>{movie.revenue}</td>
            <td>{movie.status}</td>
          </tr>
          <p>Rating: {movie.vote_average    }</p>
        </table>
      </div>
      : <img src={picture} alt="NASA Pic of the day" className="picture-of-the-day"/>
    }
     
    </div>
  )
}

export default Description;