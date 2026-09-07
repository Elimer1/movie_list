import UseFetch from "../UseFetch";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { useState } from "react";

const Movies = () => {
  const { movieList, loading, error } = UseFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  const [search, setSearch] = useState<string>("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredMovieList = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <MovieList movies={search === "" ? movieList : filteredMovieList} />
    </>
  );
};

export default Movies;
