import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import TitleBar from "./TitleBar";
import SearchBar from "./SearchBar";
import AddFavourites from "./AddFavourites";
import RemoveFavourite from "./RemoveFavourite";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function App() {
  /* movie state variable for the movies being pulled from the API so we can access their properties
  Movie search state variable which will be passed into the API url as a string from our search
  bar when the user inputs.
  favourites state variable for us to add functionality to favourite, unfavourite a chosen movie.
  */
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [favourites, setFavourites] = useState([]);


useEffect(() => {
  // passes in our empty string to the getMovie method as the component first mounts which will return nothing
  getMoviesApiRequest(movieSearch);
  // dependeny to re-render and make the method call everytime the movieSearch value changes
}, [movieSearch]);

useEffect(() => {
  try {
    // converts the string into a json object from the local storage
  const existingFavouritesList = JSON.parse(localStorage.getItem("react-movie-app-favourites-list"));
  // checking so that even if our exitsing list is null it doesn't cause an error
  if (existingFavouritesList) {
    setFavourites(existingFavouritesList);
  } else {
    setFavourites([]);
  }
  } catch (error) {
    console.log(error);
  }
  // runs when the component mounts and has no dependencies
}, []) 

// method to save our favourites list to local storage
function savetoLocalStorage(items) {
  localStorage.setItem("react-movie-app-favourites-list", JSON.stringify(items));
}

// async function to make the api call
const getMoviesApiRequest = async (movieSearch) => {
  try {
    // to modify search to fit user input
    const apiUrl = `https://www.omdbapi.com/?s=${movieSearch}&apikey=f43f88af`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response failure" + response.statusText);
    }

    const movieData = await response.json();

    // only if a movie inputs a Search object we add it to our setMovies updater state functiom
    if (movieData.Search) {
      setMovies(prevMovieSearch => (movieData.Search)); 
    }
    
  }
    catch (error) {
      console.log(error);
  }
}

// method to add movie we click on to our favourites
function addFavouriteMovie(movie) {
  // keeps the old array of previous favourites using the spread operator so we don't lose them
  const newFavouriteMoviesList = [...favourites, movie];

  setFavourites(prevFavsList => (newFavouriteMoviesList));
  // add to local storage
  savetoLocalStorage(newFavouriteMoviesList);
}


// removes favourites upon click
function removeFavouriteMovie(movie) {
  const updatedFavouritesList = favourites.filter((favourite) => 
    (favourite.imdbID !== movie.imdbID));

  setFavourites(prevFavsList => (updatedFavouritesList));
  // add to local storage 
  savetoLocalStorage(updatedFavouritesList);
}

  return(
    <div className="container-fluid movie-app">
      <div className="row align-items-center mt-2 mb-0">
        <div className="col title-bar">
          <TitleBar heading="MoovySearcherPro" />
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
