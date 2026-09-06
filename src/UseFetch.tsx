import React, { useEffect, useState } from "react";
import type { Movie } from "./components/MovieList";

const UseFetch = () => {
  const [movieList, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        (setMovies(data), setLoading(false));
      })
      .catch((error) => {
        (setError(error.message), setLoading(false));
      });
  }, []);
  return { movieList, loading, error };
};

export default UseFetch;
