import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Description from '../components/Description.jsx'
import Movies from '../components/Movies.jsx'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  
  const getMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=NASA&page=1&include_adult=false`);
    setMovies(res.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='home-container'>
      <Description movie={movie}/>
      <p className='title-date'>Picturte of the day: {moment().format('dddd, MMM do YYYY')}</p>
      <Movies movies={movies}/>
    </div>
  )
}

export default Home;