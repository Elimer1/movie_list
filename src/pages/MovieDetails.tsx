import React, { useState } from "react";
import UseFetch from "../UseFetch";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const MovieDetails = () => {
  const { movieList, loading, error } = UseFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const { id: movieId } = useParams();
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState<boolean>(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;

  const movie = movieList.find((movie) => movie.id === Number(movieId));

  if (!movie) return <NotFound />;

  const handleGoBack = () => {
    navigate(-1);
  };

  const toggleFavorite = () => {
    setFavorite(favorite ? false : true);
  };

  return (
    <>
      <button className="go-back-btn" onClick={handleGoBack}>
        &larr; Go Back
      </button>

      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-description">{movie.body}</p>
      <button className="favorite-btn" onClick={toggleFavorite}>
        {favorite ? "★" : "☆"} Add to Favorites
      </button>
    </>
  );
};

export default MovieDetails;
