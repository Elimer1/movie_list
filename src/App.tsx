import Layout from "./components/Layout";
import Movies from "./pages/Movies.tsx";
import "./App.css";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails.tsx";
import NotFound from "./pages/NotFound.tsx";
import FavoritesProvider from "./contexts/FavoritesContext.tsx";
import Favorites from "./pages/Favorites.tsx";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
