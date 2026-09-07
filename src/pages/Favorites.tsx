import React, { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoritesContext";

const Favorites = () => {
  const { favorites, handleFavorites } = useContext(FavoriteContext);
  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((favorite) => {
          return (
            <li key={favorite.id}>
              {favorite.title}

              <button
                onClick={() => {
                  handleFavorites(favorite);
                }}
              >
                ★
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Favorites;
