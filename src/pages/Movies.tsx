import UseFetch from "../UseFetch";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Movies = () => {
  const { movieList, loading, error } = UseFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <SearchBar />
      <MovieList movies={movieList} />
    </>
  );
};

export default Movies;
