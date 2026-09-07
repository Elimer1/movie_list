import UseFetch from "../UseFetch";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { useMemo, useState } from "react";

const Movies = () => {
  const { movieList, loading, error } = UseFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  const [search, setSearch] = useState<string>("");

  const filteredMovieList = useMemo(() => {
    return movieList.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, movieList]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <SearchBar onSearchsubmit={setSearch} />
      <MovieList movies={filteredMovieList} />
    </>
  );
};

export default Movies;
