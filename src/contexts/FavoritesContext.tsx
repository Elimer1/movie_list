import {
  createContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
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
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === favorite.id)) {
        return prevFavorites.filter((fav) => fav.id !== favorite.id);
      } else {
        return [...prevFavorites, favorite];
      }
    });
  };
  const value = useMemo(() => ({ favorites, handleFavorites }), [favorites]);
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoritesProvider;
