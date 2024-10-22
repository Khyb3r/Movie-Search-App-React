import React, {useState} from "react";

function MovieList(props) {
    return(
        <>
        {props.movies.map((movie,index) => (
            <div key={index}>
                <img src={movie.Poster} alt="moviePoster" />
                <h3>{movie.Title}</h3>
            </div>
        ))}
        </>
    );
}
export default MovieList;