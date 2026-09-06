import React from "react";
import type { Movie } from "./MovieList";

interface MovieCardProp {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProp) => {
  return (
    <article>
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-synopsis">{movie.body}</p>
    </article>
  );
};

export default MovieCard;
