import React, {useState} from "react";

function MovieList(props) {
    const FavouriteComponent = props.favouriteComponent;
    const addToFavouriteList = props.handleFavouriteMovieClick;
    return(
        <>
        {props.movies.map((movie,index) => (
            <div className="image-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt="moviePoster" />
                <div className="overlay d-flex align-items-center justify-content-center"
                    onClick={() => handleFavouriteMovieClick(movie)}>
                    <FavouriteComponent/>
                </div>
            </div>
        ))}
        </>
    );
}
export default MovieList;