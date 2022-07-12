import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
//useSearchParams allows me to access what`s in the URL
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  //search params, like useState, returns an array of functions, I just want the first one, so that`s why it has been destructured 
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");
  //using search params on the following link http://localhost:3000/search?q=BATMAN
  //getting 'q', it will return BATMAN


  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results)
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
    // console.log(topRatedUrl)
  }, [query]);
  //above, every time the query changes, getSearchedMovies is executed

  return (
    <div className="container">
      <h2 className="title">
        Search: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {/* Loading */}
        {movies.length === 0 && <p>Loading...</p>}
        {/* if inline with logic operator && (if topMovies.length > 0 then topMovies.map....) */}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;