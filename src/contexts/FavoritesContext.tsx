import { createContext, useState, type PropsWithChildren } from "react";
import type { Movie } from "../components/MovieList";

interface FavoritesProps {
  favorites: Movie[];
  handleFavorites: (favorite: Movie) => void;
}

export const FavoriteContext = createContext<FavoritesProps>({
  favorites: [],
  handleFavorites: () => {},
});

const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const handleFavorites = (favorite: Movie) => {
    if (favorites.some((fav) => fav.id === favorite.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== favorite.id));
    } else {
      setFavorites([...favorites, favorite]);
    }
  };

  return (
    <FavoriteContext value={{ favorites, handleFavorites }}>
      {children}
    </FavoriteContext>
  );
};

export default FavoritesProvider;
