import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

function App() {
  const [movies, setMovies] = useState([{
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode VII - The Force Awakens",
    "Year": "2015",
    "imdbID": "tt2488496",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
},]);
useEffect(() => {
  getMoviesApiRequest();
}, []);


const getMoviesApiRequest = async () => {
  try {
    const apiUrl = 'https://www.omdbapi.com/?s=star wars&apikey=f43f88af';
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new error
      
    }



    const movieData = await response.json();

    console.log(movieData);
    setMovies(movieData.Search);
    
  } catch (error) {
    console.error(error);
    console.log(error);
    
  }
}

  return(
  <div className='container-fluid movie-app'>
    <div className='row'>
      <MovieList movies={movies}/>
    </div>
  </div>
  );
}

export default App;
