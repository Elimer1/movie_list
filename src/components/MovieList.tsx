import React from "react";
import MovieCard from "./MovieCard";

export interface Movie {
  id: number;
  title: string;
  body: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul>
      {movies.map((movie: Movie) => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
