import React, { useEffect, useState } from "react";
import type { Movie } from "./components/MovieList";

const UseFetch = (url: string) => {
  const [movieList, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        (setMovies(data), setLoading(false));
      })
      .catch((error) => {
        (setError(error.message), setLoading(false));
      });
  }, [url]);
  return { movieList, loading, error };
};

export default UseFetch;
