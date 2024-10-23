import React, {useState} from "react";


function MovieList(props) {
    const FavouriteComponent = props.favouriteComponent;
    const addToFavouriteList = props.handleFavouriteMovieClick;


    return(
        <div className="movie-list d-flex flex-row overflow-auto"> 
        {props.movies.map((movie, index) => (
            <div className="image-container m-2" key={index}>
                <img src={movie.Poster} alt="moviePoster" className="img-fluid" />
                <div
                    className="overlay d-flex align-items-center justify-content-center"
                    onClick={() => addToFavouriteList(movie)}
                >
                    <FavouriteComponent />
                </div>
            </div>
        ))}
    </div>
    );
}
export default MovieList;