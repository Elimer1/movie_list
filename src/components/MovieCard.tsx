import React, { useContext } from "react";
import type { Movie } from "./MovieList";
import { FavoriteContext } from "../contexts/FavoritesContext";
import { Link } from "react-router-dom";

interface MovieCardProp {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProp) => {
  const { favorites, handleFavorites } = useContext(FavoriteContext);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <article>
      <h3 className="movie-title">
        <Link to={`/movies/${movie.id}`}> {movie.title}</Link>
      </h3>
      <p className="movie-synopsis">{movie.body}</p>
      <button onClick={() => handleFavorites(movie)}>
        {isFavorite ? "★" : "☆"}
      </button>
    </article>
  );
};

export default MovieCard;
