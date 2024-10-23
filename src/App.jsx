import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import TitleBar from "./TitleBar";
import SearchBar from "./SearchBar";
import AddFavourites from "./AddFavourites";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

useEffect(() => {
  getMoviesApiRequest(movieSearch);
}, [movieSearch]);


const getMoviesApiRequest = async (movieSearch) => {
  try {
    const apiUrl = `https://www.omdbapi.com/?s=${movieSearch}&apikey=f43f88af`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response failure" + response.statusText);
    }

    const movieData = await response.json();

    if (movieData.Search) {
      setMovies(prevMovieSearch => (movieData.Search)); 
    }
    
  }
    catch (error) {
      console.error(error);
      console.log(error);
  }
}

function addFavouriteMovie(movie) {
  const newFavouriteMoviesList = [...favourites, movie];

  setFavourites(prevFavsList => (newFavouriteMoviesList));
}

  return(
    <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-2 mb-2 justify-content-center'>
                <TitleBar heading="Movies" />
                <SearchBar movieSearch={movieSearch} setMovieSearch={setMovieSearch} />
            </div>
            <div className='row'>
                <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouriteMovieClick={addFavouriteMovie} />
            </div>
        </div>
  );
}

export default App;
