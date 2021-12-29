import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Description from '../components/Description.jsx'
import Movies from '../components/Movies.jsx'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [picture, setPicture] = useState('');
  
  const getMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=NASA&page=1&include_adult=false`);
    setMovies(res.data.results);
  };

  const getPicture = async () => {
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR`);
    setPicture(res.data.hdurl);
  }


  useEffect(() => {
    getMovies();
    getPicture();
  }, []);


  return (
    <div className='home-container'>
      <Description movie={movie} picture={picture} /> 
      <p className='title-date'>Picture of the day: {moment().format('dddd Do, MMM YYYY')} 
        <a target="blank" href={picture}><FontAwesomeIcon icon={faCloudDownloadAlt}></FontAwesomeIcon></a>
      </p>
      <Movies movies={movies} setMovie={setMovie}/>
    </div>
  )
}

export default Home;