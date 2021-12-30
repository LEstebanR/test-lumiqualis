import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faCloudDownloadAlt, faQuestion } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";


const Description = ({picture, movie}) => {
  
  const background = movie ?  {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` ,
    backgroundSize: "cover", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",


  } : null
  return (

    console.log(movie),
    
    <div className="description-container" style={background}>
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
            <td>{movie.release_date ? moment(movie.release_date).calendar() : <FontAwesomeIcon icon={faQuestion} className="icon"/>}</td>
            <td>{movie.imdb_id ? 
              <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="blank"><FontAwesomeIcon icon={faImdb} className="icon"/></a>
              : <FontAwesomeIcon icon={faQuestion} className="icon"/>}
              </td> 
            <td>{movie.budget && movie.budget !== 0 ? movie.budget : <FontAwesomeIcon icon={faQuestion} className="icon"/>}</td>
            <td>{movie.poster_path ? 
              <a target="blank" href={`https://image.tmdb.org/t/p/w500${movie.poster_path}` }><FontAwesomeIcon icon={faCloudDownloadAlt} className="icon"></FontAwesomeIcon></a>
              : <FontAwesomeIcon icon={faQuestion} className="icon"/>}  
            </td>
            <td>{movie.revenue && movie.revenue !== 0 ? movie.revenue : <FontAwesomeIcon icon={faQuestion} className="icon"/>}</td>
            <td>{movie.status}</td>
          </tr>
        </table>
        <p>Rating: {movie.vote_average ? movie.vote_average : <FontAwesomeIcon icon={faQuestion} className="icon"/>    }</p>
      </div>
      : <img src={picture} alt="NASA Pic of the day" className="picture-of-the-day"/>
    }

    </div>
  )
}

export default Description;