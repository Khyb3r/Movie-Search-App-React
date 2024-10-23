import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import TitleBar from "./TitleBar";
import SearchBar from "./SearchBar";
import AddFavourites from "./AddFavourites";
import RemoveFavourite from "./RemoveFavourite";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

useEffect(() => {
  getMoviesApiRequest(movieSearch);
}, [movieSearch]);

useEffect(() => {
  const existingFavouritesList = JSON.parse(localStorage.getItem("react-movie-app-favourites-list"));
  setFavourites(existingFavouritesList);
}, [])

function savetoLocalStorage(items) {
  localStorage.setItem("react-movie-app-favourites-list", JSON.stringify(items));
}


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

  savetoLocalStorage(newFavouriteMoviesList);
}
function removeFavouriteMovie(movie) {
  setFavourites((prevFavsList) =>
     favourites.filter((favourite) => 
      (favourite.imdbID !== movie.imdbID)));
}

  return(
    <div className="container-fluid movie-app">
      <div className="row align-items-center mt-2 mb-0">
        <div className="col title-bar">
          <TitleBar heading="MovSearcherPro" />
        </div>
        <div className="col-auto">
          <SearchBar movieSearch={movieSearch} setMovieSearch={setMovieSearch} />
        </div>
      </div>
      <div className="row mt-4">
        <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouriteMovieClick={addFavouriteMovie} />
      </div>
      <div>
      <div className="col title-bar">
          <TitleBar heading="Favourites" />
        </div>
        <div className="row mt-2">
          <MovieList movies={favourites} favouriteComponent={RemoveFavourite} handleFavouriteMovieClick={removeFavouriteMovie} />
        </div>
      </div>
    </div>
  );
}

export default App;
