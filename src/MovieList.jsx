import React, {useState} from "react";

function MovieList(props) {
    return(
        <>
        {props.movies.map((movie,index) => (
            <div className="d-fimage-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt="moviePoster" />
            </div>
        ))}
        </>
    );
}
export default MovieList;