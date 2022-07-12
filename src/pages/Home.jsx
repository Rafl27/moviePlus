import { useState, useEffect } from 'react';
import MovieCard from '../Components/MovieCard';
import Movie from './Movie';

import './MoviesGrid.css';

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  // console.log(moviesURL)
  // console.log(apiKey)

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    //console.log(data.results)
    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    console.log(topRatedUrl)
    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className='container'>
      <h2 className='title'>Top Rated Movies</h2>
      <div className='movies-container'>
        {/* Loading */}
        {topMovies.length === 0 && <p>Loading...</p>}
        {/* if inline with logic operator && (if topMovies.length > 0 then topMovies.map....) */}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie = {movie}/>)}
      </div>
    </div>
  )
}

export default Home